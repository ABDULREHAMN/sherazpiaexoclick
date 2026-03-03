/**
 * Dashboard Configuration System
 * Manual-only configuration with localStorage persistence
 * No auto-updates or external API connections
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
    auto_update: boolean
    allow_external_sync: boolean
    design_change_allowed: boolean
    layout_change_allowed: boolean
    data_source: "manual_only"
  }
  profile: {
    username: string
    email: string
    publisher_id: string
    status: string
  }
  dashboard_summary: {
    today: DashboardMetrics
    this_month: { revenue: number }
    last_month: { revenue: number }
    last_6_month: { revenue: number }
  }
  totals_bar: DashboardMetrics
  statistics_report: {
    last_7_days: DashboardMetrics
    last_30_days: DashboardMetrics
    last_3_month: DashboardMetrics
    custom: DashboardMetrics
  }
  payments: {
    available_balance: number
    pending_balance: number
    withdrawal_history: Array<any>
    payment_history: Array<any>
    payment_method: Array<any>
  }
  withdrawal_section: {
    minimum_withdrawal: number
    last_withdrawal_date: string
    last_withdrawal_amount: number
  }
  charts: {
    revenue_chart: Array<any>
    impressions_chart: Array<any>
    clicks_chart: Array<any>
    ctr_chart: Array<any>
    ecpm_chart: Array<any>
  }
  recent_activity: Array<any>
}

// Default empty configuration
export const DEFAULT_CONFIG: DashboardConfig = {
  system: {
    auto_update: false,
    allow_external_sync: false,
    design_change_allowed: false,
    layout_change_allowed: false,
    data_source: "manual_only",
  },
  profile: {
    username: "",
    email: "",
    publisher_id: "",
    status: "reset",
  },
  dashboard_summary: {
    today: {
      revenue: 0,
      impressions: 0,
      clicks: 0,
      ctr: 0,
      ecpm: 0,
    },
    this_month: { revenue: 0 },
    last_month: { revenue: 0 },
    last_6_month: { revenue: 0 },
  },
  totals_bar: {
    revenue: 0,
    impressions: 0,
    clicks: 0,
    ctr: 0,
    ecpm: 0,
  },
  statistics_report: {
    last_7_days: {
      revenue: 0,
      impressions: 0,
      clicks: 0,
      ctr: 0,
      ecpm: 0,
    },
    last_30_days: {
      revenue: 0,
      impressions: 0,
      clicks: 0,
      ctr: 0,
      ecpm: 0,
    },
    last_3_month: {
      revenue: 0,
      impressions: 0,
      clicks: 0,
      ctr: 0,
      ecpm: 0,
    },
    custom: {
      revenue: 0,
      impressions: 0,
      clicks: 0,
      ctr: 0,
      ecpm: 0,
    },
  },
  payments: {
    available_balance: 0,
    pending_balance: 0,
    withdrawal_history: [],
    payment_history: [],
    payment_method: [],
  },
  withdrawal_section: {
    minimum_withdrawal: 0,
    last_withdrawal_date: "",
    last_withdrawal_amount: 0,
  },
  charts: {
    revenue_chart: [],
    impressions_chart: [],
    clicks_chart: [],
    ctr_chart: [],
    ecpm_chart: [],
  },
  recent_activity: [],
}

const CONFIG_STORAGE_KEY = "dashboard_config_v1"

/**
 * Save configuration to localStorage
 */
export function saveDashboardConfig(config: DashboardConfig): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(config))
  }
}

/**
 * Load configuration from localStorage
 */
export function loadDashboardConfig(): DashboardConfig {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(CONFIG_STORAGE_KEY)
    if (stored) {
      try {
        return JSON.parse(stored) as DashboardConfig
      } catch (error) {
        console.error("[v0] Failed to parse dashboard config:", error)
        return { ...DEFAULT_CONFIG }
      }
    }
  }
  return { ...DEFAULT_CONFIG }
}

/**
 * Reset configuration to default
 */
export function resetDashboardConfig(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem(CONFIG_STORAGE_KEY)
  }
}

/**
 * Update specific configuration values
 */
export function updateDashboardConfig(updates: Partial<DashboardConfig>): DashboardConfig {
  const current = loadDashboardConfig()
  const updated = { ...current, ...updates }
  saveDashboardConfig(updated)
  return updated
}
