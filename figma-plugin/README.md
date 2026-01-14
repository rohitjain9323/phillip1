# Phillip1 Trading App - Figma Plugin Generator

This Figma plugin automatically generates the complete Phillip1 Trading App design system, components, and all screens based on the design specification.

## 🎨 What This Plugin Generates

### Design System
- **Color Styles**: Primary, Accent, Success, Danger, and all UI colors
- **Typography Styles**: Display, Headings, Body, Captions using Outfit & Inter fonts
- **Effect Styles**: Shadow system (xs, sm, md, lg, xl)

### Components
- **Buttons**: Primary, Secondary, Ghost variants
- **Input Fields**: Text inputs with icons and placeholders
- **Cards**: Standard cards with headers and content
- **Badges**: Status badges with different colors
- **Navigation**: Bottom navigation bar

### Screens (390x844px - Mobile)
1. **Login Screen** - Username/password with biometric option
2. **2FA Screen** - OTP verification with 6-digit input
3. **Dashboard Screen** - Financial overview with equities card
4. **Portfolio Screen** - Holdings list with summary
5. **Funds Screen** - Balance display with add/withdraw options
6. **Reports Screen** - Trading reports with table view
7. **Account Screen** - User profile and settings menu

## 📋 Prerequisites

Before using this plugin, ensure you have:

1. **Figma Desktop App** (recommended) or Figma in browser
2. **Required Fonts Installed**:
   - **Inter** (Regular, Medium, SemiBold, Bold)
   - **Outfit** (Light, Regular, SemiBold, Bold)
   
   Download fonts:
   - Inter: https://fonts.google.com/specimen/Inter
   - Outfit: https://fonts.google.com/specimen/Outfit

## 🚀 Installation

### Step 1: Build the Plugin

```bash
cd figma-plugin
npm install
npm run build
```

This will compile `code.ts` to `code.js`.

### Step 2: Load Plugin in Figma

1. Open **Figma Desktop App**
2. Go to **Menu** → **Plugins** → **Development** → **Import plugin from manifest...**
3. Navigate to the `figma-plugin` folder
4. Select the `manifest.json` file
5. Click **Open**

The plugin is now installed!

## 🎯 How to Use

### Running the Plugin

1. Open Figma and create a **new file** or open an existing one
2. Go to **Menu** → **Plugins** → **Development** → **Phillip1 Trading App Generator**
3. The plugin UI will appear

### Plugin Options

The plugin UI allows you to choose what to generate:

- ✅ **Design System**
  - Color Styles
  - Typography Styles
  - Effect Styles (Shadows)

- ✅ **Components**
  - All reusable components (Buttons, Inputs, Cards, etc.)

- ✅ **Screens**
  - All 7 screens (Login, 2FA, Dashboard, Portfolio, Funds, Reports, Account)

### Generate Design

1. **Select options** you want to generate (all are checked by default)
2. Click **"Generate Design"** button
3. Wait for the plugin to create everything (takes 5-10 seconds)
4. You'll see a success message when complete

### What Gets Created

The plugin creates a new page called **"Phillip1 Trading App"** with:

- **🎨 Design System** frame (400px wide) - Color palette and styles
- **🧩 Components** frame (400px wide) - Reusable UI components
- **📱 Screens** frame (5000px wide) - All 7 mobile screens side-by-side

## 📐 Design Specifications

### Screen Size
- **Width**: 390px
- **Height**: 844px
- **Device**: iPhone 14 Pro / Standard Mobile

### Color Palette
- **Primary**: #002395 (PhillipCapital Blue)
- **Accent**: #FF6B00 (Orange)
- **Success**: #16A34A (Green)
- **Danger**: #DC2626 (Red)
- **Background**: #F8FAFC (Light Gray)

### Typography
- **Display**: Outfit Light 48px
- **Headings**: Outfit SemiBold/Bold 20-32px
- **Body**: Inter Regular 14-16px
- **Captions**: Inter Medium 10-12px

### Spacing System
- **Container Padding**: 16-24px
- **Card Padding**: 16-32px
- **Element Spacing**: 8-16px
- **Section Spacing**: 24-32px

## 🔧 Development

### File Structure
```
figma-plugin/
├── manifest.json       # Plugin configuration
├── code.ts            # Main plugin logic (TypeScript)
├── code.js            # Compiled JavaScript (generated)
├── ui.html            # Plugin UI interface
├── package.json       # Dependencies
├── tsconfig.json      # TypeScript config
└── README.md          # This file
```

### Making Changes

1. Edit `code.ts` for plugin logic changes
2. Edit `ui.html` for UI changes
3. Run `npm run build` to compile
4. Reload plugin in Figma: **Plugins** → **Development** → **Reload plugin**

### Watch Mode

For continuous development:
```bash
npm run watch
```

This will automatically recompile when you save changes to `code.ts`.

## 🎨 Customization

### Changing Colors

Edit the `COLORS` object in `code.ts`:

```typescript
const COLORS = {
  primary: { r: 0, g: 35/255, b: 149/255 }, // #002395
  accent: { r: 1, g: 107/255, b: 0 },       // #FF6B00
  // ... modify as needed
};
```

### Changing Typography

Edit the `TEXT_STYLES` object in `code.ts`:

```typescript
const TEXT_STYLES = {
  heading1: { fontSize: 32, fontWeight: 700, lineHeight: 40, fontFamily: 'Outfit' },
  // ... modify as needed
};
```

### Adding New Screens

Create a new async function following the pattern:

```typescript
async function createMyNewScreen(): Promise<FrameNode> {
  const screen = createFrame('My Screen', 390, 844);
  // ... add your elements
  return screen;
}
```

Then add it to the `createScreens()` function.

## ⚠️ Troubleshooting

### Fonts Not Loading
- **Issue**: Plugin shows font errors
- **Solution**: Install Inter and Outfit fonts on your system, then restart Figma

### Plugin Not Appearing
- **Issue**: Plugin doesn't show in menu
- **Solution**: Make sure you ran `npm run build` and imported the correct `manifest.json`

### TypeScript Errors in IDE
- **Issue**: IDE shows TypeScript errors
- **Solution**: These are expected - the Figma API types are only available when running in Figma

### Plugin Crashes
- **Issue**: Plugin stops working
- **Solution**: Check Figma console (Plugins → Development → Open Console) for errors

## 📝 Notes

- The plugin creates everything from scratch each time you run it
- Generated elements are not components by default - you can convert them to components manually
- All measurements are in pixels
- Colors use RGB values (0-1 range)

## 🤝 Support

For issues or questions:
1. Check the Figma console for error messages
2. Verify all fonts are installed
3. Make sure you're using the latest version of Figma

## 📄 License

MIT License - Feel free to modify and use as needed!

