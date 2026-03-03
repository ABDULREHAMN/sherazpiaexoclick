# Quick Reference Card

## Login Credentials
```
Username: sheraazpia07
Password: sheraazpia@0786
```

## Publisher Info
```
Name: Sheeraz Pia
Email: sherazpia76eez332@gmail.com
Site: https://fancydiamondchain.com
Payment: Payoneer
Status: Approved
Network: ExoClick
```

## Navigation
```
Dashboard → View metrics and analytics
Config Manager → Update metrics manually
Settings (gear icon in sidebar)
```

## How to Update Data
1. Click "Config Manager" in sidebar
2. Update desired metrics in form
3. Click "Save Configuration"
4. Return to Dashboard to see changes

## Editable Metrics
- Today's Revenue
- Today's Impressions
- Today's Clicks
- Today's CTR (%)
- Today's eCPM ($)
- This Month Revenue
- Last Month Revenue
- Last 6 Month Revenue
- Available Balance
- Pending Balance
- Minimum Withdrawal

## Important Notes
- Manual updates only (no auto-sync)
- Data stored locally (browser localStorage)
- Login required (dashboard hidden without auth)
- Design/layout cannot be changed
- ExoClick branding unchanged
- No external API connections

## Keyboard Shortcuts
- `/login` - Go to login
- `/publisher/dashboard` - Go to dashboard
- `/publisher/config-manager` - Go to config manager

## Reset Data
1. Go to Config Manager
2. Click "Reset to Zero"
3. All metrics return to 0.00

## Troubleshooting
- Not seeing dashboard? Check if logged in
- Can't find Config Manager? Ensure logged in, check sidebar
- Data not saving? Enable browser localStorage
- Forgot credentials? Use: sheraazpia07 / sheraazpia@0786

## File Locations
- Configuration: `lib/dashboard-config.ts`
- Hook: `hooks/use-dashboard-config.ts`
- UI: `app/publisher/config-manager/page.tsx`
- Dashboard: `app/publisher/dashboard/page.tsx`

## Documentation
- `INTEGRATION_COMPLETE.md` - Overview
- `FINAL_SETUP_GUIDE.md` - Detailed setup
- `CONFIG_MANAGER_GUIDE.md` - How to use Config Manager
- `DEFAULT_CONFIG.md` - Configuration reference
