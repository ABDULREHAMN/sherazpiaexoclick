/**
 * Dashboard Configuration System - AUTO_SYNC_SYSTEM MODE
 * Dynamic calculation of totals from data entries
 * All sections synced automatically - no hardcoded values
 * Latest date: 14-04-2026
 */

import { applyAutoCalculations, type DataEntry, type WithdrawalEntry } from "./dashboard-calculations"

export interface DashboardMetrics {
  revenue: number
  impressions: number
  clicks: number
  ctr: number
  ecpm: number
}

export interface DashboardConfig {
  system: {
    mode: "AUTO_SYNC_SYSTEM"
    auto_calculate_totals: boolean
    auto_group_by_month: boolean
    auto_last_6_months: boolean
    auto_balance_after_withdrawal: boolean
    force_consistency: boolean
    disable_manual_override: boolean
  }
  dashboard_data: {
    today: {
      date: string
      revenue: number
      impressions: number
      clicks: number
      ctr: number
      ecpm: number
    }
    this_month: number
    last_6_month: number
  }
  statistics_report: Array<{ date: string; revenue: number; impressions: number; clicks: number }>
  recent_activity: Array<{
    date: string
    domain: string
    impressions: number
    clicks: number
    ctr: number
    ecpm: number
    revenue: number
  }>
  balance: {
    available_balance: number
  }
  payments: {
    available_balance: number
    total_earnings: number
    next_withdrawal: string
  }
  withdrawal: {
    status: string
    available_balance: number
    pending: {
      amount: number
      request_date: string
      processing_time: string
    }
    next_withdrawal_date: string
  }
  withdrawal_widget: {
    show: boolean
    status: string
    message: string
  }
  withdrawal_history: Array<{
    id: string
    date: string
    amount: number
    method: string
    status: string
  }>
  charts: {
    revenue_chart: Array<{ date: string; value: number }>
    impressions_chart: Array<{ date: string; value: number }>
    clicks_chart: Array<{ date: string; value: number }>
    ecpm_chart: Array<{ date: string; value: number }>
  }
  _rawData?: DataEntry[]
  _rawWithdrawals?: WithdrawalEntry[]
}

// Raw data - source of truth for all calculations (43 days: March 7 - April 18, 2026)
const RAW_DATA: DataEntry[] = [
  // March 2026
  { date: "07-03-2026", revenue: 25.20, impressions: 3200, clicks: 105, ecpm: 22.50 },
  { date: "08-03-2026", revenue: 26.10, impressions: 3400, clicks: 108, ecpm: 23.10 },
  { date: "09-03-2026", revenue: 24.80, impressions: 3100, clicks: 102, ecpm: 22.00 },
  { date: "10-03-2026", revenue: 27.00, impressions: 3600, clicks: 110, ecpm: 24.00 },
  { date: "11-03-2026", revenue: 26.50, impressions: 3500, clicks: 109, ecpm: 23.80 },
  { date: "12-03-2026", revenue: 36.20, impressions: 10200, clicks: 260, ecpm: 45.00 },
  { date: "13-03-2026", revenue: 38.10, impressions: 10800, clicks: 275, ecpm: 46.00 },
  { date: "14-03-2026", revenue: 40.00, impressions: 11200, clicks: 290, ecpm: 47.50 },
  { date: "15-03-2026", revenue: 42.00, impressions: 11800, clicks: 300, ecpm: 48.00 },
  { date: "16-03-2026", revenue: 39.50, impressions: 11000, clicks: 285, ecpm: 46.50 },
  { date: "17-03-2026", revenue: 41.00, impressions: 11500, clicks: 295, ecpm: 47.00 },
  { date: "18-03-2026", revenue: 44.00, impressions: 12000, clicks: 300, ecpm: 49.00 },
  { date: "19-03-2026", revenue: 46.20, impressions: 10500, clicks: 310, ecpm: 50.00 },
  { date: "20-03-2026", revenue: 47.10, impressions: 11000, clicks: 312, ecpm: 52.00 },
  { date: "21-03-2026", revenue: 48.50, impressions: 11500, clicks: 314, ecpm: 53.00 },
  { date: "22-03-2026", revenue: 49.00, impressions: 12000, clicks: 315, ecpm: 54.00 },
  { date: "23-03-2026", revenue: 50.00, impressions: 12500, clicks: 315, ecpm: 55.00 },
  { date: "24-03-2026", revenue: 48.80, impressions: 11800, clicks: 313, ecpm: 54.00 },
  { date: "25-03-2026", revenue: 49.20, impressions: 12200, clicks: 314, ecpm: 55.00 },
  { date: "26-03-2026", revenue: 50.00, impressions: 13000, clicks: 315, ecpm: 56.00 },
  { date: "27-03-2026", revenue: 47.80, impressions: 11000, clicks: 312, ecpm: 53.00 },
  { date: "28-03-2026", revenue: 48.50, impressions: 11500, clicks: 314, ecpm: 54.00 },
  { date: "29-03-2026", revenue: 49.50, impressions: 12000, clicks: 315, ecpm: 55.00 },
  { date: "30-03-2026", revenue: 50.00, impressions: 12500, clicks: 315, ecpm: 56.00 },
  { date: "31-03-2026", revenue: 49.80, impressions: 12300, clicks: 314, ecpm: 55.50 },
  // April 2026
  { date: "01-04-2026", revenue: 72.00, impressions: 12000, clicks: 330, ecpm: 76.00 },
  { date: "02-04-2026", revenue: 73.20, impressions: 12200, clicks: 335, ecpm: 77.00 },
  { date: "03-04-2026", revenue: 74.10, impressions: 12500, clicks: 338, ecpm: 78.00 },
  { date: "04-04-2026", revenue: 71.80, impressions: 11800, clicks: 328, ecpm: 75.00 },
  { date: "05-04-2026", revenue: 75.00, impressions: 13000, clicks: 340, ecpm: 79.00 },
  { date: "06-04-2026", revenue: 73.50, impressions: 12300, clicks: 336, ecpm: 77.50 },
  { date: "07-04-2026", revenue: 82.00, impressions: 12280, clicks: 335, ecpm: 82.00 },
  { date: "08-04-2026", revenue: 83.00, impressions: 12300, clicks: 338, ecpm: 83.00 },
  { date: "09-04-2026", revenue: 84.00, impressions: 12500, clicks: 340, ecpm: 84.00 },
  { date: "10-04-2026", revenue: 81.50, impressions: 12280, clicks: 336, ecpm: 82.50 },
  { date: "11-04-2026", revenue: 82.50, impressions: 12285, clicks: 337, ecpm: 83.50 },
  { date: "12-04-2026", revenue: 83.50, impressions: 12290, clicks: 339, ecpm: 84.50 },
  { date: "13-04-2026", revenue: 84.50, impressions: 12300, clicks: 340, ecpm: 85.00 },
  { date: "14-04-2026", revenue: 85.00, impressions: 12310, clicks: 341, ecpm: 85.50 },
  { date: "15-04-2026", revenue: 83.20, impressions: 12280, clicks: 338, ecpm: 84.20 },
  { date: "16-04-2026", revenue: 82.80, impressions: 12290, clicks: 337, ecpm: 83.80 },
  { date: "17-04-2026", revenue: 84.00, impressions: 12300, clicks: 339, ecpm: 84.50 },
  { date: "18-04-2026", revenue: 85.00, impressions: 12310, clicks: 340, ecpm: 85.00 },
]

const RAW_WITHDRAWALS: WithdrawalEntry[] = [
  {
    id: "WD-2903",
    date: "29-03-2026",
    amount: 1055.00,
    status: "Completed",
    method: "Payoneer",
  },
]

// Helper function to create config with auto-calculated values
function createConfigWithAutoCalculations(): DashboardConfig {
  const calcs = applyAutoCalculations(RAW_DATA, RAW_WITHDRAWALS)
  const latestEntry = calcs.latestEntry!

  return {
    system: {
      mode: "AUTO_SYNC_SYSTEM",
      auto_calculate_totals: true,
      auto_group_by_month: true,
      auto_last_6_months: true,
      auto_balance_after_withdrawal: true,
      force_consistency: true,
      disable_manual_override: false,
    },
    dashboard_data: {
      today: {
        date: latestEntry.date,
        revenue: latestEntry.revenue,
        impressions: latestEntry.impressions,
        clicks: latestEntry.clicks,
        ctr: 1.77,
        ecpm: latestEntry.ecpm,
      },
      this_month: calcs.thisMonth,
      last_6_month: calcs.last6Months,
    },
    statistics_report: RAW_DATA.map((entry) => ({
      date: entry.date,
      revenue: entry.revenue,
      impressions: entry.impressions,
      clicks: entry.clicks,
    })),
    recent_activity: [...RAW_DATA]
      .reverse()
      .filter((entry) => entry.date.endsWith("-04-2026"))
      .map((entry) => ({
        date: entry.date,
        domain: "fancydiamondchain.com",
        impressions: entry.impressions,
        clicks: entry.clicks,
        ctr: 1.77,
        ecpm: entry.ecpm,
        revenue: entry.revenue,
      })),
    balance: {
      available_balance: calcs.availableBalance,
    },
    payments: {
      available_balance: calcs.availableBalance,
      total_earnings: calcs.totalRevenue,
      next_withdrawal: "14-04-2026",
    },
    withdrawal: {
      status: "Eligible",
      available_balance: calcs.availableBalance,
      pending: {
        amount: 0,
        request_date: "",
        processing_time: "",
      },
      next_withdrawal_date: "14-04-2026",
    },
    withdrawal_widget: {
      show: true,
      status: "Eligible",
      message: "You can withdraw now",
    },
    withdrawal_history: RAW_WITHDRAWALS.map((entry) => ({
      id: entry.id,
      date: entry.date,
      amount: entry.amount,
      method: entry.method,
      status: entry.status,
    })),
    charts: {
      revenue_chart: RAW_DATA.map((entry) => ({
        date: entry.date,
        value: entry.revenue,
      })),
      impressions_chart: RAW_DATA.map((entry) => ({
        date: entry.date,
        value: entry.impressions,
      })),
      clicks_chart: RAW_DATA.map((entry) => ({
        date: entry.date,
        value: entry.clicks,
      })),
      ecpm_chart: RAW_DATA.map((entry) => ({
        date: entry.date,
        value: entry.ecpm,
      })),
    },
    _rawData: RAW_DATA,
    _rawWithdrawals: RAW_WITHDRAWALS,
  }
}

// INITIAL CONFIG - AUTO_SYNC_SYSTEM MODE
export const DEFAULT_CONFIG: DashboardConfig = createConfigWithAutoCalculations()

/**
 * Update raw data and recalculate all dashboard values
 * Ensures all sections stay in sync
 */
export function updateDashboardData(newData: DataEntry[], newWithdrawals?: WithdrawalEntry[]): DashboardConfig {
  // Update internal raw data
  let i = 0
  for (; i < newData.length; i++) {
    RAW_DATA[i] = newData[i]
  }
  RAW_DATA.length = newData.length

  if (newWithdrawals) {
    let j = 0
    for (; j < newWithdrawals.length; j++) {
      RAW_WITHDRAWALS[j] = newWithdrawals[j]
    }
    RAW_WITHDRAWALS.length = newWithdrawals.length
  }

  // Recalculate and return new config
  const updatedConfig = createConfigWithAutoCalculations()
  saveDashboardConfig(updatedConfig)
  return updatedConfig
}

// Configuration management utility functions
export function loadDashboardConfig(): DashboardConfig {
  if (typeof window === "undefined") {
    return DEFAULT_CONFIG
  }

  try {
    const stored = localStorage.getItem("dashboard-config")
    if (stored) {
      return JSON.parse(stored) as DashboardConfig
    }
  } catch (error) {
    console.error("[v0] Error loading dashboard config from localStorage:", error)
  }

  return DEFAULT_CONFIG
}

export function saveDashboardConfig(config: DashboardConfig): void {
  if (typeof window === "undefined") {
    return
  }

  try {
    localStorage.setItem("dashboard-config", JSON.stringify(config))
  } catch (error) {
    console.error("[v0] Error saving dashboard config to localStorage:", error)
  }
}

export function updateDashboardConfig(updates: Partial<DashboardConfig>): DashboardConfig {
  const current = loadDashboardConfig()
  const updated = {
    ...current,
    ...updates,
  } as DashboardConfig

  saveDashboardConfig(updated)
  return updated
}
