# 🚀 Quick Start Guide - Phillip1 Figma Plugin

Get your Phillip1 Trading App design up and running in Figma in just 5 minutes!

## ⚡ Super Quick Setup (3 Steps)

### 1️⃣ Install Fonts (2 minutes)

Download and install these fonts on your computer:

- **Inter**: https://fonts.google.com/specimen/Inter
  - Download → Install all weights
  
- **Outfit**: https://fonts.google.com/specimen/Outfit
  - Download → Install all weights

**After installing fonts, restart Figma!**

### 2️⃣ Build the Plugin (1 minute)

Open Terminal/Command Prompt and run:

```bash
cd figma-plugin
npm install
npm run build
```

Wait for it to finish (you'll see "code.js" created).

### 3️⃣ Load in Figma (1 minute)

1. Open **Figma Desktop App**
2. Click **Menu** (top-left) → **Plugins** → **Development** → **Import plugin from manifest...**
3. Find and select `figma-plugin/manifest.json`
4. Click **Open**

Done! ✅

## 🎯 Using the Plugin

### Generate Your Design

1. In Figma, go to **Menu** → **Plugins** → **Development** → **Phillip1 Trading App Generator**
2. Click **"Generate Design"** button
3. Wait 5-10 seconds
4. Boom! 💥 Your complete design system and all screens are ready!

### What You'll Get

- **🎨 Design System** - All colors, typography, and shadows
- **🧩 Components** - Buttons, inputs, cards ready to use
- **📱 7 Screens** - Login, 2FA, Dashboard, Portfolio, Funds, Reports, Account

## 🎨 What to Do Next

### Option 1: Use as Reference
- Keep the generated screens as a reference
- Build your own components based on them

### Option 2: Convert to Components
1. Select any element (e.g., a button)
2. Right-click → **Create Component**
3. Now you can reuse it across your design

### Option 3: Customize
- Change colors in the design system
- Modify text and content
- Adjust layouts to your needs

## 💡 Pro Tips

### Tip 1: Run Multiple Times
You can run the plugin multiple times to generate fresh copies. Each run creates a new page.

### Tip 2: Create Variants
After converting to components, create variants for different states:
- Button: Default, Hover, Pressed, Disabled
- Input: Empty, Filled, Error, Focused

### Tip 3: Use Auto Layout
The generated frames don't use Auto Layout by default. You can:
1. Select a frame
2. Press **Shift + A** to add Auto Layout
3. Adjust spacing and padding

### Tip 4: Export Assets
To export icons or images:
1. Select the element
2. Click **Export** in the right panel
3. Choose format (PNG, SVG, etc.)

## 🔄 Making Changes to the Plugin

Want to customize the plugin itself?

1. Edit `code.ts` (the main plugin file)
2. Run `npm run build` to compile
3. In Figma: **Plugins** → **Development** → **Reload plugin**
4. Run the plugin again to see your changes

## ❓ Common Issues

### "Font not found" error
- **Fix**: Install Inter and Outfit fonts, then **restart Figma**

### Plugin doesn't appear in menu
- **Fix**: Make sure you ran `npm run build` first
- **Fix**: Import the `manifest.json` file, not the folder

### Screens look different
- **Fix**: Make sure you have all font weights installed (Light, Regular, Medium, SemiBold, Bold)

### Plugin is slow
- **Normal**: Generating 7 screens with all elements takes 5-10 seconds
- **Tip**: Uncheck options you don't need to speed it up

## 🎓 Learning Resources

### Figma Basics
- Figma Tutorial: https://help.figma.com/hc/en-us/categories/360002051613
- Components: https://help.figma.com/hc/en-us/articles/360038662654
- Auto Layout: https://help.figma.com/hc/en-us/articles/360040451373

### Plugin Development
- Figma Plugin API: https://www.figma.com/plugin-docs/
- Plugin Samples: https://github.com/figma/plugin-samples

## 🎉 You're Ready!

You now have a complete, production-ready design system for the Phillip1 Trading App!

**Next Steps:**
1. Explore the generated screens
2. Customize colors and content
3. Create components for reusability
4. Start designing new features

Happy designing! 🎨✨

