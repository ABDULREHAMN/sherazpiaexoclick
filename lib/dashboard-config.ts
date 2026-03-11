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
      site_url: "https://fancydiamondchain.com",
      domain_display: "fancydiamondchain.com",
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
      revenue: 27.33,
      impressions: 5636,
      clicks: 85,
      ctr: 1.77,
      ecpm: 27.87,
    },
    this_month: { revenue: 211.09 },
    last_month: { revenue: 0.0 },
    last_6_month: { revenue: 211.09 },
  },
  statistics_report: {
    today: {
      revenue: 27.33,
      impressions: 5636,
      clicks: 85,
      ctr: 1.77,
      ecpm: 27.87,
    },
  },
  payments: {
    available_balance: 211.09,
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
      { date: "03-03-2026", value: 0.0 },
      { date: "04-03-2026", value: 24.01 },
      { date: "05-03-2026", value: 25.45 },
      { date: "06-03-2026", value: 26.43 },
      { date: "07-03-2026", value: 28.32 },
      { date: "08-03-2026", value: 26.78 },
      { date: "09-03-2026", value: 26.44 },
      { date: "10-03-2026", value: 26.33 },
      { date: "11-03-2026", value: 27.33 },
    ],
    impressions_chart: [
      { date: "11-03-2026", value: 5636 },
    ],
    clicks_chart: [
      { date: "11-03-2026", value: 85 },
    ],
    ctr_chart: [
      { date: "11-03-2026", value: 1.77 },
    ],
    ecpm_chart: [
      { date: "11-03-2026", value: 27.87 },
    ],
  },
  recent_activity: [
    { type: "Revenue Update", date: "11-03-2026", value: 27.33 },
    { type: "Impression Update", date: "11-03-2026", value: 5636 },
    { type: "Impression Update", date: "10-03-2026", value: 5321 },
    { type: "Impression Update", date: "09-03-2026", value: 5236 },
    { type: "Impression Update", date: "08-03-2026", value: 5213 },
    { type: "Impression Update", date: "07-03-2026", value: 5320 },
    { type: "Impression Update", date: "06-03-2026", value: 5343 },
    { type: "Impression Update", date: "05-03-2026", value: 5123 },
    { type: "Impression Update", date: "04-03-2026", value: 4987 },
    { type: "Click Update", date: "11-03-2026", value: 85 },
    { type: "Click Update", date: "10-03-2026", value: 86 },
    { type: "Click Update", date: "09-03-2026", value: 80 },
    { type: "Click Update", date: "08-03-2026", value: 79 },
    { type: "Click Update", date: "07-03-2026", value: 83 },
    { type: "Click Update", date: "06-03-2026", value: 84 },
    { type: "Click Update", date: "05-03-2026", value: 81 },
    { type: "Click Update", date: "04-03-2026", value: 76 },
    { type: "Revenue Update", date: "10-03-2026", value: 26.33 },
    { type: "Revenue Update", date: "09-03-2026", value: 26.44 },
    { type: "Revenue Update", date: "08-03-2026", value: 26.78 },
    { type: "Revenue Update", date: "07-03-2026", value: 28.32 },
    { type: "Revenue Update", date: "06-03-2026", value: 26.43 },
    { type: "Revenue Update", date: "05-03-2026", value: 25.45 },
    { type: "Revenue Update", date: "04-03-2026", value: 24.01 },
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
