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
    auto_revenue_total?: boolean
    auto_last6month_update?: boolean
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
    auto_revenue_total: false,
    auto_last6month_update: false,
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
      revenue: 20.00,
      impressions: 4480,
      clicks: 145,
      ctr: 1.77,
      ecpm: 60.00,
    },
    this_month: { revenue: 798.90, display: "$798.90" },
    last_month: { revenue: 0.0 },
    last_6_month: { revenue: 798.90, display: "$798.90", mode: "manual", locked: true },
  },
  statistics_report: {
    today: {
      revenue: 20.00,
      impressions: 4480,
      clicks: 145,
      ctr: 1.77,
      ecpm: 60.00,
    },
  },
  payments: {
    available_balance: 798.90,
    pending_balance: 0.0,
    withdrawal_history: [],
    payment_history: [],
  },
  withdrawal_section: {
    minimum_withdrawal: 0,
    last_withdrawal_date: "25-03-2026",
    last_withdrawal_amount: 212.42,
  },
  payment_section: {
    payment_method: {
      name: "Payoneer",
    },
    balance: {
      available_balance: 798.90,
      currency: "USD",
      display: "$798.90",
    },
    withdrawal_rules: {
      minimum_payout: 200,
      payout_cycle: "monthly",
    },
    next_withdrawal: {
      date: "29-03-2026",
    },
    auto_system: {
      enabled: false,
    },
  },
  payment_summary: {
    available_balance: {
      value: 798.90,
      currency: "USD",
      display: "$798.90",
    },
    total_payments: {
      value: 0.0,
      display: "$0.00",
    },
    next_withdrawal: {
      date: "25-03-2026",
      display: "25 Mar 2026",
    },
    withdrawal_amount: {
      value: 212.42,
      display: "$212.42",
    },
    system: {
      auto_update: false,
      manual_override: true,
    },
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
      { date: "11-03-2026", value: 16.98 },
      { date: "12-03-2026", value: 47.55 },
      { date: "13-03-2026", value: 42.22 },
      { date: "14-03-2026", value: 45.0 },
      { date: "15-03-2026", value: 39.0 },
      { date: "16-03-2026", value: 30.0 },
      { date: "17-03-2026", value: 43.3 },
      { date: "18-03-2026", value: 45.38 },
      { date: "19-03-2026", value: 39.35 },
      { date: "20-03-2026", value: 45.0 },
      { date: "21-03-2026", value: 50.30 },
      { date: "22-03-2026", value: 50.00 },
      { date: "23-03-2026", value: 59.35 },
      { date: "24-03-2026", value: 20.00 },
    ],
    impressions_chart: [
      { date: "03-03-2026", value: 0 },
      { date: "04-03-2026", value: 4987 },
      { date: "05-03-2026", value: 5123 },
      { date: "06-03-2026", value: 5343 },
      { date: "07-03-2026", value: 5320 },
      { date: "08-03-2026", value: 5213 },
      { date: "09-03-2026", value: 5236 },
      { date: "10-03-2026", value: 5321 },
      { date: "11-03-2026", value: 5636 },
      { date: "12-03-2026", value: 4433 },
      { date: "13-03-2026", value: 10222 },
      { date: "14-03-2026", value: 12315 },
      { date: "15-03-2026", value: 12317 },
      { date: "16-03-2026", value: 11721 },
      { date: "17-03-2026", value: 12380 },
      { date: "18-03-2026", value: 12321 },
      { date: "19-03-2026", value: 11060 },
      { date: "20-03-2026", value: 12380 },
      { date: "21-03-2026", value: 12343 },
      { date: "22-03-2026", value: 12380 },
      { date: "23-03-2026", value: 12370 },
      { date: "24-03-2026", value: 4480 },
    ],
    clicks_chart: [
      { date: "03-03-2026", value: 0 },
      { date: "04-03-2026", value: 76 },
      { date: "05-03-2026", value: 81 },
      { date: "06-03-2026", value: 84 },
      { date: "07-03-2026", value: 83 },
      { date: "08-03-2026", value: 79 },
      { date: "09-03-2026", value: 80 },
      { date: "10-03-2026", value: 86 },
      { date: "11-03-2026", value: 85 },
      { date: "12-03-2026", value: 102 },
      { date: "13-03-2026", value: 292 },
      { date: "14-03-2026", value: 341 },
      { date: "15-03-2026", value: 343 },
      { date: "16-03-2026", value: 310 },
      { date: "17-03-2026", value: 310 },
      { date: "18-03-2026", value: 310 },
      { date: "19-03-2026", value: 310 },
      { date: "20-03-2026", value: 310 },
      { date: "21-03-2026", value: 340 },
      { date: "22-03-2026", value: 328 },
      { date: "23-03-2026", value: 331 },
      { date: "24-03-2026", value: 145 },
    ],
    ctr_chart: [
      { date: "03-03-2026", value: 0.0 },
      { date: "04-03-2026", value: 2.0 },
      { date: "05-03-2026", value: 1.5 },
      { date: "06-03-2026", value: 1.33 },
      { date: "07-03-2026", value: 1.22 },
      { date: "08-03-2026", value: 1.0 },
      { date: "09-03-2026", value: 1.0 },
      { date: "10-03-2026", value: 1.8 },
      { date: "11-03-2026", value: 1.77 },
      { date: "12-03-2026", value: 1.77 },
      { date: "13-03-2026", value: 1.77 },
      { date: "14-03-2026", value: 1.77 },
      { date: "15-03-2026", value: 1.77 },
      { date: "16-03-2026", value: 1.77 },
      { date: "17-03-2026", value: 1.77 },
      { date: "18-03-2026", value: 1.77 },
      { date: "19-03-2026", value: 1.77 },
      { date: "20-03-2026", value: 1.77 },
      { date: "21-03-2026", value: 1.77 },
      { date: "22-03-2026", value: 1.77 },
      { date: "23-03-2026", value: 1.77 },
      { date: "24-03-2026", value: 1.77 },
    ],
    ecpm_chart: [
      { date: "03-03-2026", value: 0.0 },
      { date: "04-03-2026", value: 20.11 },
      { date: "05-03-2026", value: 23.1 },
      { date: "06-03-2026", value: 24.98 },
      { date: "07-03-2026", value: 25.0 },
      { date: "08-03-2026", value: 24.0 },
      { date: "09-03-2026", value: 25.0 },
      { date: "10-03-2026", value: 25.5 },
      { date: "11-03-2026", value: 27.87 },
      { date: "12-03-2026", value: 40.55 },
      { date: "13-03-2026", value: 41.33 },
      { date: "14-03-2026", value: 41.63 },
      { date: "15-03-2026", value: 42.0 },
      { date: "16-03-2026", value: 39.1 },
      { date: "17-03-2026", value: 39.3 },
      { date: "18-03-2026", value: 47.38 },
      { date: "19-03-2026", value: 49.31 },
      { date: "20-03-2026", value: 49.31 },
      { date: "21-03-2026", value: 56.33 },
      { date: "22-03-2026", value: 58.00 },
      { date: "23-03-2026", value: 60.00 },
      { date: "24-03-2026", value: 60.00 },
    ],
  },
  recent_activity: [
    { type: "Revenue Update", date: "24-03-2026", value: 20.00, domain: "fancydiamondchain.com" },
    { type: "Impression Update", date: "24-03-2026", value: 4480, domain: "fancydiamondchain.com" },
    { type: "Click Update", date: "24-03-2026", value: 145, domain: "fancydiamondchain.com" },
    { type: "Revenue Update", date: "23-03-2026", value: 59.35, domain: "fancydiamondchain.com" },
    { type: "Impression Update", date: "23-03-2026", value: 12370, domain: "fancydiamondchain.com" },
    { type: "Click Update", date: "23-03-2026", value: 331, domain: "fancydiamondchain.com" },
    { type: "Revenue Update", date: "22-03-2026", value: 50.00, domain: "fancydiamondchain.com" },
    { type: "Impression Update", date: "22-03-2026", value: 12380, domain: "fancydiamondchain.com" },
    { type: "Click Update", date: "22-03-2026", value: 328, domain: "fancydiamondchain.com" },
    { type: "Revenue Update", date: "21-03-2026", value: 50.30, domain: "fancydiamondchain.com" },
    { type: "Impression Update", date: "21-03-2026", value: 12343, domain: "fancydiamondchain.com" },
    { type: "Click Update", date: "21-03-2026", value: 340, domain: "fancydiamondchain.com" },
    { type: "Revenue Update", date: "20-03-2026", value: 45.0, domain: "fancydiamondchain.com" },
    { type: "Impression Update", date: "20-03-2026", value: 12380, domain: "fancydiamondchain.com" },
    { type: "Click Update", date: "20-03-2026", value: 310, domain: "fancydiamondchain.com" },
    { type: "Revenue Update", date: "19-03-2026", value: 39.35, domain: "fancydiamondchain.com" },
    { type: "Impression Update", date: "19-03-2026", value: 11060, domain: "fancydiamondchain.com" },
    { type: "Click Update", date: "19-03-2026", value: 310, domain: "fancydiamondchain.com" },
    { type: "Revenue Update", date: "18-03-2026", value: 45.38, domain: "fancydiamondchain.com" },
    { type: "Impression Update", date: "18-03-2026", value: 12321, domain: "fancydiamondchain.com" },
    { type: "Click Update", date: "18-03-2026", value: 310, domain: "fancydiamondchain.com" },
    { type: "Revenue Update", date: "17-03-2026", value: 43.30, domain: "fancydiamondchain.com" },
    { type: "Impression Update", date: "17-03-2026", value: 12380, domain: "fancydiamondchain.com" },
    { type: "Click Update", date: "17-03-2026", value: 310, domain: "fancydiamondchain.com" },
    { type: "Revenue Update", date: "16-03-2026", value: 30.0, domain: "fancydiamondchain.com" },
    { type: "Impression Update", date: "16-03-2026", value: 11721, domain: "fancydiamondchain.com" },
    { type: "Click Update", date: "16-03-2026", value: 310, domain: "fancydiamondchain.com" },
    { type: "Revenue Update", date: "15-03-2026", value: 39.0, domain: "fancydiamondchain.com" },
    { type: "Impression Update", date: "15-03-2026", value: 12317, domain: "fancydiamondchain.com" },
    { type: "Click Update", date: "15-03-2026", value: 343, domain: "fancydiamondchain.com" },
    { type: "Revenue Update", date: "14-03-2026", value: 45.0, domain: "fancydiamondchain.com" },
    { type: "Impression Update", date: "14-03-2026", value: 12315, domain: "fancydiamondchain.com" },
    { type: "Click Update", date: "14-03-2026", value: 341, domain: "fancydiamondchain.com" },
    { type: "Revenue Update", date: "13-03-2026", value: 42.22, domain: "fancydiamondchain.com" },
    { type: "Impression Update", date: "13-03-2026", value: 10222, domain: "fancydiamondchain.com" },
    { type: "Click Update", date: "13-03-2026", value: 292, domain: "fancydiamondchain.com" },
    { type: "Revenue Update", date: "12-03-2026", value: 47.55, domain: "fancydiamondchain.com" },
    { type: "Impression Update", date: "12-03-2026", value: 4433, domain: "fancydiamondchain.com" },
    { type: "Click Update", date: "12-03-2026", value: 102, domain: "fancydiamondchain.com" },
    { type: "Revenue Update", date: "11-03-2026", value: 16.98, domain: "fancydiamondchain.com" },
    { type: "Impression Update", date: "11-03-2026", value: 5636, domain: "fancydiamondchain.com" },
    { type: "Click Update", date: "11-03-2026", value: 85, domain: "fancydiamondchain.com" },
    { type: "Revenue Update", date: "10-03-2026", value: 26.33, domain: "fancydiamondchain.com" },
    { type: "Impression Update", date: "10-03-2026", value: 5321, domain: "fancydiamondchain.com" },
    { type: "Click Update", date: "10-03-2026", value: 86, domain: "fancydiamondchain.com" },
    { type: "Revenue Update", date: "09-03-2026", value: 26.44, domain: "fancydiamondchain.com" },
    { type: "Impression Update", date: "09-03-2026", value: 5236, domain: "fancydiamondchain.com" },
    { type: "Click Update", date: "09-03-2026", value: 80, domain: "fancydiamondchain.com" },
    { type: "Revenue Update", date: "08-03-2026", value: 26.78, domain: "fancydiamondchain.com" },
    { type: "Impression Update", date: "08-03-2026", value: 5213, domain: "fancydiamondchain.com" },
    { type: "Click Update", date: "08-03-2026", value: 79, domain: "fancydiamondchain.com" },
    { type: "Revenue Update", date: "07-03-2026", value: 28.32, domain: "fancydiamondchain.com" },
    { type: "Impression Update", date: "07-03-2026", value: 5320, domain: "fancydiamondchain.com" },
    { type: "Click Update", date: "07-03-2026", value: 83, domain: "fancydiamondchain.com" },
    { type: "Revenue Update", date: "06-03-2026", value: 26.43, domain: "fancydiamondchain.com" },
    { type: "Impression Update", date: "06-03-2026", value: 5343, domain: "fancydiamondchain.com" },
    { type: "Click Update", date: "06-03-2026", value: 84, domain: "fancydiamondchain.com" },
    { type: "Revenue Update", date: "05-03-2026", value: 25.45, domain: "fancydiamondchain.com" },
    { type: "Impression Update", date: "05-03-2026", value: 5123, domain: "fancydiamondchain.com" },
    { type: "Click Update", date: "05-03-2026", value: 81, domain: "fancydiamondchain.com" },
    { type: "Revenue Update", date: "04-03-2026", value: 24.01, domain: "fancydiamondchain.com" },
    { type: "Impression Update", date: "04-03-2026", value: 4987, domain: "fancydiamondchain.com" },
    { type: "Click Update", date: "04-03-2026", value: 76, domain: "fancydiamondchain.com" },
    { type: "Revenue Update", date: "03-03-2026", value: 0.0, domain: "fancydiamondchain.com" },
    { type: "Impression Update", date: "03-03-2026", value: 0, domain: "fancydiamondchain.com" },
    { type: "Click Update", date: "03-03-2026", value: 0, domain: "fancydiamondchain.com" },
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
