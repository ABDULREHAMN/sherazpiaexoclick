/**
 * Dashboard Configuration System - FULL_OVERRIDE MODE
 * Hard override with new dataset - 05-04-2026 LATEST
 * All old data cleared, all caches disabled
 * System in production mode with fresh data
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
    mode: "FULL_OVERRIDE"
    clear_cache: boolean
    clear_old_data: boolean
    disable_auto_fetch: boolean
    disable_local_storage_override: boolean
    force_state_replace: boolean
    force_ui_refresh: boolean
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
    pending: number
    next_withdrawal: string
  }
  withdrawal_history: Array<any>
  charts: {
    revenue_chart: Array<{ date: string; value: number }>
    impressions_chart: Array<{ date: string; value: number }>
    clicks_chart: Array<{ date: string; value: number }>
    ecpm_chart: Array<{ date: string; value: number }>
  }
}

// FULL_OVERRIDE CONFIGURATION - 05-04-2026 LATEST DATA
export const DEFAULT_CONFIG: DashboardConfig = {
  system: {
    mode: "FULL_OVERRIDE",
    clear_cache: true,
    clear_old_data: true,
    disable_auto_fetch: true,
    disable_local_storage_override: true,
    force_state_replace: true,
    force_ui_refresh: true,
  },
  dashboard_data: {
    today: {
      date: "05-04-2026",
      revenue: 34.00,
      impressions: 4280,
      clicks: 205,
      ctr: 1.77,
      ecpm: 83.00,
    },
    this_month: 241.45,
    last_6_month: 241.45,
  },
  statistics_report: [
    { date: "02-04-2026", revenue: 68.25, impressions: 12280, clicks: 345 },
    { date: "03-04-2026", revenue: 72.40, impressions: 12290, clicks: 365 },
    { date: "04-04-2026", revenue: 66.80, impressions: 12285, clicks: 355 },
    { date: "05-04-2026", revenue: 34.00, impressions: 4280, clicks: 205 },
  ],
  recent_activity: [
    {
      date: "05-04-2026",
      domain: "fancydiamondchain.com",
      impressions: 4280,
      clicks: 205,
      ctr: 1.77,
      ecpm: 83.00,
      revenue: 34.00,
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
    available_balance: 241.45,
  },
  payments: {
    available_balance: 241.45,
    pending: 0,
    next_withdrawal: "14-04-2026",
  },
  withdrawal_history: [],
  charts: {
    revenue_chart: [
      { date: "02-04-2026", value: 68.25 },
      { date: "03-04-2026", value: 72.40 },
      { date: "04-04-2026", value: 66.80 },
      { date: "05-04-2026", value: 34.00 },
    ],
    impressions_chart: [
      { date: "02-04-2026", value: 12280 },
      { date: "03-04-2026", value: 12290 },
      { date: "04-04-2026", value: 12285 },
      { date: "05-04-2026", value: 4280 },
    ],
    clicks_chart: [
      { date: "02-04-2026", value: 345 },
      { date: "03-04-2026", value: 365 },
      { date: "04-04-2026", value: 355 },
      { date: "05-04-2026", value: 205 },
    ],
    ecpm_chart: [
      { date: "02-04-2026", value: 83.10 },
      { date: "03-04-2026", value: 84.20 },
      { date: "04-04-2026", value: 82.90 },
      { date: "05-04-2026", value: 83.00 },
    ],
  },
}
