# Default Dashboard Configuration

This file documents the default configuration values used when the dashboard is first accessed.

## Default Configuration Structure

```yaml
dashboard_config:
  system:
    auto_update: false
    allow_external_sync: false
    design_change_allowed: false
    layout_change_allowed: false
    data_source: manual_only

  profile:
    username: ""
    email: ""
    publisher_id: ""
    status: "reset"

  dashboard_summary:
    today:
      revenue: 0.00
      impressions: 0
      clicks: 0
      ctr: 0.00
      ecpm: 0.00
    this_month:
      revenue: 0.00
    last_month:
      revenue: 0.00
    last_6_month:
      revenue: 0.00

  totals_bar:
    total_revenue: 0.00
    total_impressions: 0
    total_clicks: 0
    average_ctr: 0.00
    average_ecpm: 0.00

  statistics_report:
    last_7_days:
      revenue: 0.00
      impressions: 0
      clicks: 0
      ctr: 0.00
      ecpm: 0.00
    last_30_days:
      revenue: 0.00
      impressions: 0
      clicks: 0
      ctr: 0.00
      ecpm: 0.00
    last_3_month:
      revenue: 0.00
      impressions: 0
      clicks: 0
      ctr: 0.00
      ecpm: 0.00
    custom:
      revenue: 0.00
      impressions: 0
      clicks: 0
      ctr: 0.00
      ecpm: 0.00

  payments:
    available_balance: 0.00
    pending_balance: 0.00
    withdrawal_history: []
    payment_history: []
    payment_method: []

  withdrawal_section:
    minimum_withdrawal: 0.00
    last_withdrawal_date: ""
    last_withdrawal_amount: 0.00

  charts:
    revenue_chart: []
    impressions_chart: []
    clicks_chart: []
    ctr_chart: []
    ecpm_chart: []

  recent_activity: []
```

## Configuration Fields Explained

### System Settings
- `auto_update`: Always false (manual mode only)
- `allow_external_sync`: Always false (no external APIs)
- `design_change_allowed`: Always false (no design changes)
- `layout_change_allowed`: Always false (no layout changes)
- `data_source`: Always "manual_only"

### Profile Section
User profile information (empty by default):
- `username`: Publisher username
- `email`: Publisher email
- `publisher_id`: Unique publisher identifier
- `status`: Account status (reset on init)

### Dashboard Summary
Daily and monthly earnings overview:
- `today`: Today's metrics (revenue, impressions, clicks, CTR, eCPM)
- `this_month`: Current month revenue
- `last_month`: Previous month revenue
- `last_6_month`: Revenue from 6 months ago

### Totals Bar
Cumulative performance metrics:
- `total_revenue`: Total earnings all-time
- `total_impressions`: Total ad impressions
- `total_clicks`: Total clicks
- `average_ctr`: Average click-through rate
- `average_ecpm`: Average earnings per 1000 impressions

### Statistics Report
Period-based performance data:
- `last_7_days`: Last 7 days metrics
- `last_30_days`: Last 30 days metrics
- `last_3_month`: Last 3 months metrics
- `custom`: Custom period metrics

### Payments
Payment and balance information:
- `available_balance`: Ready to withdraw amount
- `pending_balance`: Currently processing amount
- `withdrawal_history`: Records of past withdrawals
- `payment_history`: Records of received payments
- `payment_method`: Payment method details (Payoneer)

### Withdrawal Section
Withdrawal-specific information:
- `minimum_withdrawal`: Minimum amount required to request withdrawal
- `last_withdrawal_date`: Date of most recent withdrawal
- `last_withdrawal_amount`: Amount of most recent withdrawal

### Charts
Historical data for charting:
- `revenue_chart`: Revenue data points over time
- `impressions_chart`: Impressions data points
- `clicks_chart`: Clicks data points
- `ctr_chart`: CTR data points
- `ecpm_chart`: eCPM data points

### Recent Activity
Activity log entries (array of activity objects)

## Updating Configuration

### Via Config Manager
1. Navigate to `/publisher/config-manager`
2. Fill in desired values in the form
3. Click "Save Configuration"
4. Values are persisted to localStorage

### Programmatically (Advanced)
```typescript
import { useDashboardConfig } from '@/hooks/use-dashboard-config'

// In a component:
const { updateDashboardSummary } = useDashboardConfig()

updateDashboardSummary({
  today: {
    revenue: 150.50,
    impressions: 5000,
    clicks: 125,
    ctr: 2.5,
    ecpm: 30.10
  }
})
```

## Resetting Configuration

To reset all values back to defaults:
1. Navigate to Config Manager
2. Click "Reset to Zero"
3. Confirm the action
4. All metrics will be cleared

Or programmatically:
```typescript
import { resetDashboardConfig } from '@/lib/dashboard-config'

resetDashboardConfig() // Clears localStorage
```

## Storage Key

Configuration is stored in localStorage with the key:
```
dashboard_config_v1
```

To manually clear:
```javascript
localStorage.removeItem('dashboard_config_v1')
```

## Important Notes

- All numeric values default to 0
- All string values default to empty string ""
- All array values default to empty array []
- No negative numbers are supported
- Configuration is per-browser/device
- Configuration persists until browser cache is cleared

## Accessing Stored Configuration

In the browser console:
```javascript
// Get stored config
const config = localStorage.getItem('dashboard_config_v1')
console.log(JSON.parse(config))

// Or use the hook
import { loadDashboardConfig } from '@/lib/dashboard-config'
const config = loadDashboardConfig()
```

## Field Data Types

- **Numbers**: Revenue, impressions, clicks, CTR, eCPM (float/integer)
- **Strings**: Username, email, dates, statuses
- **Arrays**: Charts, activities, withdrawal history
- **Booleans**: System settings (always false)

## Example: Setting Up Initial Data

```typescript
import { updateDashboardConfig } from '@/lib/dashboard-config'

const initialConfig = {
  profile: {
    username: "publisher_name",
    email: "publisher@fancydiamondchain.com",
    publisher_id: "PUB12345",
    status: "active"
  },
  dashboard_summary: {
    today: {
      revenue: 150.00,
      impressions: 5000,
      clicks: 125,
      ctr: 2.5,
      ecpm: 30.00
    },
    this_month: { revenue: 2500.00 },
    last_month: { revenue: 2000.00 },
    last_6_month: { revenue: 12000.00 }
  },
  totals_bar: {
    revenue: 50000.00,
    impressions: 1000000,
    clicks: 25000,
    ctr: 2.5,
    ecpm: 50.00
  },
  payments: {
    available_balance: 500.00,
    pending_balance: 250.00
  },
  withdrawal_section: {
    minimum_withdrawal: 100.00
  }
}

updateDashboardConfig(initialConfig)
```

---

**Configuration System Ready for Use ✅**
