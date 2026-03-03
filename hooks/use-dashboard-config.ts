/**
 * Custom hook for managing dashboard configuration
 * Provides manual-only configuration management with localStorage persistence
 */

"use client"

import { useState, useEffect, useCallback } from "react"
import {
  DashboardConfig,
  DEFAULT_CONFIG,
  loadDashboardConfig,
  saveDashboardConfig,
  updateDashboardConfig,
} from "@/lib/dashboard-config"

export function useDashboardConfig() {
  const [config, setConfig] = useState<DashboardConfig | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Load config on mount
  useEffect(() => {
    const loaded = loadDashboardConfig()
    setConfig(loaded)
    setIsLoading(false)
  }, [])

  // Update configuration manually
  const updateConfig = useCallback((updates: Partial<DashboardConfig>) => {
    const updated = updateDashboardConfig(updates)
    setConfig(updated)
    return updated
  }, [])

  // Update dashboard summary metrics
  const updateDashboardSummary = useCallback(
    (summary: Partial<DashboardConfig["dashboard_summary"]>) => {
      if (!config) return
      return updateConfig({
        ...config,
        dashboard_summary: {
          ...config.dashboard_summary,
          ...summary,
        },
      })
    },
    [config, updateConfig]
  )

  // Update totals bar metrics
  const updateTotalsBar = useCallback(
    (totals: Partial<DashboardConfig["totals_bar"]>) => {
      if (!config) return
      return updateConfig({
        ...config,
        totals_bar: {
          ...config.totals_bar,
          ...totals,
        },
      })
    },
    [config, updateConfig]
  )

  // Update profile information
  const updateProfile = useCallback(
    (profile: Partial<DashboardConfig["profile"]>) => {
      if (!config) return
      return updateConfig({
        ...config,
        profile: {
          ...config.profile,
          ...profile,
        },
      })
    },
    [config, updateConfig]
  )

  // Update payment information
  const updatePayments = useCallback(
    (payments: Partial<DashboardConfig["payments"]>) => {
      if (!config) return
      return updateConfig({
        ...config,
        payments: {
          ...config.payments,
          ...payments,
        },
      })
    },
    [config, updateConfig]
  )

  // Update statistics report
  const updateStatisticsReport = useCallback(
    (report: Partial<DashboardConfig["statistics_report"]>) => {
      if (!config) return
      return updateConfig({
        ...config,
        statistics_report: {
          ...config.statistics_report,
          ...report,
        },
      })
    },
    [config, updateConfig]
  )

  // Add recent activity
  const addRecentActivity = useCallback(
    (activity: any) => {
      if (!config) return
      const updatedActivities = [activity, ...config.recent_activity].slice(0, 100) // Keep last 100
      return updateConfig({
        ...config,
        recent_activity: updatedActivities,
      })
    },
    [config, updateConfig]
  )

  // Clear recent activity
  const clearRecentActivity = useCallback(() => {
    if (!config) return
    return updateConfig({
      ...config,
      recent_activity: [],
    })
  }, [config, updateConfig])

  return {
    config: config || DEFAULT_CONFIG,
    isLoading,
    updateConfig,
    updateDashboardSummary,
    updateTotalsBar,
    updateProfile,
    updatePayments,
    updateStatisticsReport,
    addRecentActivity,
    clearRecentActivity,
  }
}
