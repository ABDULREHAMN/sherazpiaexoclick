"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useDashboardConfig } from "@/hooks/use-dashboard-config"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle, Save, RotateCcw } from "lucide-react"

export default function ConfigManagerPage() {
  const router = useRouter()
  const { config, updateDashboardSummary, updateTotalsBar, updatePayments } = useDashboardConfig()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [saveMessage, setSaveMessage] = useState("")

  // Form state
  const [formData, setFormData] = useState({
    // Today metrics
    todayRevenue: "0",
    todayImpressions: "0",
    todayClicks: "0",
    todayCTR: "0",
    todayECPM: "0",
    // Monthly
    thisMonthRevenue: "0",
    lastMonthRevenue: "0",
    last6MonthRevenue: "0",
    // Totals
    totalRevenue: "0",
    totalImpressions: "0",
    totalClicks: "0",
    averageCTR: "0",
    averageECPM: "0",
    // Payments
    availableBalance: "0",
    pendingBalance: "0",
    minimumWithdrawal: "0",
  })

  useEffect(() => {
    // Check authentication
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (isLoggedIn !== "true") {
      router.push("/login")
      return
    }
    setIsAuthenticated(true)

    // Populate form with current config
    setFormData({
      todayRevenue: config.dashboard_data.today.revenue.toString(),
      todayImpressions: config.dashboard_data.today.impressions.toString(),
      todayClicks: config.dashboard_data.today.clicks.toString(),
      todayCTR: config.dashboard_data.today.ctr.toString(),
      todayECPM: config.dashboard_data.today.ecpm.toString(),
      thisMonthRevenue: config.dashboard_data.this_month.revenue.toString(),
      lastMonthRevenue: config.dashboard_data.last_month.revenue.toString(),
      last6MonthRevenue: config.dashboard_data.last_6_month.revenue.toString(),
      totalRevenue: config.dashboard_data.today.revenue.toString(),
      totalImpressions: config.dashboard_data.today.impressions.toString(),
      totalClicks: config.dashboard_data.today.clicks.toString(),
      averageCTR: config.dashboard_data.today.ctr.toString(),
      averageECPM: config.dashboard_data.today.ecpm.toString(),
      availableBalance: config.payments.available_balance.toString(),
      pendingBalance: config.payments.pending_balance.toString(),
      minimumWithdrawal: config.withdrawal_section.minimum_withdrawal.toString(),
    })
  }, [config, router])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSave = async () => {
    try {
      setIsSaving(true)
      setSaveMessage("")

      // Parse and validate numbers
      const parsedData = {
        todayRevenue: parseFloat(formData.todayRevenue) || 0,
        todayImpressions: parseInt(formData.todayImpressions) || 0,
        todayClicks: parseInt(formData.todayClicks) || 0,
        todayCTR: parseFloat(formData.todayCTR) || 0,
        todayECPM: parseFloat(formData.todayECPM) || 0,
        thisMonthRevenue: parseFloat(formData.thisMonthRevenue) || 0,
        lastMonthRevenue: parseFloat(formData.lastMonthRevenue) || 0,
        last6MonthRevenue: parseFloat(formData.last6MonthRevenue) || 0,
        totalRevenue: parseFloat(formData.totalRevenue) || 0,
        totalImpressions: parseInt(formData.totalImpressions) || 0,
        totalClicks: parseInt(formData.totalClicks) || 0,
        averageCTR: parseFloat(formData.averageCTR) || 0,
        averageECPM: parseFloat(formData.averageECPM) || 0,
        availableBalance: parseFloat(formData.availableBalance) || 0,
        pendingBalance: parseFloat(formData.pendingBalance) || 0,
        minimumWithdrawal: parseFloat(formData.minimumWithdrawal) || 0,
      }

      // Update dashboard data
      updateDashboardSummary({
        today: {
          revenue: parsedData.todayRevenue,
          impressions: parsedData.todayImpressions,
          clicks: parsedData.todayClicks,
          ctr: parsedData.todayCTR,
          ecpm: parsedData.todayECPM,
        },
        this_month: { revenue: parsedData.thisMonthRevenue },
        last_month: { revenue: parsedData.lastMonthRevenue },
        last_6_month: { revenue: parsedData.last6MonthRevenue },
      })

      // Update payments
      updatePayments({
        available_balance: parsedData.availableBalance,
        pending_balance: parsedData.pendingBalance,
      })

      setSaveMessage("Configuration saved successfully!")
      setTimeout(() => setSaveMessage(""), 3000)
    } catch (error) {
      setSaveMessage("Error saving configuration: " + (error instanceof Error ? error.message : "Unknown error"))
    } finally {
      setIsSaving(false)
    }
  }

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset all data to zero?")) {
      setFormData({
        todayRevenue: "0",
        todayImpressions: "0",
        todayClicks: "0",
        todayCTR: "0",
        todayECPM: "0",
        thisMonthRevenue: "0",
        lastMonthRevenue: "0",
        last6MonthRevenue: "0",
        totalRevenue: "0",
        totalImpressions: "0",
        totalClicks: "0",
        averageCTR: "0",
        averageECPM: "0",
        availableBalance: "0",
        pendingBalance: "0",
        minimumWithdrawal: "0",
      })
    }
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard Configuration Manager</h1>
          <p className="text-muted-foreground">Manually update dashboard metrics (Manual Mode Only)</p>
        </div>

        {saveMessage && (
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-blue-800">{saveMessage}</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Today Metrics */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Today's Metrics</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="todayRevenue">Revenue ($)</Label>
                <Input
                  id="todayRevenue"
                  name="todayRevenue"
                  type="number"
                  step="0.01"
                  value={formData.todayRevenue}
                  onChange={handleInputChange}
                  placeholder="0.00"
                />
              </div>
              <div>
                <Label htmlFor="todayImpressions">Impressions</Label>
                <Input
                  id="todayImpressions"
                  name="todayImpressions"
                  type="number"
                  value={formData.todayImpressions}
                  onChange={handleInputChange}
                  placeholder="0"
                />
              </div>
              <div>
                <Label htmlFor="todayClicks">Clicks</Label>
                <Input
                  id="todayClicks"
                  name="todayClicks"
                  type="number"
                  value={formData.todayClicks}
                  onChange={handleInputChange}
                  placeholder="0"
                />
              </div>
              <div>
                <Label htmlFor="todayCTR">CTR (%)</Label>
                <Input
                  id="todayCTR"
                  name="todayCTR"
                  type="number"
                  step="0.01"
                  value={formData.todayCTR}
                  onChange={handleInputChange}
                  placeholder="0.00"
                />
              </div>
              <div>
                <Label htmlFor="todayECPM">eCPM ($)</Label>
                <Input
                  id="todayECPM"
                  name="todayECPM"
                  type="number"
                  step="0.01"
                  value={formData.todayECPM}
                  onChange={handleInputChange}
                  placeholder="0.00"
                />
              </div>
            </div>
          </Card>

          {/* Monthly Metrics */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Monthly Metrics</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="thisMonthRevenue">This Month Revenue ($)</Label>
                <Input
                  id="thisMonthRevenue"
                  name="thisMonthRevenue"
                  type="number"
                  step="0.01"
                  value={formData.thisMonthRevenue}
                  onChange={handleInputChange}
                  placeholder="0.00"
                />
              </div>
              <div>
                <Label htmlFor="lastMonthRevenue">Last Month Revenue ($)</Label>
                <Input
                  id="lastMonthRevenue"
                  name="lastMonthRevenue"
                  type="number"
                  step="0.01"
                  value={formData.lastMonthRevenue}
                  onChange={handleInputChange}
                  placeholder="0.00"
                />
              </div>
              <div>
                <Label htmlFor="last6MonthRevenue">Last 6 Month Revenue ($)</Label>
                <Input
                  id="last6MonthRevenue"
                  name="last6MonthRevenue"
                  type="number"
                  step="0.01"
                  value={formData.last6MonthRevenue}
                  onChange={handleInputChange}
                  placeholder="0.00"
                />
              </div>
            </div>
          </Card>

          {/* Total Metrics */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Total Metrics</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="totalRevenue">Total Revenue ($)</Label>
                <Input
                  id="totalRevenue"
                  name="totalRevenue"
                  type="number"
                  step="0.01"
                  value={formData.totalRevenue}
                  onChange={handleInputChange}
                  placeholder="0.00"
                />
              </div>
              <div>
                <Label htmlFor="totalImpressions">Total Impressions</Label>
                <Input
                  id="totalImpressions"
                  name="totalImpressions"
                  type="number"
                  value={formData.totalImpressions}
                  onChange={handleInputChange}
                  placeholder="0"
                />
              </div>
              <div>
                <Label htmlFor="totalClicks">Total Clicks</Label>
                <Input
                  id="totalClicks"
                  name="totalClicks"
                  type="number"
                  value={formData.totalClicks}
                  onChange={handleInputChange}
                  placeholder="0"
                />
              </div>
              <div>
                <Label htmlFor="averageCTR">Average CTR (%)</Label>
                <Input
                  id="averageCTR"
                  name="averageCTR"
                  type="number"
                  step="0.01"
                  value={formData.averageCTR}
                  onChange={handleInputChange}
                  placeholder="0.00"
                />
              </div>
              <div>
                <Label htmlFor="averageECPM">Average eCPM ($)</Label>
                <Input
                  id="averageECPM"
                  name="averageECPM"
                  type="number"
                  step="0.01"
                  value={formData.averageECPM}
                  onChange={handleInputChange}
                  placeholder="0.00"
                />
              </div>
            </div>
          </Card>

          {/* Payment Metrics */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="availableBalance">Available Balance ($)</Label>
                <Input
                  id="availableBalance"
                  name="availableBalance"
                  type="number"
                  step="0.01"
                  value={formData.availableBalance}
                  onChange={handleInputChange}
                  placeholder="0.00"
                />
              </div>
              <div>
                <Label htmlFor="pendingBalance">Pending Balance ($)</Label>
                <Input
                  id="pendingBalance"
                  name="pendingBalance"
                  type="number"
                  step="0.01"
                  value={formData.pendingBalance}
                  onChange={handleInputChange}
                  placeholder="0.00"
                />
              </div>
              <div>
                <Label htmlFor="minimumWithdrawal">Minimum Withdrawal ($)</Label>
                <Input
                  id="minimumWithdrawal"
                  name="minimumWithdrawal"
                  type="number"
                  step="0.01"
                  value={formData.minimumWithdrawal}
                  onChange={handleInputChange}
                  placeholder="0.00"
                />
              </div>
              <div className="mt-6 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800 font-medium">Payment Method: Payoneer</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex gap-4">
          <Button
            onClick={handleSave}
            disabled={isSaving}
            className="flex items-center gap-2"
            size="lg"
          >
            <Save className="w-4 h-4" />
            {isSaving ? "Saving..." : "Save Configuration"}
          </Button>
          <Button
            onClick={handleReset}
            variant="outline"
            className="flex items-center gap-2"
            size="lg"
          >
            <RotateCcw className="w-4 h-4" />
            Reset to Zero
          </Button>
        </div>

        <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-sm text-amber-800">
            <strong>Important:</strong> This is a manual configuration manager. All data is stored locally in your browser. 
            Changes are persistent and will appear in the dashboard after you return to it. 
            No external APIs or automatic syncing is enabled.
          </p>
        </div>
      </div>
    </div>
  )
}
