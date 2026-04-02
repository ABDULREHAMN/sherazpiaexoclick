/**
 * Dashboard Configuration System - RESET_ALL MODE
 * All caches cleared, all state reset to empty/zero
 * System in clean state ready for fresh data
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
    mode: "RESET_ALL"
    clear_cache: boolean
    clear_local_storage: boolean
    clear_dashboard_state: boolean
    clear_statistics: boolean
    clear_recent_activity: boolean
    clear_payments: boolean
    clear_withdrawal: boolean
    force_reload: boolean
  }
  dashboard_data: {
    today: {
      date: null
      revenue: number
      impressions: number
      clicks: number
      ctr: number
      ecpm: number
    }
    this_month: number
    last_month: number
    last_6_month: number
  }
  statistics_report: Array<any>
  recent_activity: Array<any>
  balance: {
    available_balance: number
  }
  withdrawal: {
    pending: number
  }
  withdrawal_history: Array<any>
}

// RESET_ALL CONFIGURATION - CLEAN STATE
export const DEFAULT_CONFIG: DashboardConfig = {
  system: {
    mode: "RESET_ALL",
    clear_cache: true,
    clear_local_storage: true,
    clear_dashboard_state: true,
    clear_statistics: true,
    clear_recent_activity: true,
    clear_payments: true,
    clear_withdrawal: true,
    force_reload: true,
  },
  dashboard_data: {
    today: {
      date: null,
      revenue: 0,
      impressions: 0,
      clicks: 0,
      ctr: 0,
      ecpm: 0,
    },
    this_month: 0,
    last_month: 0,
    last_6_month: 0,
  },
  statistics_report: [],
  recent_activity: [],
  balance: {
    available_balance: 0,
  },
  withdrawal: {
    pending: 0,
  },
  withdrawal_history: [],
}
