/**
 * Dashboard Configuration System - FULL_SYSTEM_RESET MODE
 * Complete system reset with new 11-14 April dataset
 * All old data cleared, only new data applied
 * Latest date: 14-04-2026
 */

export interface DashboardMetrics {
  revenue: number
  impressions: number
  clicks: number
  ctr: number
  ecpm: number
}

export interface DashboardConfig {
  system: {
    mode: "FULL_SYSTEM_RESET"
    clear_all_previous_data: boolean
    force_replace_everything: boolean
    disable_auto_calculation: boolean
    disable_cache: boolean
    realtime_apply: boolean
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
}

// FULL_SYSTEM_RESET CONFIGURATION - 14-04-2026 LATEST DATA
export const DEFAULT_CONFIG: DashboardConfig = {
  system: {
    mode: "FULL_SYSTEM_RESET",
    clear_all_previous_data: true,
    force_replace_everything: true,
    disable_auto_calculation: true,
    disable_cache: true,
    realtime_apply: true,
  },
  dashboard_data: {
    today: {
      date: "14-04-2026",
      revenue: 35.00,
      impressions: 6210,
      clicks: 130,
      ctr: 1.77,
      ecpm: 85.00,
    },
    this_month: 279.95,
    last_6_month: 279.95,
  },
  statistics_report: [
    { date: "11-04-2026", revenue: 81.20, impressions: 12210, clicks: 335 },
    { date: "12-04-2026", revenue: 81.75, impressions: 12230, clicks: 338 },
    { date: "13-04-2026", revenue: 82.00, impressions: 12250, clicks: 340 },
    { date: "14-04-2026", revenue: 35.00, impressions: 6210, clicks: 130 },
  ],
  recent_activity: [
    {
      date: "14-04-2026",
      domain: "fancydiamondchain.com",
      impressions: 6210,
      clicks: 130,
      ctr: 1.77,
      ecpm: 85.00,
      revenue: 35.00,
    },
    {
      date: "13-04-2026",
      domain: "fancydiamondchain.com",
      impressions: 12250,
      clicks: 340,
      ctr: 1.77,
      ecpm: 87.00,
      revenue: 82.00,
    },
    {
      date: "12-04-2026",
      domain: "fancydiamondchain.com",
      impressions: 12230,
      clicks: 338,
      ctr: 1.77,
      ecpm: 86.20,
      revenue: 81.75,
    },
    {
      date: "11-04-2026",
      domain: "fancydiamondchain.com",
      impressions: 12210,
      clicks: 335,
      ctr: 1.77,
      ecpm: 85.50,
      revenue: 81.20,
    },
  ],
  balance: {
    available_balance: 279.95,
  },
  payments: {
    available_balance: 279.95,
    total_earnings: 279.95,
    next_withdrawal: "14-04-2026",
  },
  withdrawal: {
    status: "Eligible",
    available_balance: 279.95,
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
  withdrawal_history: [
    {
      id: "WD-2903",
      date: "29-03-2026",
      amount: 1055.00,
      method: "Payoneer",
      status: "Complete",
    },
  ],
  charts: {
    revenue_chart: [
      { date: "11-04-2026", value: 81.20 },
      { date: "12-04-2026", value: 81.75 },
      { date: "13-04-2026", value: 82.00 },
      { date: "14-04-2026", value: 35.00 },
    ],
    impressions_chart: [
      { date: "11-04-2026", value: 12210 },
      { date: "12-04-2026", value: 12230 },
      { date: "13-04-2026", value: 12250 },
      { date: "14-04-2026", value: 6210 },
    ],
    clicks_chart: [
      { date: "11-04-2026", value: 335 },
      { date: "12-04-2026", value: 338 },
      { date: "13-04-2026", value: 340 },
      { date: "14-04-2026", value: 130 },
    ],
    ecpm_chart: [
      { date: "11-04-2026", value: 85.50 },
      { date: "12-04-2026", value: 86.20 },
      { date: "13-04-2026", value: 87.00 },
      { date: "14-04-2026", value: 85.00 },
    ],
  },
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
