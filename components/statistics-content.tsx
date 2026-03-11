"use client"
import { Download, RefreshCw, Filter } from "lucide-react"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const reportData = [
  { date: "03-03-2026", impressions: "0", clicks: "0", ctr: "0.00%", ecpm: "$0.00", revenue: "$0.00" },
  { date: "04-03-2026", impressions: "4987", clicks: "76", ctr: "2.00%", ecpm: "$20.11", revenue: "$24.01" },
  { date: "05-03-2026", impressions: "5123", clicks: "81", ctr: "1.50%", ecpm: "$23.10", revenue: "$25.45" },
  { date: "06-03-2026", impressions: "5343", clicks: "84", ctr: "1.33%", ecpm: "$24.98", revenue: "$26.43" },
  { date: "07-03-2026", impressions: "5320", clicks: "83", ctr: "1.22%", ecpm: "$25.00", revenue: "$28.32" },
  { date: "08-03-2026", impressions: "5213", clicks: "79", ctr: "1.00%", ecpm: "$24.00", revenue: "$26.78" },
  { date: "09-03-2026", impressions: "5236", clicks: "80", ctr: "1.00%", ecpm: "$25.00", revenue: "$26.44" },
  { date: "10-03-2026", impressions: "5321", clicks: "86", ctr: "1.80%", ecpm: "$25.50", revenue: "$26.33" },
  { date: "11-03-2026", impressions: "5636", clicks: "85", ctr: "1.77%", ecpm: "$27.87", revenue: "$27.33" },
]

export function StatisticsContent() {
  const [dateRange, setDateRange] = useState("last-7-days")
  const [groupBy, setGroupBy] = useState("day")
  const [metrics, setMetrics] = useState("all-metrics")
  const [sites, setSites] = useState("all-sites")
  const [countries, setCountries] = useState("all-countries")
  const [device, setDevice] = useState("all-devices")

  const handleRefresh = () => {
    // Manual mode only - no action needed
  }

  const handleApplyFilters = () => {
    // Filters applied
  }

  const handleReset = () => {
    setDateRange("last-7-days")
    setGroupBy("day")
    setMetrics("all-metrics")
    setSites("all-sites")
    setCountries("all-countries")
    setDevice("all-devices")
  }

  const calculateTotals = () => {
    const totalRevenue = reportData.reduce((sum, row) => {
      const revenue = Number.parseFloat(row.revenue.replace("$", "").replace(",", ""))
      return sum + revenue
    }, 0)

    const totalImpressions = reportData.reduce((sum, row) => {
      const impressions = Number.parseInt(row.impressions.replace(",", ""))
      return sum + impressions
    }, 0)

    const totalClicks = reportData.reduce((sum, row) => {
      const clicks = Number.parseInt(row.clicks.replace(",", ""))
      return sum + clicks
    }, 0)

    const avgCTR = totalImpressions > 0 ? ((totalClicks / totalImpressions) * 100).toFixed(2) : "0.00"
    const avgECPM = totalImpressions > 0 ? ((totalRevenue / totalImpressions) * 1000).toFixed(2) : "0.00"

    return {
      totalRevenue: totalRevenue.toFixed(3),
      totalImpressions: totalImpressions.toLocaleString(),
      totalClicks: totalClicks.toLocaleString(),
      avgCTR: `${avgCTR}%`,
      avgECPM: `$${avgECPM}`,
    }
  }

  const totals = calculateTotals()

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h1 className="text-2xl font-bold">Statistics</h1>
        <div className="flex items-center space-x-2 flex-wrap gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" className="flex items-center bg-transparent" onClick={handleRefresh}>
                  <RefreshCw size={16} className="mr-2" />
                  Refresh
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Refresh statistics data</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" className="flex items-center bg-transparent">
                  <Download size={16} className="mr-2" />
                  Export
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Export statistics as CSV</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      {/* Report Filters Section */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <Filter size={20} className="text-gray-700" />
          <h2 className="text-lg font-semibold text-gray-800">Report Filters</h2>
        </div>

        {/* First Row of Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="last-7-days">Last 7 Days</option>
              <option value="last-30-days">Last 30 Days</option>
              <option value="this-month">This Month</option>
              <option value="last-month">Last Month</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Group By</label>
            <select
              value={groupBy}
              onChange={(e) => setGroupBy(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="day">Day</option>
              <option value="week">Week</option>
              <option value="month">Month</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Metrics</label>
            <select
              value={metrics}
              onChange={(e) => setMetrics(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="all-metrics">All Metrics</option>
              <option value="revenue">Revenue Only</option>
              <option value="clicks-impressions">Clicks & Impressions</option>
            </select>
          </div>
        </div>

        {/* Second Row of Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sites</label>
            <select
              value={sites}
              onChange={(e) => setSites(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="all-sites">All Sites</option>
              <option value="fancydiamondchain">fancydiamondchain.com</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Countries</label>
            <select
              value={countries}
              onChange={(e) => setCountries(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="all-countries">All Countries</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Device</label>
            <select
              value={device}
              onChange={(e) => setDevice(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="all-devices">All Devices</option>
              <option value="mobile">Mobile</option>
              <option value="desktop">Desktop</option>
              <option value="tablet">Tablet</option>
            </select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex gap-4">
            <Button
              onClick={handleApplyFilters}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-medium"
            >
              Apply Filters
            </Button>
            <Button
              onClick={handleReset}
              variant="outline"
              className="px-6 py-2 rounded-md font-medium"
            >
              Reset
            </Button>
          </div>
        </div>

        {/* Current Filters Display */}
        <div className="mt-6 pt-6 border-t">
          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-700">Current Filters:</span>
            {" "}
            <span className="text-gray-600">
              {dateRange.replace(/-/g, " ").charAt(0).toUpperCase() + dateRange.replace(/-/g, " ").slice(1)} •{" "}
              {groupBy.charAt(0).toUpperCase() + groupBy.slice(1)} •{" "}
              {sites.replace(/-/g, " ").charAt(0).toUpperCase() + sites.replace(/-/g, " ").slice(1)} •{" "}
              {countries.replace(/-/g, " ").charAt(0).toUpperCase() + countries.replace(/-/g, " ").slice(1)} •{" "}
              {device.replace(/-/g, " ").charAt(0).toUpperCase() + device.replace(/-/g, " ").slice(1)} •{" "}
              {metrics.replace(/-/g, " ").charAt(0).toUpperCase() + metrics.replace(/-/g, " ").slice(1)}
            </span>
          </p>
        </div>
      </Card>

      {/* Statistics Summary */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-green-50 p-4 rounded-lg text-center">
          <div className="text-sm text-gray-600 mb-1">Total Revenue</div>
          <div className="text-xl font-bold text-gray-800">{totals.totalRevenue}</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <div className="text-sm text-gray-600 mb-1">Total Impressions</div>
          <div className="text-xl font-bold text-gray-800">{totals.totalImpressions}</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg text-center">
          <div className="text-sm text-gray-600 mb-1">Total Clicks</div>
          <div className="text-xl font-bold text-gray-800">{totals.totalClicks}</div>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg text-center">
          <div className="text-sm text-gray-600 mb-1">Average CTR</div>
          <div className="text-xl font-bold text-gray-800">{totals.avgCTR}</div>
        </div>
        <div className="bg-indigo-50 p-4 rounded-lg text-center">
          <div className="text-sm text-gray-600 mb-1">Average eCPM</div>
          <div className="text-xl font-bold text-gray-800">{totals.avgECPM}</div>
        </div>
      </div>

      {/* Statistics Table */}
      <Card className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Statistics Results - 03-03-2026</h3>
          <div className="text-sm text-gray-500">
            Generated on {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium text-sm">Date</th>
                <th className="text-left py-3 px-4 font-medium text-sm">Impressions</th>
                <th className="text-left py-3 px-4 font-medium text-sm">Clicks</th>
                <th className="text-left py-3 px-4 font-medium text-sm">CTR</th>
                <th className="text-left py-3 px-4 font-medium text-sm">eCPM</th>
                <th className="text-left py-3 px-4 font-medium text-sm">Revenue</th>
              </tr>
            </thead>
            <tbody>
              {reportData.map((row, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm">{row.date}</td>
                  <td className="py-3 px-4 text-sm">{row.impressions}</td>
                  <td className="py-3 px-4 text-sm">{row.clicks}</td>
                  <td className="py-3 px-4 text-sm">{row.ctr}</td>
                  <td className="py-3 px-4 text-sm">{row.ecpm}</td>
                  <td className="py-3 px-4 text-sm font-medium">{row.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
