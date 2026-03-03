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
    authentication: {
      login_required: boolean
      public_access: boolean
      auto_login: boolean
      credentials: {
        username: string
        password: string
      }
    }
    data_control: {
      mode: "manual_only"
      auto_update: boolean
      external_api: boolean
      layout_change_allowed: boolean
      design_change_allowed: boolean
      report_type: "today_only"
    }
  }
  ad_network: {
    name: string
    branding_locked: boolean
  }
  publisher_profile: {
    profile_name: string
    username: string
    email: string
    account_status: string
    approval_date: string
    join_date: string
    publisher_site: {
      site_url: string
      domain_display: string
      site_added_date: string
    }
  }
  payment_information: {
    primary_method: string
    status: string
    added_date: string
  }
  dashboard_data: {
    today: DashboardMetrics
    this_month: { revenue: number }
    last_month: { revenue: number }
    last_6_month: { revenue: number }
  }
  statistics_report: {
    today: DashboardMetrics
  }
  payments: {
    available_balance: number
    pending_balance: number
    withdrawal_history: Array<any>
    payment_history: Array<any>
  }
  withdrawal_section: {
    minimum_withdrawal: number
    last_withdrawal_date: string
    last_withdrawal_amount: number
  }
  charts: {
    revenue_chart: Array<{ date: string; value: number }>
    impressions_chart: Array<{ date: string; value: number }>
    clicks_chart: Array<{ date: string; value: number }>
    ctr_chart: Array<{ date: string; value: number }>
    ecpm_chart: Array<{ date: string; value: number }>
  }
  recent_activity: Array<{
    type: "Revenue Update" | "Impression Update" | "Click Update"
    date: string
    value: number
  }>
}

// Default configuration with publisher profile
export const DEFAULT_CONFIG: DashboardConfig = {
  system: {
    authentication: {
      login_required: true,
      public_access: false,
      auto_login: false,
      credentials: {
        username: "sheraazpia07",
        password: "sheraazpia@0786",
      },
    },
    data_control: {
      mode: "manual_only",
      auto_update: false,
      external_api: false,
      layout_change_allowed: false,
      design_change_allowed: false,
      report_type: "today_only",
    },
  },
  ad_network: {
    name: "ExoClick",
    branding_locked: true,
  },
  publisher_profile: {
    profile_name: "Sheeraz Pia",
    username: "sheraazpia07",
    email: "sherazpia76eez332@gmail.com",
    account_status: "Approved",
    approval_date: "03-03-2026",
    join_date: "03-03-2026",
    publisher_site: {
      site_url: "https://jstyler.com",
      domain_display: "jstyler.com",
      site_added_date: "03-03-2026",
    },
  },
  payment_information: {
    primary_method: "Payoneer",
    status: "Active",
    added_date: "03-03-2026",
  },
  dashboard_data: {
    today: {
      revenue: 23.22,
      impressions: 4532,
      clicks: 376,
      ctr: 0.0,
      ecpm: 23.22,
    },
    this_month: { revenue: 135.99 },
    last_month: { revenue: 0.0 },
    last_6_month: { revenue: 135.99 },
  },
  statistics_report: {
    today: {
      revenue: 135.99,
      impressions: 22138,
      clicks: 1848,
      ctr: 8.35,
      ecpm: 6.15,
    },
  },
  payments: {
    available_balance: 0.0,
    pending_balance: 0.0,
    withdrawal_history: [],
    payment_history: [],
  },
  withdrawal_section: {
    minimum_withdrawal: 0,
    last_withdrawal_date: "",
    last_withdrawal_amount: 0,
  },
  charts: {
    revenue_chart: [
      { date: "27-02-2026", value: 26.0 },
      { date: "28-02-2026", value: 27.22 },
      { date: "01-03-2026", value: 29.33 },
      { date: "02-03-2026", value: 30.22 },
      { date: "03-03-2026", value: 23.22 },
    ],
    impressions_chart: [
      { date: "27-02-2026", value: 4323 },
      { date: "28-02-2026", value: 4375 },
      { date: "01-03-2026", value: 4428 },
      { date: "02-03-2026", value: 4480 },
      { date: "03-03-2026", value: 4532 },
    ],
    clicks_chart: [
      { date: "27-02-2026", value: 363 },
      { date: "28-02-2026", value: 366 },
      { date: "01-03-2026", value: 370 },
      { date: "02-03-2026", value: 373 },
      { date: "03-03-2026", value: 376 },
    ],
    ctr_chart: [
      { date: "27-02-2026", value: 8.4 },
      { date: "28-02-2026", value: 8.37 },
      { date: "01-03-2026", value: 8.35 },
      { date: "02-03-2026", value: 8.32 },
      { date: "03-03-2026", value: 8.3 },
    ],
    ecpm_chart: [
      { date: "27-02-2026", value: 6.01 },
      { date: "28-02-2026", value: 6.21 },
      { date: "01-03-2026", value: 6.63 },
      { date: "02-03-2026", value: 6.74 },
      { date: "03-03-2026", value: 5.12 },
    ],
  },
  recent_activity: [
    { type: "Revenue Update", date: "27-02-2026", value: 26.0 },
    { type: "Revenue Update", date: "28-02-2026", value: 27.22 },
    { type: "Revenue Update", date: "01-03-2026", value: 29.33 },
    { type: "Revenue Update", date: "02-03-2026", value: 30.22 },
    { type: "Revenue Update", date: "03-03-2026", value: 23.22 },
  ],
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
