# 📱 Phillip1 Trading App

A modern, full-stack trading application built with React, Express, and TypeScript. Features a complete design system with Figma plugin for rapid prototyping.

![Build Status](https://github.com/rohitjain9323/phillip1/workflows/Deploy%20Phillip1%20Trading%20App/badge.svg)

## 🌟 Features

### Trading Platform
- 📊 **Dashboard** - Real-time portfolio overview with financial cards
- 💼 **Portfolio Management** - Track equities, bonds, and futures
- 💰 **Funds Management** - Add/withdraw funds with transaction history
- 📈 **Reports** - Detailed trading reports and analytics
- 👤 **Account Management** - User profile and settings

### Security
- 🔐 **Secure Login** - Email/password authentication
- 🔑 **2FA Support** - Two-factor authentication with OTP
- 🔒 **Session Management** - Secure session handling

### Design System
- 🎨 **Complete Design System** - Colors, typography, shadows
- 🧩 **Reusable Components** - Buttons, inputs, cards, navigation
- 📐 **Figma Plugin** - Generate complete design system in Figma
- 📱 **Responsive Design** - Mobile-first approach (390x844px)

## 🚀 Quick Start

### Prerequisites
- Node.js 20.x or higher
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/rohitjain9323/phillip1.git
cd phillip1

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000`

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📦 Project Structure

```
phillip1/
├── client/              # React frontend
│   ├── src/
│   └── public/
├── server/              # Express backend
│   ├── index.ts
│   ├── routes.ts
│   └── storage.ts
├── figma-plugin/        # Figma design system plugin
│   ├── code.ts
│   ├── ui.html
│   └── manifest.json
├── shared/              # Shared types and schemas
└── dist/                # Production build
```

## 🎨 Figma Plugin

Generate the complete design system in Figma:

```bash
cd figma-plugin
npm install
npm run build
```

Then in Figma:
1. Plugins → Development → Import plugin from manifest
2. Select `figma-plugin/manifest.json`
3. Run "Phillip1 Trading App Generator"

See [figma-plugin/README.md](figma-plugin/README.md) for details.

## 🌐 Deployment

### Deploy to Render (Recommended)

1. Go to [Render.com](https://render.com)
2. Connect your GitHub account
3. Create new Web Service
4. Select `rohitjain9323/phillip1`
5. Configure:
   - Build: `npm install && npm run build`
   - Start: `npm start`
6. Deploy!

See [DEPLOYMENT.md](DEPLOYMENT.md) for other platforms.

## 🛠️ Tech Stack

### Frontend
- React 19
- TypeScript
- Tailwind CSS
- Wouter (routing)
- TanStack Query
- Framer Motion

### Backend
- Node.js
- Express
- TypeScript
- PostgreSQL (optional)
- Passport.js

### Development
- Vite
- ESBuild
- TSX

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run check        # Type check
npm run db:push      # Push database schema
```

## 🔧 Environment Variables

Create a `.env` file:

```env
NODE_ENV=development
PORT=3000
DATABASE_URL=postgresql://...
SESSION_SECRET=your-secret-key
```

## 📱 Screens

1. **Login** - Secure authentication with biometric option
2. **2FA** - Two-factor authentication
3. **Dashboard** - Portfolio overview with financial cards
4. **Portfolio** - Holdings and performance tracking
5. **Funds** - Balance management and transactions
6. **Reports** - Trading analytics and reports
7. **Account** - User profile and settings

## 🎯 Design Specifications

- **Screen Size**: 390x844px (iPhone 14 Pro)
- **Design System**: Material Design inspired
- **Color Palette**: Primary blue, Accent orange
- **Typography**: Outfit + Inter fonts
- **Components**: Fully reusable component library

## 📄 Documentation

- [Deployment Guide](DEPLOYMENT.md)
- [Figma Plugin Guide](figma-plugin/README.md)
- [Design Specification](FIGMA_DESIGN_SPECIFICATION.md)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues and questions:
- Open an issue on GitHub
- Check existing documentation

## 📜 License

MIT License - see LICENSE file for details

---

**Built with ❤️ for modern trading**

