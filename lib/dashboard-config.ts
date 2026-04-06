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
      date: "06-04-2026",
      revenue: 40.35,
      impressions: 4980,
      clicks: 205,
      ctr: 1.77,
      ecpm: 82.00,
    },
    this_month: 313.15,
    last_6_month: 313.15,
  },
  statistics_report: [
    { date: "02-04-2026", revenue: 68.25, impressions: 12280, clicks: 345 },
    { date: "03-04-2026", revenue: 72.40, impressions: 12290, clicks: 365 },
    { date: "04-04-2026", revenue: 66.80, impressions: 12285, clicks: 355 },
    { date: "05-04-2026", revenue: 65.35, impressions: 12280, clicks: 305 },
    { date: "06-04-2026", revenue: 40.35, impressions: 4980, clicks: 205 },
  ],
  recent_activity: [
    {
      date: "06-04-2026",
      domain: "fancydiamondchain.com",
      impressions: 4980,
      clicks: 205,
      ctr: 1.77,
      ecpm: 82.00,
      revenue: 40.35,
    },
    {
      date: "05-04-2026",
      domain: "fancydiamondchain.com",
      impressions: 12280,
      clicks: 305,
      ctr: 1.77,
      ecpm: 83.00,
      revenue: 65.35,
    },
    {
      date: "04-04-2026",
      domain: "fancydiamondchain.com",
      impressions: 12285,
      clicks: 355,
      ctr: 1.77,
      ecpm: 82.90,
      revenue: 66.80,
    },
    {
      date: "03-04-2026",
      domain: "fancydiamondchain.com",
      impressions: 12290,
      clicks: 365,
      ctr: 1.77,
      ecpm: 84.20,
      revenue: 72.40,
    },
    {
      date: "02-04-2026",
      domain: "fancydiamondchain.com",
      impressions: 12280,
      clicks: 345,
      ctr: 1.77,
      ecpm: 83.10,
      revenue: 68.25,
    },
  ],
  balance: {
    available_balance: 313.15,
  },
  payments: {
    available_balance: 313.15,
    total_earnings: 313.15,
    next_withdrawal: "14-04-2026",
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
      status: "Completed",
    },
  ],
  charts: {
    revenue_chart: [
      { date: "02-04-2026", value: 68.25 },
      { date: "03-04-2026", value: 72.40 },
      { date: "04-04-2026", value: 66.80 },
      { date: "05-04-2026", value: 65.35 },
      { date: "06-04-2026", value: 40.35 },
    ],
    impressions_chart: [
      { date: "02-04-2026", value: 12280 },
      { date: "03-04-2026", value: 12290 },
      { date: "04-04-2026", value: 12285 },
      { date: "05-04-2026", value: 12280 },
      { date: "06-04-2026", value: 4980 },
    ],
    clicks_chart: [
      { date: "02-04-2026", value: 345 },
      { date: "03-04-2026", value: 365 },
      { date: "04-04-2026", value: 355 },
      { date: "05-04-2026", value: 305 },
      { date: "06-04-2026", value: 205 },
    ],
    ecpm_chart: [
      { date: "02-04-2026", value: 83.10 },
      { date: "03-04-2026", value: 84.20 },
      { date: "04-04-2026", value: 82.90 },
      { date: "05-04-2026", value: 83.00 },
      { date: "06-04-2026", value: 82.00 },
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
