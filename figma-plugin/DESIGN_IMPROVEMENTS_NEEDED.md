# Design Improvements Needed for Phillip1 Figma Plugin

## Issues Identified

### 1. Dashboard Screen - Header Section
**Current Issues:**
- Missing Profile Badge in top-right corner
- Profile badge should have:
  - Avatar (32px circle, Accent background)
  - User name "ANKITA" (uppercase, tracking-wide)
  - White/10 background with backdrop blur
  - Border: 1px solid White/10

**Fixed:** ✅ Added proper profile badge with avatar

### 2. Dashboard Screen - Financial Card
**Current Issues:**
- Need more detailed stats section
- Missing Gainers/Losers information
- Stats section should have Secondary/30 background

**Needs:**
- Gainers/Gain: 6 / ₹ 994
- Losers/Loss: 9 / ₹ 1,640

### 3. Reports Screen - Upper Section
**Current Issues:**
- Header styling not matching
- Missing proper tab bar
- Table header needs dark background (#0F172A)
- Summary card styling incorrect

**Needs:**
- Standard header with back button and profile badge
- Tab bar with: Trading, Demat, Mutual Funds, Advisory
- Summary card with orange tint background
- Dark table header with white text

### 4. All Screens - Icons
**Current Issues:**
- Icons are placeholders (circles)
- Need actual icon representations

**Needs:**
- Use Lucide icon style
- Proper icon shapes for:
  - User, Lock, Eye (Login)
  - Fingerprint (Biometric)
  - Home, Briefcase, Wallet, FileText, User (Bottom Nav)
  - Search, Filter, Download (Portfolio)
  - ArrowDown, ArrowUp (Funds)
  - TrendingUp, Gem, Banknote (Investment options)

### 5. Bottom Navigation
**Current Issues:**
- Not added to all screens
- Active state styling needs improvement

**Needs:**
- Add to Dashboard, Portfolio, Funds, Reports, Account screens
- Proper active state with Primary/10 background
- Icon stroke: 2.5px for active, 2px for inactive

### 6. Typography - Letter Spacing
**Current Issues:**
- Missing letter spacing on labels
- Uppercase text needs tracking-widest

**Needs:**
- "AVAILABLE FUNDS": tracking-widest (2px)
- "YOUR PARTNER IN FINANCE": tracking-widest (2px)
- User names in badges: tracking-wide (0.5px)

### 7. Input Fields - Icons
**Current Issues:**
- Icons are simple circles
- Password field missing Eye icon on right

**Fixed:** ✅ Added icon placeholders with proper positioning

### 8. App Name "Phillip1"
**Current Issues:**
- Not styled correctly

**Fixed:** ✅ "Phillip" in Light (300), "1" in Bold Accent

### 9. Shadows and Effects
**Current Issues:**
- Some shadows missing
- Accent shadow not applied to accent buttons

**Needs:**
- Accent shadow on Add Funds button
- Proper shadow hierarchy (xs, sm, md, lg, xl)

### 10. Portfolio Screen - Search & Filter Bar
**Current Issues:**
- Missing search and filter buttons
- No download button

**Needs:**
- Search input with Search icon
- Filter button (40px square)
- Download button (40px square)

## Priority Fixes

### High Priority
1. ✅ Dashboard header with profile badge
2. ⚠️ Reports screen header and table
3. ⚠️ Bottom navigation on all screens
4. ⚠️ Financial card detailed stats

### Medium Priority
5. ⚠️ Better icon representations
6. ⚠️ Search & filter bar on Portfolio
7. ⚠️ Letter spacing on labels
8. ⚠️ Proper shadows on all elements

### Low Priority
9. ⚠️ Hover states (not applicable in static design)
10. ⚠️ Animations (not applicable in static design)

## Next Steps

1. Complete the Reports screen with proper header
2. Add bottom navigation to all screens
3. Improve Financial card with all stats
4. Add search/filter bar to Portfolio
5. Enhance icon representations
6. Test the plugin in Figma
7. Verify all measurements and spacing
8. Check color accuracy

## Notes

- All screens should be 390x844px (iPhone 14 Pro)
- Use exact colors from design system
- Follow Material Design spacing guidelines
- Ensure proper hierarchy and visual weight

