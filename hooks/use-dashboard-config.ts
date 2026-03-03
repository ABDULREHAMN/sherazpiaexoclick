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

  // Update dashboard data metrics
  const updateDashboardSummary = useCallback(
    (summary: Partial<DashboardConfig["dashboard_data"]>) => {
      if (!config) return
      return updateConfig({
        ...config,
        dashboard_data: {
          ...config.dashboard_data,
          ...summary,
        },
      })
    },
    [config, updateConfig]
  )

  // Update profile information
  const updateProfile = useCallback(
    (profile: Partial<DashboardConfig["publisher_profile"]>) => {
      if (!config) return
      return updateConfig({
        ...config,
        publisher_profile: {
          ...config.publisher_profile,
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

  // Update statistics report - today only
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
    updateProfile,
    updatePayments,
    updateStatisticsReport,
    addRecentActivity,
    clearRecentActivity,
  }
}
