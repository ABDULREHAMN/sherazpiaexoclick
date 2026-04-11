/**
 * Dashboard Configuration System - HARD_OVERRIDE MODE
 * Real-time live update with 06-04-2026 LATEST data
 * All old data cleared, realtime sync enabled
 * System in production mode with force refresh
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
    mode: "HARD_OVERRIDE"
    clear_cache: boolean
    clear_old_state: boolean
    disable_local_storage: boolean
    disable_auto_sync: boolean
    force_replace_all: boolean
    force_ui_refresh: boolean
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

// HARD_OVERRIDE CONFIGURATION - 06-04-2026 LIVE DATA
export const DEFAULT_CONFIG: DashboardConfig = {
  system: {
    mode: "HARD_OVERRIDE",
    clear_cache: true,
    clear_old_state: true,
    disable_local_storage: true,
    disable_auto_sync: true,
    force_replace_all: true,
    force_ui_refresh: true,
    realtime_apply: true,
  },
  dashboard_data: {
    today: {
      date: "11-04-2026",
      revenue: 35.00,
      impressions: 4210,
      clicks: 190,
      ctr: 1.77,
      ecpm: 85.00,
    },
    this_month: 443.65,
    last_6_month: 443.65,
  },
  statistics_report: [
    { date: "06-04-2026", revenue: 81.20, impressions: 12110, clicks: 320 },
    { date: "07-04-2026", revenue: 82.10, impressions: 12250, clicks: 330 },
    { date: "08-04-2026", revenue: 81.75, impressions: 12300, clicks: 335 },
    { date: "09-04-2026", revenue: 82.00, impressions: 12385, clicks: 341 },
    { date: "10-04-2026", revenue: 81.60, impressions: 12280, clicks: 328 },
    { date: "11-04-2026", revenue: 35.00, impressions: 4210, clicks: 190 },
  ],
  recent_activity: [
    {
      date: "11-04-2026",
      domain: "fancydiamondchain.com",
      impressions: 4210,
      clicks: 190,
      ctr: 1.77,
      ecpm: 85.00,
      revenue: 35.00,
    },
    {
      date: "10-04-2026",
      domain: "fancydiamondchain.com",
      impressions: 12280,
      clicks: 328,
      ctr: 1.77,
      ecpm: 84.30,
      revenue: 81.60,
    },
    {
      date: "09-04-2026",
      domain: "fancydiamondchain.com",
      impressions: 12385,
      clicks: 341,
      ctr: 1.77,
      ecpm: 85.00,
      revenue: 82.00,
    },
    {
      date: "08-04-2026",
      domain: "fancydiamondchain.com",
      impressions: 12300,
      clicks: 335,
      ctr: 1.77,
      ecpm: 84.50,
      revenue: 81.75,
    },
    {
      date: "07-04-2026",
      domain: "fancydiamondchain.com",
      impressions: 12250,
      clicks: 330,
      ctr: 1.77,
      ecpm: 84.10,
      revenue: 82.10,
    },
    {
      date: "06-04-2026",
      domain: "fancydiamondchain.com",
      impressions: 12110,
      clicks: 320,
      ctr: 1.77,
      ecpm: 83.20,
      revenue: 81.20,
    },
  ],
  balance: {
    available_balance: 843.65,
  },
  payments: {
    available_balance: 843.65,
    total_earnings: 843.65,
    next_withdrawal: "14-04-2026",
  },
  withdrawal: {
    status: "Eligible",
    available_balance: 843.65,
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
      { date: "06-04-2026", value: 81.20 },
      { date: "07-04-2026", value: 82.10 },
      { date: "08-04-2026", value: 81.75 },
      { date: "09-04-2026", value: 82.00 },
      { date: "10-04-2026", value: 81.60 },
      { date: "11-04-2026", value: 35.00 },
    ],
    impressions_chart: [
      { date: "06-04-2026", value: 12110 },
      { date: "07-04-2026", value: 12250 },
      { date: "08-04-2026", value: 12300 },
      { date: "09-04-2026", value: 12385 },
      { date: "10-04-2026", value: 12280 },
      { date: "11-04-2026", value: 4210 },
    ],
    clicks_chart: [
      { date: "06-04-2026", value: 320 },
      { date: "07-04-2026", value: 330 },
      { date: "08-04-2026", value: 335 },
      { date: "09-04-2026", value: 341 },
      { date: "10-04-2026", value: 328 },
      { date: "11-04-2026", value: 190 },
    ],
    ecpm_chart: [
      { date: "06-04-2026", value: 83.20 },
      { date: "07-04-2026", value: 84.10 },
      { date: "08-04-2026", value: 84.50 },
      { date: "09-04-2026", value: 85.00 },
      { date: "10-04-2026", value: 84.30 },
      { date: "11-04-2026", value: 85.00 },
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
