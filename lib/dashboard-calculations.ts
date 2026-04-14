/**
 * Dashboard Data Calculation Utilities
 * Provides auto-calculation functions for syncing all dashboard values
 */

export interface DataEntry {
  date: string
  revenue: number
  impressions: number
  clicks: number
  ecpm: number
}

export interface WithdrawalEntry {
  id: string
  date: string
  amount: number
  status: string
  method: string
}

/**
 * Get the latest entry from data array
 */
export function getLatestEntry(data: DataEntry[]): DataEntry | null {
  if (!data || data.length === 0) return null
  return data[data.length - 1]
}

/**
 * Parse date string in format "DD-MM-YYYY"
 */
function parseDate(dateStr: string): Date {
  const [day, month, year] = dateStr.split("-").map(Number)
  return new Date(year, month - 1, day)
}

/**
 * Get current month start and end dates
 */
function getCurrentMonthRange(): { start: Date; end: Date } {
  const now = new Date()
  const start = new Date(now.getFullYear(), now.getMonth(), 1)
  const end = new Date(now.getFullYear(), now.getMonth() + 1, 0)
  return { start, end }
}

/**
 * Get last 6 months date range
 */
function getLast6MonthsRange(): { start: Date; end: Date } {
  const now = new Date()
  const end = new Date(now.getFullYear(), now.getMonth() + 1, 0)
  const start = new Date(now.getFullYear(), now.getMonth() - 5, 1)
  return { start, end }
}

/**
 * Filter data entries by month (current month)
 */
function filterCurrentMonth(data: DataEntry[]): DataEntry[] {
  const { start, end } = getCurrentMonthRange()
  return data.filter((entry) => {
    const date = parseDate(entry.date)
    return date >= start && date <= end
  })
}

/**
 * Filter data entries by last 6 months
 */
function filterLast6Months(data: DataEntry[]): DataEntry[] {
  const { start, end } = getLast6MonthsRange()
  return data.filter((entry) => {
    const date = parseDate(entry.date)
    return date >= start && date <= end
  })
}

/**
 * Calculate sum of revenue for data entries
 */
function sumRevenue(data: DataEntry[]): number {
  return data.reduce((sum, entry) => sum + entry.revenue, 0)
}

/**
 * Calculate total withdrawals
 */
function sumWithdrawals(withdrawals: WithdrawalEntry[]): number {
  return withdrawals.reduce((sum, entry) => sum + entry.amount, 0)
}

/**
 * Calculate this month's total revenue
 */
export function calculateThisMonth(data: DataEntry[]): number {
  const currentMonthData = filterCurrentMonth(data)
  return Math.round(sumRevenue(currentMonthData) * 100) / 100
}

/**
 * Calculate last 6 months total revenue
 */
export function calculateLast6Months(data: DataEntry[]): number {
  const last6MonthsData = filterLast6Months(data)
  return Math.round(sumRevenue(last6MonthsData) * 100) / 100
}

/**
 * Calculate total revenue from all data
 */
export function calculateTotalRevenue(data: DataEntry[]): number {
  return Math.round(sumRevenue(data) * 100) / 100
}

/**
 * Calculate available balance (total revenue - withdrawals)
 */
export function calculateAvailableBalance(
  data: DataEntry[],
  withdrawals: WithdrawalEntry[] = []
): number {
  const totalRevenue = calculateTotalRevenue(data)
  const totalWithdrawals = sumWithdrawals(withdrawals)
  return Math.round((totalRevenue - totalWithdrawals) * 100) / 100
}

/**
 * Apply all calculations to dashboard config
 */
export function applyAutoCalculations(data: DataEntry[], withdrawals: WithdrawalEntry[] = {}) {
  const thisMonth = calculateThisMonth(data)
  const last6Months = calculateLast6Months(data)
  const totalRevenue = calculateTotalRevenue(data)
  const availableBalance = calculateAvailableBalance(data, withdrawals)
  const latestEntry = getLatestEntry(data)

  return {
    thisMonth,
    last6Months,
    totalRevenue,
    availableBalance,
    latestEntry,
  }
}
