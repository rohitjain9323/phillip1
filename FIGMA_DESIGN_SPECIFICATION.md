# Phillip1 Trading App - Complete Figma Design Specification

## 📱 App Overview
**Phillip1** is a modern financial trading mobile application for PhillipCapital with a clean, professional interface following Material Design principles.

---

## 🎨 Design System

### Color Palette

#### Primary Colors
- **Primary (Deep Royal Blue)**: `#002395` / `HSL(226, 70%, 35%)`
- **Primary Foreground**: `#F8FAFC` / `HSL(210, 40%, 98%)`
- **Accent (Vibrant Orange)**: `#FF6B00` / `HSL(25, 100%, 50%)`
- **Accent Foreground**: `#FFFFFF`

#### Background Colors
- **Background (Light)**: `#F8FAFC` / `HSL(210, 40%, 98%)` - Off-white/Slate-50
- **Card**: `#FFFFFF` - Pure white
- **Secondary**: `#F1F5F9` / `HSL(210, 40%, 96.1%)`

#### Text Colors
- **Foreground (Main Text)**: `#0F172A` / `HSL(222, 47%, 11%)`
- **Muted Foreground**: `#64748B` / `HSL(215.4, 16.3%, 46.9%)`

#### Status Colors
- **Success/Gain**: `#16A34A` / `HSL(142, 71%, 45%)`
- **Danger/Loss**: `#DC2626` / `HSL(0, 84%, 60%)`
- **Destructive**: `#EF4444` / `HSL(0, 84.2%, 60.2%)`

#### Border & Input
- **Border**: `#E2E8F0` / `HSL(214.3, 31.8%, 91.4%)`
- **Input**: `#E2E8F0`

#### Dark Mode Colors
- **Background (Dark)**: `#0F172A` / `HSL(222, 47%, 11%)`
- **Card (Dark)**: `#0F172A`
- **Surface Dark**: `#1E293B` / `HSL(217.2, 32.6%, 17.5%)`

### Typography

#### Font Families
- **Heading Font**: `Outfit` - Used for headings, titles, and brand name
- **Body Font**: `Inter` - Used for body text, labels, and UI elements
- **Mono Font**: `System Mono` - Used for numbers, prices, and financial data

#### Font Sizes & Weights
- **Display Large**: 48px / 3rem - Font: Outfit Light (300)
- **Heading 1**: 32px / 2rem - Font: Outfit Bold (700)
- **Heading 2**: 24px / 1.5rem - Font: Outfit SemiBold (600)
- **Heading 3**: 20px / 1.25rem - Font: Outfit SemiBold (600)
- **Body Large**: 16px / 1rem - Font: Inter Regular (400)
- **Body**: 14px / 0.875rem - Font: Inter Regular (400)
- **Body Small**: 12px / 0.75rem - Font: Inter Medium (500)
- **Caption**: 10px / 0.625rem - Font: Inter Medium (500)
- **Button**: 14px / 0.875rem - Font: Inter Bold (700)

### Spacing System
- **xs**: 4px
- **sm**: 8px
- **md**: 12px
- **base**: 16px
- **lg**: 24px
- **xl**: 32px
- **2xl**: 48px
- **3xl**: 64px

### Border Radius
- **sm**: 8px (0.5rem - 4px)
- **md**: 12px (0.5rem - 2px)
- **lg**: 16px (0.5rem / 1rem)
- **xl**: 20px (0.5rem + 4px)
- **2xl**: 24px
- **3xl**: 32px
- **full**: 9999px (circular)

### Shadows
- **xs**: `0 1px 2px 0 rgb(0 0 0 / 0.05)`
- **sm**: `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`
- **md**: `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`
- **lg**: `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`
- **xl**: `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)`
- **Accent Shadow**: `0 10px 15px -3px rgba(255, 107, 0, 0.2)`

### Icons
- **Icon Library**: Lucide Icons
- **Default Size**: 20px (w-5 h-5)
- **Small**: 16px (w-4 h-4)
- **Large**: 24px (w-6 h-6)
- **Stroke Width**: 2px (default), 2.5px (active state)

---

## 📐 Component Library

### Buttons

#### Primary Button (Accent)
- **Background**: Accent Orange `#FF6B00`
- **Text**: White, Bold (700), 14px
- **Padding**: 14px vertical, 16px horizontal
- **Border Radius**: 12px (xl)
- **Shadow**: Accent shadow (0 10px 15px -3px rgba(255, 107, 0, 0.2))
- **Hover**: Scale 1.02, Background opacity 90%
- **Active**: Scale 0.98
- **Icon**: 16px, 8px gap from text

#### Secondary Button (Outline)
- **Background**: White
- **Border**: 1px solid Border color `#E2E8F0`
- **Text**: Foreground color, Bold (700), 14px
- **Padding**: 14px vertical, 16px horizontal
- **Border Radius**: 12px (xl)
- **Shadow**: xs shadow
- **Hover**: Background Secondary `#F1F5F9`

#### Ghost Button
- **Background**: Transparent
- **Border**: 1px solid Transparent
- **Text**: Primary or Muted Foreground
- **Padding**: 8px vertical, 12px horizontal
- **Hover**: Background opacity 5%

### Input Fields

#### Text Input
- **Background**: White
- **Border**: 1px solid Border `#E2E8F0`
- **Border Radius**: 12px (xl)
- **Padding**: 12px vertical, 16px horizontal
- **Text**: 14px, Foreground color
- **Placeholder**: Muted Foreground with 50% opacity
- **Shadow**: xs shadow
- **Focus State**:
  - Border: Primary color `#002395`
  - Ring: 2px Primary with 20% opacity
  - Outline: None

#### Input with Icon (Left)
- **Icon Position**: Absolute left, 12px from edge
- **Icon Color**: Muted Foreground
- **Icon Size**: 20px
- **Text Padding Left**: 40px (to accommodate icon)
- **Focus Icon Color**: Primary

#### Input with Icon (Right - Toggle)
- **Icon Position**: Absolute right, 12px from edge
- **Icon Color**: Muted Foreground
- **Icon Size**: 20px
- **Hover Icon Color**: Foreground
- **Text Padding Right**: 48px

### Cards

#### Standard Card
- **Background**: White `#FFFFFF`
- **Border**: 1px solid Border with 50% opacity
- **Border Radius**: 16px (xl) to 24px (2xl)
- **Shadow**: xs to md depending on elevation
- **Padding**: 16px to 24px

#### Financial Card (Dashboard)
- **Border Radius**: 24px (3xl)
- **Shadow**: xl shadow with slate-200/50
- **Border**: 1px solid Border/50
- **Sections**:
  - Header: 24px padding, border-bottom
  - Stats: 24px padding, Secondary/30 background
  - Actions: 16px padding, White background, 2-column grid

#### Summary Card (Portfolio)
- **Background**: Orange-50/50 `rgba(255, 237, 213, 0.5)`
- **Border**: 1px solid Orange-100
- **Border Radius**: 16px (2xl)
- **Padding**: 16px

#### Stock/Holding Card
- **Background**: White
- **Border**: 1px solid Border/60
- **Border Radius**: 12px (xl)
- **Shadow**: xs
- **Padding**: 16px
- **Active State**: Scale 0.99
- **Cursor**: Pointer

### Badges

#### Percentage Badge (Gain)
- **Background**: Green-100 `#DCFCE7`
- **Text**: Green-700 `#15803D`, Bold, 12px
- **Padding**: 4px 12px
- **Border Radius**: Full (9999px)
- **Icon**: ArrowUpRight, 12px

#### Percentage Badge (Loss)
- **Background**: Red-100 `#FEE2E2`
- **Text**: Red-700 `#B91C1C`, Bold, 12px
- **Padding**: 4px 12px
- **Border Radius**: Full (9999px)
- **Icon**: ArrowDownRight, 12px

#### Category Badge (EQ, NSE, etc.)
- **Background**: Secondary `#F1F5F9`
- **Text**: Muted Foreground, Medium (500), 10px
- **Padding**: 2px 6px
- **Border Radius**: 2px (sm)

### Navigation

#### Bottom Navigation Bar
- **Height**: 64px (16 units)
- **Background**: White (Light) / Slate-900 (Dark)
- **Border Top**: 1px solid Border
- **Position**: Fixed bottom
- **Safe Area**: Bottom padding for iOS notch
- **Items**: 5 items, evenly spaced
- **Item Width**: 64px

##### Navigation Item (Inactive)
- **Icon Size**: 20px
- **Icon Color**: Muted Foreground
- **Icon Stroke**: 2px
- **Label**: 10px, Medium (500), Muted Foreground
- **Spacing**: 4px between icon and label
- **Hover**: Background Primary/5, Scale 1.1

##### Navigation Item (Active)
- **Icon Size**: 20px
- **Icon Color**: Primary
- **Icon Stroke**: 2.5px
- **Icon Fill**: Current color
- **Background**: Primary/10, Border Radius Full
- **Padding**: 6px
- **Scale**: 1.1
- **Label**: 10px, Medium (500), Primary

#### Top Header
- **Background**: Primary `#002395`
- **Text**: Primary Foreground (White)
- **Border Radius**: 0 0 32px 32px (rounded bottom)
- **Shadow**: lg
- **Padding**: 24px horizontal, 24px bottom
- **Safe Area**: Top padding for iOS notch

##### Header (Standard)
- **Height**: Auto
- **Title**: 20px, SemiBold (600), Outfit

##### Header (Expanded - Dashboard)
- **Height**: 256px
- **Title**: 20px, SemiBold (600), Outfit
- **Balance Display**: 48px, Bold (700), Outfit
- **Label**: 14px, Medium (500), uppercase, tracking-widest

##### Header Profile Badge
- **Background**: White/10 with backdrop blur
- **Border**: 1px solid White/10
- **Border Radius**: Full (9999px)
- **Padding**: 6px 16px 6px 12px
- **Avatar**: 32px circle, Accent background
- **Avatar Text**: 12px, Bold, White
- **Name**: 12px, Medium, uppercase, tracking-wide

##### Header Back Button
- **Size**: 40px circle
- **Icon**: ChevronLeft, 24px
- **Background**: Transparent
- **Hover**: White/10
- **Border Radius**: Full

### Tabs

#### Tab Bar
- **Border Bottom**: 1px solid Border
- **Background**: Background/80 with backdrop blur (sticky)
- **Padding**: 16px horizontal
- **Gap**: 24px between tabs
- **Overflow**: Horizontal scroll, no scrollbar

#### Tab Item (Inactive)
- **Text**: 14px, Medium (500), Muted Foreground
- **Padding Bottom**: 12px
- **Hover**: Text Foreground

#### Tab Item (Active)
- **Text**: 14px, Bold (700), Primary
- **Padding Bottom**: 12px
- **Indicator**: 2px height, Primary color, full width, rounded top

### Drawers & Modals

#### Bottom Drawer
- **Background**: White
- **Border Radius**: 32px 32px 0 0 (rounded top)
- **Max Width**: 448px (sm)
- **Padding**: 32px top, 16px horizontal
- **Handle**: Optional drag handle at top

#### Alert Dialog
- **Background**: White
- **Border Radius**: 24px (3xl)
- **Max Width**: 90% mobile, 512px desktop
- **Padding**: 24px
- **Backdrop**: Black/50 with blur

### OTP Input

#### OTP Input Box
- **Size**: 48px width × 56px height
- **Background**: White
- **Border**: 1px solid Border
- **Border Radius**: 12px (xl)
- **Text**: 20px, Bold (700), center-aligned
- **Shadow**: xs
- **Focus**:
  - Border: Primary
  - Ring: 2px Primary/20
- **Gap**: 8px between boxes

### Switch Toggle

#### Switch (Off)
- **Background**: Border color
- **Width**: 44px
- **Height**: 24px
- **Border Radius**: Full
- **Thumb**: 20px circle, White, 2px offset

#### Switch (On)
- **Background**: Primary
- **Thumb**: 20px circle, White, right-aligned with 2px offset

---

## 📱 Screen Specifications

### 1. Login Screen

#### Layout
- **Container**: Full screen, centered content
- **Max Width**: 448px (sm)
- **Padding**: 24px
- **Background**: Background with gradient overlay

#### Background Decoration
- **Gradient**: Linear gradient from Primary/10 to transparent
- **Height**: 256px
- **Border Radius**: 0 0 48px 48px (bottom rounded)
- **Position**: Absolute top

#### Brand Section
- **Logo Text**: "PhillipCapital"
  - Font: Outfit, Bold (700), 32px
  - Color: Primary
  - Tracking: Tight
- **Tagline**: "Your Partner In Finance"
  - Font: Inter, Medium (500), 14px
  - Color: Muted Foreground
  - Transform: Uppercase
  - Tracking: Widest
- **App Name**: "Phillip**1**"
  - Font: Outfit, 48px
  - "Phillip": Light (300), Foreground
  - "1": Bold (700), Accent
- **Spacing**: 8px between elements, 48px margin top for app name

#### Login Form
- **Username Input**:
  - Icon: User (left), 20px, Muted Foreground
  - Placeholder: "Username"
  - Full width
- **Password Input**:
  - Icon: Lock (left), 20px, Muted Foreground
  - Icon: Eye/EyeOff (right), 20px, toggle visibility
  - Placeholder: "Password"
  - Type: Password (toggleable)
  - Full width
- **Spacing**: 16px between inputs

#### Forgot Links
- **Container**: Flex, space-between
- **Links**: 14px, Medium (500), Primary/80
- **Hover**: Primary color
- **Text**: "Forgot Email Id?" | "Forgot Password?"

#### Login Button
- **Type**: Primary (Accent)
- **Text**: "Login"
- **Icon**: ArrowRight (right), 16px
- **Full Width**: Yes
- **Margin Top**: 24px

#### Divider
- **Text**: "Or continue with"
- **Style**: Horizontal line with centered text
- **Text**: 12px, uppercase, Muted Foreground
- **Margin**: 16px vertical

#### Biometric Button
- **Background**: White
- **Border**: 1px solid Border
- **Icon**: Fingerprint, 24px, Primary
- **Text**: "Biometric Login", SemiBold (600)
- **Full Width**: Yes
- **Padding**: 12px vertical

#### Footer
- **New Account Link**: Primary, SemiBold (600), underline on hover
- **Version**: "app version : 1.1.7"
  - Font: Mono, 12px, Muted Foreground
  - Margin Top: 32px

### 2. Two-Factor Authentication (2FA) Screen

#### Layout
- **Same container as Login**
- **Animation**: Slide in from right

#### Header
- **Title**: "Two-Step Verification"
  - Font: Outfit, Bold (700), 20px
- **Description**: "Enter the 6-digit code sent to your registered mobile number and email."
  - Font: Inter, 14px, Muted Foreground
  - Text Align: Center

#### OTP Input
- **Count**: 6 boxes
- **Layout**: Flex, space-between
- **Gap**: 8px
- **Auto-focus**: Next box on input
- **Auto-backspace**: Previous box on delete

#### Verify Button
- **Type**: Primary (Accent)
- **Text**: "Verify & Proceed"
- **Full Width**: Yes
- **Margin Top**: 32px

#### Back Button
- **Type**: Ghost
- **Text**: "Back to Login"
- **Full Width**: Yes
- **Margin Top**: 16px

#### Resend Code
- **Text**: "Didn't receive the code? **Resend Code**"
- **Font**: 12px, Muted Foreground
- **Link**: Primary, Bold, underline on hover
- **Text Align**: Center

### 3. Biometric Authentication Drawer

#### Layout
- **Type**: Bottom Drawer
- **Border Radius**: 32px 32px 0 0
- **Max Width**: 448px
- **Padding**: 32px top, 16px horizontal

#### Icon
- **Container**: 80px circle, Primary/10, center-aligned
- **Icon**: Fingerprint, 48px, Primary
- **Animation**: Pulse

#### Title
- **Text**: "Biometric Authentication"
- **Font**: Outfit, 24px, center-aligned

#### Description
- **Text**: "Touch the fingerprint sensor to log in securely to your account."
- **Font**: Inter, 14px, Muted Foreground, center-aligned

#### Authenticate Button
- **Type**: Primary (Primary color, not Accent)
- **Text**: "Authenticate Now"
- **Full Width**: Yes
- **Margin Top**: 16px

#### Alternative Option
- **Type**: Ghost
- **Text**: "Use PIN instead"
- **Icon**: None
- **Color**: Primary
- **Full Width**: Yes
- **Margin Top**: 16px

### 4. Forgot Password Screen

#### Layout
- **Same container as Login**
- **Animation**: Slide in from right

#### Header
- **Title**: "Reset Password"
  - Font: Outfit, Bold (700), 20px
- **Description**: "Enter your registered email or username to receive a reset code."
  - Font: Inter, 14px, Muted Foreground
  - Text Align: Center

#### Input
- **Icon**: User (left), 20px
- **Placeholder**: "Email or Username"
- **Required**: Yes

#### Send Button
- **Type**: Primary (Accent)
- **Text**: "Send Reset Code"
- **Full Width**: Yes
- **Margin Top**: 24px

#### Back Button
- **Type**: Ghost
- **Text**: "Back to Login"
- **Full Width**: Yes
- **Margin Top**: 16px

### 5. Forgot Email Screen

#### Layout
- **Same container as Login**
- **Animation**: Slide in from right

#### Header
- **Title**: "Find Email ID"
  - Font: Outfit, Bold (700), 20px
- **Description**: "Enter your mobile number and PAN to recover your account."
  - Font: Inter, 14px, Muted Foreground
  - Text Align: Center

#### Inputs
- **Mobile Number**:
  - Type: Tel
  - Placeholder: "Mobile Number"
  - Full width
- **PAN Number**:
  - Type: Text
  - Placeholder: "PAN Number"
  - Transform: Uppercase
  - Full width
- **Spacing**: 16px between inputs

#### Recover Button
- **Type**: Primary (Accent)
- **Text**: "Recover Email ID"
- **Full Width**: Yes
- **Margin Top**: 24px

#### Back Button
- **Type**: Ghost
- **Text**: "Back to Login"
- **Full Width**: Yes
- **Margin Top**: 16px

### 6. Dashboard Screen

#### Layout
- **Background**: Background color
- **Padding Bottom**: 96px (for bottom nav)

#### Header
- **Type**: Expanded Header
- **Title**: "Dashboard"
- **Height**: 256px
- **Profile Badge**: Top right
- **Available Funds**: Center-aligned
  - Label: "AVAILABLE FUNDS"
  - Amount: "₹ 0" (48px, Bold)

#### Main Content
- **Padding**: 16px horizontal
- **Margin Top**: -32px (overlaps header)
- **Z-index**: 20 (above header)

#### Financial Card (Equities)
- **Title**: "Equities"
- **Badge**: Gain/Loss percentage with icon
- **Grid Layout**: 2 columns
- **Sections**:
  1. **Header Section** (24px padding, border-bottom):
     - Invested Value: ₹ 180,558
     - Current Value: ₹ 218,705
  2. **Stats Section** (24px padding, Secondary/30 bg):
     - Portfolio Gain/Loss: ₹ 38,147 (Green)
     - Day's Total Gain/Loss: ₹ -646 (-0.3%) (Red)
     - Gainers/Gain: 6 / ₹ 994
     - Losers/Loss: 9 / ₹ 1,640
  3. **Actions Section** (16px padding, 2-column grid):
     - "Add Funds" (Accent button)
     - "View Details" (Secondary button)

#### Investment Options Cards
- **Count**: 3 cards
- **Spacing**: 12px between cards
- **Margin Top**: 24px
- **Animation**: Stagger fade-in from left

##### Card Structure
- **Background**: White
- **Border**: 1px solid Border/50
- **Border Radius**: 16px (2xl)
- **Padding**: 16px
- **Shadow**: xs
- **Hover**: Shadow md
- **Layout**: Flex, space-between

##### Left Section
- **Icon Container**: 48px square, rounded-xl
  - Futures & Options: Blue-500/10 bg, Blue-500 icon
  - Commodities: Purple-500/10 bg, Purple-500 icon
  - Mutual Funds: Green-500/10 bg, Green-500 icon
- **Icon**: TrendingUp/Gem/Banknote, 20px
- **Title**: 16px, SemiBold (600), Outfit

##### Right Section
- **Link**: "Activate Now"
  - Font: 12px, SemiBold (600), Primary
  - Decoration: Underline, 4px offset
- **Icon**: ChevronRight, 20px, Muted Foreground

#### Bottom Navigation
- **Active**: Home

### 7. Portfolio Screen

#### Layout
- **Background**: Background color
- **Padding Bottom**: 96px (for bottom nav)

#### Header
- **Type**: Standard Header
- **Title**: "Portfolio"
- **Back Button**: Yes
- **Profile Badge**: Yes

#### Tab Bar
- **Tabs**: Summary, Equities, Bonds, Futures
- **Active**: Equities
- **Sticky**: Yes, top position
- **Background**: Background/80 with backdrop blur

#### Search & Filter Bar
- **Padding**: 16px horizontal
- **Margin Top**: 24px
- **Layout**: Flex, gap 12px

##### Search Input
- **Icon**: Search (left), 16px
- **Placeholder**: "Search portfolio..."
- **Flex**: Grow
- **Height**: 40px

##### Filter Button
- **Size**: 40px square
- **Icon**: Filter, 16px
- **Background**: White
- **Border**: 1px solid Border

##### Download Button
- **Size**: 40px square
- **Icon**: Download, 16px
- **Background**: White
- **Border**: 1px solid Border

#### Summary Card
- **Background**: Orange-50/50
- **Border**: 1px solid Orange-100
- **Border Radius**: 16px (2xl)
- **Padding**: 16px
- **Margin Top**: 24px

##### Top Row
- **Layout**: Flex, space-between
- **Current Value**:
  - Label: "CURRENT VALUE" (10px, uppercase, tracking-wider)
  - Amount: "₹ 218,705" (20px, Bold, Outfit)
- **Unrealised P&L**:
  - Label: "UNREALISED P&L" (10px, uppercase, tracking-wider)
  - Amount: "₹ 38,147" (18px, Bold, Outfit, Green)
  - Badge: "+21.1%" (Green-100 bg, Green-700 text)

##### Bottom Row (Border Top)
- **Layout**: Flex, space-between
- **Padding Top**: 12px
- **Border Top**: 1px solid Orange-200/30
- **Invested**:
  - Label: "Invested" (12px, Muted)
  - Amount: "₹ 180,558" (14px, SemiBold)
- **Day's Gain**:
  - Label: "Day's Gain" (12px, Muted)
  - Amount: "₹ -646 (-0.3%)" (14px, SemiBold, Red)

#### Holdings List
- **Spacing**: 16px between cards
- **Margin Top**: 24px
- **Animation**: Stagger fade-in from bottom

##### Stock Card
- **Background**: White
- **Border**: 1px solid Border/60
- **Border Radius**: 12px (xl)
- **Padding**: 16px
- **Shadow**: xs
- **Active**: Scale 0.99

###### Top Section
- **Layout**: Flex, space-between
- **Left**:
  - Symbol: "BEL" (16px, Bold)
  - Badge: "EQ" (10px, Medium, Secondary bg, 6px padding, 2px radius)
- **Right**:
  - LTP: "413.65" (18px, Medium, Mono)
  - Gain %: "+27.7%" (12px, Medium, Green)

###### Bottom Section (Grid)
- **Layout**: 2 columns, 2 rows
- **Font**: 12px
- **Gap**: 8px vertical
- **Row 1**:
  - Left: "Qty: **34** | Avg: **323.94**"
  - Right: "Val: **₹ 14,064**" (right-aligned)
- **Row 2**:
  - Left: "Inv: **₹ 11,014**"
  - Right: "+₹ 3,050" (Green, SemiBold, right-aligned)

#### Bottom Navigation
- **Active**: Portfolio

### 8. Funds Screen

#### Layout
- **Background**: Background color
- **Padding**: 16px horizontal, 32px vertical
- **Padding Bottom**: 96px (for bottom nav)

#### Header
- **Type**: Standard Header
- **Title**: "Funds"
- **Back Button**: Yes
- **Profile Badge**: Yes

#### Balance Card
- **Background**: White
- **Border**: 1px solid Border
- **Border Radius**: 24px (3xl)
- **Padding**: 32px
- **Shadow**: sm
- **Text Align**: Center

##### Content
- **Label**: "Available Balance"
  - Font: 14px, Medium (500), Muted Foreground
  - Transform: Uppercase
  - Tracking: Widest
- **Amount**: "₹ 0.00"
  - Font: 48px, Bold (700), Outfit, Primary

#### Action Buttons
- **Layout**: 2-column grid
- **Gap**: 16px
- **Margin Top**: 32px

##### Add Funds Button
- **Background**: Accent
- **Text**: White, Bold (700)
- **Padding**: 16px vertical
- **Border Radius**: 16px (2xl)
- **Shadow**: lg with Accent/20
- **Layout**: Flex column, center-aligned, gap 8px
- **Icon Container**: 40px circle, White/20 bg
- **Icon**: ArrowDown, 24px
- **Text**: "Add Funds"
- **Hover**: Background Accent/90, Icon scale 1.1
- **Active**: Scale 0.98

##### Withdraw Button
- **Background**: White
- **Border**: 1px solid Border
- **Text**: Foreground, Bold (700)
- **Padding**: 16px vertical
- **Border Radius**: 16px (2xl)
- **Shadow**: sm
- **Layout**: Flex column, center-aligned, gap 8px
- **Icon Container**: 40px circle, Secondary bg
- **Icon**: ArrowUp, 24px, Foreground
- **Text**: "Withdraw"
- **Hover**: Background Secondary, Icon scale 1.1
- **Active**: Scale 0.98

#### Recent Transactions Section
- **Margin Top**: 32px
- **Padding Top**: 16px

##### Header
- **Text**: "Recent Transactions"
- **Font**: 18px, SemiBold (600), Outfit
- **Padding**: 0 8px

##### Empty State
- **Background**: White
- **Border**: 1px solid Border
- **Border Radius**: 12px (xl)
- **Padding**: 32px
- **Text**: "No recent transactions found"
  - Font: 14px, Muted Foreground
  - Text Align: Center

#### Bottom Navigation
- **Active**: Funds


