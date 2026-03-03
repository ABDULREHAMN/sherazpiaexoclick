# Quick Start Guide - Dashboard Configuration

## How to Update Dashboard Data

### Step 1: Login
- Go to the login page and authenticate with your credentials
- Dashboard data requires login to be visible

### Step 2: Navigate to Config Manager
- From the sidebar menu, click **"Config Manager"** (with the sliders icon)
- Or navigate directly to: `/publisher/config-manager`

### Step 3: Update Metrics
The Config Manager has 4 main sections:

#### Today's Metrics
- **Revenue ($)**: Daily revenue
- **Impressions**: Number of ad impressions today
- **Clicks**: Number of clicks today
- **CTR (%)**: Click-through rate percentage
- **eCPM ($)**: Effective cost per mille (earnings per 1000 impressions)

#### Monthly Metrics
- **This Month Revenue**: Current month earnings
- **Last Month Revenue**: Previous month earnings
- **Last 6 Month Revenue**: Revenue from 6 months ago

#### Total Metrics
- **Total Revenue ($)**: Cumulative earnings
- **Total Impressions**: Total ad impressions across all time
- **Total Clicks**: Total clicks across all time
- **Average CTR (%)**: Average click-through rate
- **Average eCPM ($)**: Average earnings per 1000 impressions

#### Payment Information
- **Available Balance ($)**: Ready to withdraw
- **Pending Balance ($)**: Processing/pending payouts
- **Minimum Withdrawal ($)**: Minimum amount required for withdrawal
- **Payment Method**: Payoneer (fixed)

### Step 4: Save or Reset
- **Save Configuration**: Persists all entered data to localStorage
- **Reset to Zero**: Clears all metrics (requires confirmation)

## Important Notes

- ✅ All data is stored locally in your browser
- ✅ Changes appear immediately on the dashboard
- ✅ No external APIs or cloud syncing
- ✅ Manual data entry only
- ✅ Data persists between browser sessions
- ⚠️ Clearing browser cache will delete configuration
- ⚠️ Configuration is per-browser/device

## Accessing the Dashboard
After updating configuration in Config Manager:
1. Click "Dashboard" in the sidebar
2. All metrics will display with your updated values
3. Charts and statistics will reflect the new data

## If You Need to Check Configuration
1. Go to Config Manager
2. All current values are displayed in the form
3. Make changes as needed
4. Save to update

## Data Flow
```
You → Config Manager Form
    ↓
    Saves to localStorage
    ↓
Dashboard Component reads from localStorage
    ↓
Displays all metrics with your data
```

## Troubleshooting

**Data Not Showing?**
- Ensure you're logged in
- Check browser developer tools console for errors
- Verify localStorage is enabled in browser

**Changes Not Saved?**
- Click "Save Configuration" button
- Check for error message
- Retry the save

**Config Manager Not Accessible?**
- Verify you're logged in
- Try accessing: `/publisher/config-manager`
- Check browser console for errors

## Contact & Support
For issues or questions about the configuration system, refer to the dashboard support or documentation.
