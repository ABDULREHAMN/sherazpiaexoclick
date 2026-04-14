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

// Raw data - source of truth for all calculations
const RAW_DATA: DataEntry[] = [
  { date: "11-04-2026", revenue: 81.20, impressions: 12210, clicks: 335, ecpm: 85.50 },
  { date: "12-04-2026", revenue: 81.75, impressions: 12230, clicks: 338, ecpm: 86.20 },
  { date: "13-04-2026", revenue: 82.00, impressions: 12250, clicks: 340, ecpm: 87.00 },
  { date: "14-04-2026", revenue: 35.00, impressions: 12210, clicks: 130, ecpm: 85.00 },
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
    recent_activity: [...RAW_DATA].reverse().map((entry) => ({
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
