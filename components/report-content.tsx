"use client"
import { Download, RefreshCw } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const reportData: Array<{
  date: string
  impressions: string
  clicks: string
  ctr: string
  ecpm: string
  revenue: string
}> = [
  // March 2026
  { date: "07-03-2026", impressions: "3,200", clicks: "105", ctr: "3.28%", ecpm: "$22.50", revenue: "$25.20" },
  { date: "08-03-2026", impressions: "3,400", clicks: "108", ctr: "3.17%", ecpm: "$23.10", revenue: "$26.10" },
  { date: "09-03-2026", impressions: "3,100", clicks: "102", ctr: "3.29%", ecpm: "$22.00", revenue: "$24.80" },
  { date: "10-03-2026", impressions: "3,600", clicks: "110", ctr: "3.05%", ecpm: "$24.00", revenue: "$27.00" },
  { date: "11-03-2026", impressions: "3,500", clicks: "109", ctr: "3.11%", ecpm: "$23.80", revenue: "$26.50" },
  { date: "12-03-2026", impressions: "10,200", clicks: "260", ctr: "2.54%", ecpm: "$45.00", revenue: "$36.20" },
  { date: "13-03-2026", impressions: "10,800", clicks: "275", ctr: "2.54%", ecpm: "$46.00", revenue: "$38.10" },
  { date: "14-03-2026", impressions: "11,200", clicks: "290", ctr: "2.58%", ecpm: "$47.50", revenue: "$40.00" },
  { date: "15-03-2026", impressions: "11,800", clicks: "300", ctr: "2.54%", ecpm: "$48.00", revenue: "$42.00" },
  { date: "16-03-2026", impressions: "11,000", clicks: "285", ctr: "2.59%", ecpm: "$46.50", revenue: "$39.50" },
  { date: "17-03-2026", impressions: "11,500", clicks: "295", ctr: "2.56%", ecpm: "$47.00", revenue: "$41.00" },
  { date: "18-03-2026", impressions: "12,000", clicks: "300", ctr: "2.50%", ecpm: "$49.00", revenue: "$44.00" },
  { date: "19-03-2026", impressions: "10,500", clicks: "310", ctr: "2.95%", ecpm: "$50.00", revenue: "$46.20" },
  { date: "20-03-2026", impressions: "11,000", clicks: "312", ctr: "2.83%", ecpm: "$52.00", revenue: "$47.10" },
  { date: "21-03-2026", impressions: "11,500", clicks: "314", ctr: "2.73%", ecpm: "$53.00", revenue: "$48.50" },
  { date: "22-03-2026", impressions: "12,000", clicks: "315", ctr: "2.62%", ecpm: "$54.00", revenue: "$49.00" },
  { date: "23-03-2026", impressions: "12,500", clicks: "315", ctr: "2.52%", ecpm: "$55.00", revenue: "$50.00" },
  { date: "24-03-2026", impressions: "11,800", clicks: "313", ctr: "2.65%", ecpm: "$54.00", revenue: "$48.80" },
  { date: "25-03-2026", impressions: "12,200", clicks: "314", ctr: "2.57%", ecpm: "$55.00", revenue: "$49.20" },
  { date: "26-03-2026", impressions: "13,000", clicks: "315", ctr: "2.42%", ecpm: "$56.00", revenue: "$50.00" },
  { date: "27-03-2026", impressions: "11,000", clicks: "312", ctr: "2.83%", ecpm: "$53.00", revenue: "$47.80" },
  { date: "28-03-2026", impressions: "11,500", clicks: "314", ctr: "2.73%", ecpm: "$54.00", revenue: "$48.50" },
  { date: "29-03-2026", impressions: "12,000", clicks: "315", ctr: "2.62%", ecpm: "$55.00", revenue: "$49.50" },
  { date: "30-03-2026", impressions: "12,500", clicks: "315", ctr: "2.52%", ecpm: "$56.00", revenue: "$50.00" },
  { date: "31-03-2026", impressions: "12,300", clicks: "314", ctr: "2.55%", ecpm: "$55.50", revenue: "$49.80" },
  // April 2026
  { date: "01-04-2026", impressions: "12,000", clicks: "330", ctr: "2.75%", ecpm: "$76.00", revenue: "$72.00" },
  { date: "02-04-2026", impressions: "12,200", clicks: "335", ctr: "2.74%", ecpm: "$77.00", revenue: "$73.20" },
  { date: "03-04-2026", impressions: "12,500", clicks: "338", ctr: "2.70%", ecpm: "$78.00", revenue: "$74.10" },
  { date: "04-04-2026", impressions: "11,800", clicks: "328", ctr: "2.78%", ecpm: "$75.00", revenue: "$71.80" },
  { date: "05-04-2026", impressions: "13,000", clicks: "340", ctr: "2.61%", ecpm: "$79.00", revenue: "$75.00" },
  { date: "06-04-2026", impressions: "12,300", clicks: "336", ctr: "2.73%", ecpm: "$77.50", revenue: "$73.50" },
  { date: "07-04-2026", impressions: "12,280", clicks: "335", ctr: "2.72%", ecpm: "$82.00", revenue: "$82.00" },
  { date: "08-04-2026", impressions: "12,300", clicks: "338", ctr: "2.74%", ecpm: "$83.00", revenue: "$83.00" },
  { date: "09-04-2026", impressions: "12,500", clicks: "340", ctr: "2.72%", ecpm: "$84.00", revenue: "$84.00" },
  { date: "10-04-2026", impressions: "12,280", clicks: "336", ctr: "2.73%", ecpm: "$82.50", revenue: "$81.50" },
  { date: "11-04-2026", impressions: "12,285", clicks: "337", ctr: "2.74%", ecpm: "$83.50", revenue: "$82.50" },
  { date: "12-04-2026", impressions: "12,290", clicks: "339", ctr: "2.76%", ecpm: "$84.50", revenue: "$83.50" },
  { date: "13-04-2026", impressions: "12,300", clicks: "340", ctr: "2.76%", ecpm: "$85.00", revenue: "$84.50" },
  { date: "14-04-2026", impressions: "12,310", clicks: "341", ctr: "2.77%", ecpm: "$85.50", revenue: "$85.00" },
  { date: "15-04-2026", impressions: "12,280", clicks: "338", ctr: "2.75%", ecpm: "$84.20", revenue: "$83.20" },
  { date: "16-04-2026", impressions: "12,290", clicks: "337", ctr: "2.74%", ecpm: "$83.80", revenue: "$82.80" },
  { date: "17-04-2026", impressions: "12,300", clicks: "339", ctr: "2.76%", ecpm: "$84.50", revenue: "$84.00" },
  { date: "18-04-2026", impressions: "12,310", clicks: "340", ctr: "2.76%", ecpm: "$85.00", revenue: "$85.00" },
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
          <h3 className="text-lg font-medium">Report Results - Final Override (18-04-2026)</h3>
          <div className="text-sm text-gray-500">
            Generated on {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
          </div>
        </div>
          <div className="text-sm text-gray-500">
            Generated on {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
          </div>
        </div>
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
