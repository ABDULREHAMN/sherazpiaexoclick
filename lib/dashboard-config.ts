/**
 * Dashboard Configuration System - FULL OVERRIDE MODE
 * Manual-only configuration with NO auto-calculations
 * Latest data: 02-04-2026
 * All data locked - no caching, no external updates
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
    clear_old_data: boolean
    replace_all_widgets: boolean
    disable_cached_data: boolean
    disable_auto_calculation: boolean
    force_refresh_dashboard: boolean
    force_refresh_statistics: boolean
    force_refresh_payments: boolean
    force_refresh_recent_activity: boolean
  }
  dashboard_data: {
    today: DashboardMetrics
    this_month: { revenue: number; display: string }
    last_month: { revenue: number; display: string }
    last_6_month: { revenue: number; display: string }
  }
  statistics_report: {
    today: DashboardMetrics
    last_7_days: Array<{ date: string; revenue: number; impressions: number; clicks: number }>
    last_30_days: Array<{ date: string; revenue: number }>
  }
  payments: {
    available_balance: number
    pending_withdrawal: number
    next_withdrawal: string
    withdrawal_history: Array<{
      id: string
      date: string
      amount: number
      method: string
      status: string
    }>
  }
  withdrawal_section: {
    minimum_withdrawal: number
    last_withdrawal_date: string
    last_withdrawal_amount: number
    next_withdrawal_date: string
    pending_withdrawal: {
      id: string
      amount: number
      request_date: string
      status: string
      processing_time: string
      method: string
      steps: Array<{ step: number; name: string; status: string }>
    }
  }
  charts: {
    revenue_chart: Array<{ date: string; value: number }>
    impressions_chart: Array<{ date: string; value: number }>
    clicks_chart: Array<{ date: string; value: number }>
  }
  recent_activity: Array<{
    date: string
    domain: string
    impressions: number
    clicks: number
    ctr: number
    ecpm: number
    revenue: number
  }>
}

// FULL OVERRIDE CONFIGURATION - 02-04-2026 LATEST DATA
export const DEFAULT_CONFIG: DashboardConfig = {
  system: {
    mode: "FULL_OVERRIDE",
    clear_old_data: true,
    replace_all_widgets: true,
    disable_cached_data: true,
    disable_auto_calculation: true,
    force_refresh_dashboard: true,
    force_refresh_statistics: true,
    force_refresh_payments: true,
    force_refresh_recent_activity: true,
  },
  dashboard_data: {
    today: {
      date: "02-04-2026",
      revenue: 34.35,
      impressions: 4280,
      clicks: 205,
      ctr: 1.77,
      ecpm: 76.35,
    },
    this_month: { revenue: 100.71, display: "$100.71" },
    last_month: { revenue: 61.35, display: "$61.35" },
    last_6_month: { revenue: 162.06, display: "$162.06" },
  },
  statistics_report: {
    today: {
      date: "02-04-2026",
      revenue: 34.35,
      impressions: 4280,
      clicks: 205,
      ctr: 1.77,
      ecpm: 76.35,
    },
    last_7_days: [
      { date: "31-03-2026", revenue: 61.35, impressions: 12300, clicks: 310 },
      { date: "01-04-2026", revenue: 66.36, impressions: 12280, clicks: 335 },
      { date: "02-04-2026", revenue: 34.35, impressions: 4280, clicks: 205 },
    ],
    last_30_days: [
      { date: "31-03-2026", revenue: 61.35 },
      { date: "01-04-2026", revenue: 66.36 },
      { date: "02-04-2026", revenue: 34.35 },
    ],
  },
  payments: {
    available_balance: 162.06,
    pending_withdrawal: 1055.00,
    next_withdrawal: "14-04-2026",
    withdrawal_history: [
      {
        id: "WD-2903",
        date: "29-03-2026",
        amount: 1055.00,
        method: "Payoneer",
        status: "Pending",
      },
    ],
  },
  withdrawal_section: {
    minimum_withdrawal: 0,
    last_withdrawal_date: "29-03-2026",
    last_withdrawal_amount: 1055.00,
    next_withdrawal_date: "14-04-2026",
    pending_withdrawal: {
      id: "WD-2903",
      amount: 1055.00,
      request_date: "29-03-2026",
      status: "Processing",
      processing_time: "8-10 days",
      method: "Payoneer",
      steps: [
        { step: 1, name: "Request Submitted", status: "completed" },
        { step: 2, name: "Under Review", status: "pending" },
        { step: 3, name: "Payment Approved", status: "pending" },
        { step: 4, name: "Payment Sent", status: "pending" },
      ],
    },
  },
  charts: {
    revenue_chart: [
      { date: "31-03-2026", value: 61.35 },
      { date: "01-04-2026", value: 66.36 },
      { date: "02-04-2026", value: 34.35 },
    ],
    impressions_chart: [
      { date: "31-03-2026", value: 12300 },
      { date: "01-04-2026", value: 12280 },
      { date: "02-04-2026", value: 4280 },
    ],
    clicks_chart: [
      { date: "31-03-2026", value: 310 },
      { date: "01-04-2026", value: 335 },
      { date: "02-04-2026", value: 205 },
    ],
  },
  recent_activity: [
    {
      date: "02-04-2026",
      domain: "fancydiamondchain.com",
      impressions: 4280,
      clicks: 205,
      ctr: 1.77,
      ecpm: 76.35,
      revenue: 34.35,
    },
    {
      date: "01-04-2026",
      domain: "fancydiamondchain.com",
      impressions: 12280,
      clicks: 335,
      ctr: 1.77,
      ecpm: 76.35,
      revenue: 66.36,
    },
    {
      date: "31-03-2026",
      domain: "fancydiamondchain.com",
      impressions: 12300,
      clicks: 310,
      ctr: 1.77,
      ecpm: 75.35,
      revenue: 61.35,
    },
  ],
}
