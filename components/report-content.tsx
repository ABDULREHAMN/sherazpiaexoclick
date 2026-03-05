"use client"
import { Download, RefreshCw } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const reportData = [
  { date: "03-03-2026", impressions: "0", clicks: "0", ctr: "0.00%", ecpm: "$0.00", revenue: "$0.00" },
  { date: "04-03-2026", impressions: "8786", clicks: "120", ctr: "1.22%", ecpm: "$17.66", revenue: "$26.01" },
  { date: "05-03-2026", impressions: "7642", clicks: "91", ctr: "1.22%", ecpm: "$25.12", revenue: "$21.11" },
]

const statisticsTotals = {
  impressions: 0,
  clicks: 0,
  revenue: 0,
  ecpm: 0,
  ctr: 0,
}

export function ReportContent() {
  const handleRefresh = () => {
    // Manual mode only - no action needed
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
        <h1 className="text-2xl font-bold">Reports</h1>
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
                <p>Refresh report data</p>
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
                <p>Export report as CSV</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

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

      {/* Report Table */}
      <Card className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Report Results - 03-03-2026</h3>
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
