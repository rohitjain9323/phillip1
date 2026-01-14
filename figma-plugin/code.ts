// Phillip1 Trading App - Figma Plugin Generator
// This plugin generates the complete design system and all screens

figma.showUI(__html__, { width: 440, height: 680 });

// Design System Constants
const COLORS = {
  // Primary Colors
  primary: { r: 0, g: 35/255, b: 149/255 }, // #002395
  primaryForeground: { r: 248/255, g: 250/255, b: 252/255 }, // #F8FAFC
  accent: { r: 1, g: 107/255, b: 0 }, // #FF6B00
  accentForeground: { r: 1, g: 1, b: 1 }, // #FFFFFF
  
  // Background Colors
  background: { r: 248/255, g: 250/255, b: 252/255 }, // #F8FAFC
  card: { r: 1, g: 1, b: 1 }, // #FFFFFF
  secondary: { r: 241/255, g: 245/255, b: 249/255 }, // #F1F5F9
  
  // Text Colors
  foreground: { r: 15/255, g: 23/255, b: 42/255 }, // #0F172A
  mutedForeground: { r: 100/255, g: 116/255, b: 139/255 }, // #64748B
  
  // Status Colors
  success: { r: 22/255, g: 163/255, b: 74/255 }, // #16A34A
  danger: { r: 220/255, g: 38/255, b: 38/255 }, // #DC2626
  
  // Border
  border: { r: 226/255, g: 232/255, b: 240/255 }, // #E2E8F0
  
  // Badge Colors
  greenBg: { r: 220/255, g: 252/255, b: 231/255 }, // #DCFCE7
  greenText: { r: 21/255, g: 128/255, b: 61/255 }, // #15803D
  redBg: { r: 254/255, g: 226/255, b: 226/255 }, // #FEE2E2
  redText: { r: 185/255, g: 28/255, b: 28/255 }, // #B91C1C
  orangeBg: { r: 255/255, g: 237/255, b: 213/255 }, // #FFEDD5
  orangeBorder: { r: 254/255, g: 215/255, b: 170/255 }, // #FED7AA
};

const TEXT_STYLES = {
  displayLarge: { fontSize: 48, fontWeight: 300, lineHeight: 56, fontFamily: 'Outfit' },
  heading1: { fontSize: 32, fontWeight: 700, lineHeight: 40, fontFamily: 'Outfit' },
  heading2: { fontSize: 24, fontWeight: 600, lineHeight: 32, fontFamily: 'Outfit' },
  heading3: { fontSize: 20, fontWeight: 600, lineHeight: 28, fontFamily: 'Outfit' },
  bodyLarge: { fontSize: 16, fontWeight: 400, lineHeight: 24, fontFamily: 'Inter' },
  body: { fontSize: 14, fontWeight: 400, lineHeight: 20, fontFamily: 'Inter' },
  bodySmall: { fontSize: 12, fontWeight: 500, lineHeight: 16, fontFamily: 'Inter' },
  caption: { fontSize: 10, fontWeight: 500, lineHeight: 14, fontFamily: 'Inter' },
  button: { fontSize: 14, fontWeight: 700, lineHeight: 20, fontFamily: 'Inter' },
};

const SHADOWS = {
  xs: { type: 'DROP_SHADOW' as const, color: { r: 0, g: 0, b: 0, a: 0.05 }, offset: { x: 0, y: 1 }, radius: 2, spread: 0, visible: true, blendMode: 'NORMAL' as const },
  sm: { type: 'DROP_SHADOW' as const, color: { r: 0, g: 0, b: 0, a: 0.1 }, offset: { x: 0, y: 1 }, radius: 3, spread: 0, visible: true, blendMode: 'NORMAL' as const },
  md: { type: 'DROP_SHADOW' as const, color: { r: 0, g: 0, b: 0, a: 0.1 }, offset: { x: 0, y: 4 }, radius: 6, spread: -1, visible: true, blendMode: 'NORMAL' as const },
  lg: { type: 'DROP_SHADOW' as const, color: { r: 0, g: 0, b: 0, a: 0.1 }, offset: { x: 0, y: 10 }, radius: 15, spread: -3, visible: true, blendMode: 'NORMAL' as const },
  xl: { type: 'DROP_SHADOW' as const, color: { r: 0, g: 0, b: 0, a: 0.1 }, offset: { x: 0, y: 20 }, radius: 25, spread: -5, visible: true, blendMode: 'NORMAL' as const },
  accentShadow: { type: 'DROP_SHADOW' as const, color: { r: 1, g: 107/255, b: 0, a: 0.2 }, offset: { x: 0, y: 10 }, radius: 15, spread: -3, visible: true, blendMode: 'NORMAL' as const },
};

// Utility Functions
function createFrame(name: string, width: number, height: number, x = 0, y = 0): FrameNode {
  const frame = figma.createFrame();
  frame.name = name;
  frame.resize(width, height);
  frame.x = x;
  frame.y = y;
  frame.fills = [{ type: 'SOLID', color: COLORS.background }];
  return frame;
}

async function createText(content: string, style: any, color: RGB): Promise<TextNode> {
  const text = figma.createText();

  // Load the font first
  const fontStyle = style.fontWeight === 700 ? 'Bold' :
                    style.fontWeight === 600 ? 'SemiBold' :
                    style.fontWeight === 500 ? 'Medium' :
                    style.fontWeight === 300 ? 'Light' : 'Regular';

  await figma.loadFontAsync({ family: style.fontFamily, style: fontStyle });

  text.characters = content;
  text.fontSize = style.fontSize;
  text.fontName = { family: style.fontFamily, style: fontStyle };
  text.lineHeight = { value: style.lineHeight, unit: 'PIXELS' };
  text.fills = [{ type: 'SOLID', color }];
  return text;
}

function createRectangle(width: number, height: number, color: RGB, radius = 0): RectangleNode {
  const rect = figma.createRectangle();
  rect.resize(width, height);
  rect.fills = [{ type: 'SOLID', color }];
  rect.cornerRadius = radius;
  return rect;
}

function createIcon(name: string, size: number, color: RGB): FrameNode {
  // Create a simple icon placeholder (circle with text)
  const icon = figma.createFrame();
  icon.name = `Icon-${name}`;
  icon.resize(size, size);
  icon.fills = [];

  // Create circle background
  const circle = figma.createEllipse();
  circle.resize(size, size);
  circle.fills = [{ type: 'SOLID', color, opacity: 0.1 }];
  circle.strokes = [{ type: 'SOLID', color }];
  circle.strokeWeight = 1.5;
  icon.appendChild(circle);

  return icon;
}

// Message Handler
figma.ui.onmessage = async (msg) => {
  if (msg.type === 'generate') {
    try {
      await generateDesign(msg.options);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      figma.ui.postMessage({ type: 'progress', message: `Error: ${errorMessage}` });
    }
  }
};

async function generateDesign(options: any) {
  // Load fonts
  figma.ui.postMessage({ type: 'progress', message: 'Loading fonts...' });
  await loadFonts();

  // Create main page
  const page = figma.createPage();
  page.name = 'Phillip1 Trading App';
  await figma.setCurrentPageAsync(page);

  let xOffset = 0;

  // Generate Design System
  if (options.colors || options.typography || options.effects) {
    figma.ui.postMessage({ type: 'progress', message: 'Creating design system...' });
    const designSystemFrame = await createDesignSystem(options);
    designSystemFrame.x = xOffset;
    page.appendChild(designSystemFrame);
    xOffset += designSystemFrame.width + 100;
  }

  // Generate Components
  if (options.components) {
    figma.ui.postMessage({ type: 'progress', message: 'Creating components...' });
    const componentsFrame = await createComponents();
    componentsFrame.x = xOffset;
    page.appendChild(componentsFrame);
    xOffset += componentsFrame.width + 100;
  }

  // Generate Screens
  if (options.screens) {
    figma.ui.postMessage({ type: 'progress', message: 'Creating screens...' });
    const screensFrame = await createScreens();
    screensFrame.x = xOffset;
    page.appendChild(screensFrame);
  }

  // Zoom to fit
  figma.viewport.scrollAndZoomIntoView(page.children);

  figma.ui.postMessage({ type: 'complete', message: 'Design generated successfully!' });
}

async function loadFonts() {
  const fonts = [
    { family: 'Inter', style: 'Regular' },
    { family: 'Inter', style: 'Medium' },
    { family: 'Inter', style: 'SemiBold' },
    { family: 'Inter', style: 'Bold' },
    { family: 'Outfit', style: 'Light' },
    { family: 'Outfit', style: 'Regular' },
    { family: 'Outfit', style: 'SemiBold' },
    { family: 'Outfit', style: 'Bold' },
  ];

  for (const font of fonts) {
    try {
      await figma.loadFontAsync(font);
    } catch (e) {
      console.warn(`Could not load font ${font.family} ${font.style}`);
    }
  }
}

async function createDesignSystem(options: any): Promise<FrameNode> {
  const frame = createFrame('🎨 Design System', 400, 1200);
  let yOffset = 20;

  // Title
  const title = await createText('Design System', TEXT_STYLES.heading1, COLORS.primary);
  title.x = 20;
  title.y = yOffset;
  frame.appendChild(title);
  yOffset += 60;

  // Color Styles
  if (options.colors) {
    const colorsTitle = await createText('Colors', TEXT_STYLES.heading3, COLORS.foreground);
    colorsTitle.x = 20;
    colorsTitle.y = yOffset;
    frame.appendChild(colorsTitle);
    yOffset += 40;

    const colorPairs = [
      { name: 'Primary', color: COLORS.primary, hex: '#002395' },
      { name: 'Accent', color: COLORS.accent, hex: '#FF6B00' },
      { name: 'Success', color: COLORS.success, hex: '#16A34A' },
      { name: 'Danger', color: COLORS.danger, hex: '#DC2626' },
      { name: 'Foreground', color: COLORS.foreground, hex: '#0F172A' },
      { name: 'Muted', color: COLORS.mutedForeground, hex: '#64748B' },
      { name: 'Border', color: COLORS.border, hex: '#E2E8F0' },
    ];

    for (const { name, color, hex } of colorPairs) {
      const colorRect = createRectangle(80, 80, color, 12);
      colorRect.x = 20;
      colorRect.y = yOffset;
      frame.appendChild(colorRect);

      const colorName = await createText(name, TEXT_STYLES.bodySmall, COLORS.foreground);
      colorName.x = 110;
      colorName.y = yOffset + 10;
      frame.appendChild(colorName);

      const colorHex = await createText(hex, TEXT_STYLES.caption, COLORS.mutedForeground);
      colorHex.x = 110;
      colorHex.y = yOffset + 30;
      frame.appendChild(colorHex);

      yOffset += 100;
    }
  }

  return frame;
}

async function createComponents(): Promise<FrameNode> {
  const frame = createFrame('🧩 Components', 400, 2000);
  let yOffset = 20;

  // Title
  const title = await createText('Components', TEXT_STYLES.heading1, COLORS.primary);
  title.x = 20;
  title.y = yOffset;
  frame.appendChild(title);
  yOffset += 60;

  // Primary Button
  const primaryBtn = await createButton('Login', 'primary');
  primaryBtn.x = 20;
  primaryBtn.y = yOffset;
  frame.appendChild(primaryBtn);
  yOffset += 80;

  // Secondary Button
  const secondaryBtn = await createButton('View Details', 'secondary');
  secondaryBtn.x = 20;
  secondaryBtn.y = yOffset;
  frame.appendChild(secondaryBtn);
  yOffset += 80;

  // Input Field
  const input = await createInput('Username');
  input.x = 20;
  input.y = yOffset;
  frame.appendChild(input);
  yOffset += 80;

  // Card
  const card = await createCard();
  card.x = 20;
  card.y = yOffset;
  frame.appendChild(card);

  return frame;
}

async function createButton(text: string, variant: 'primary' | 'secondary'): Promise<FrameNode> {
  const button = figma.createFrame();
  button.name = `Button/${variant}`;
  button.resize(360, 48);
  button.cornerRadius = 12;

  if (variant === 'primary') {
    button.fills = [{ type: 'SOLID', color: COLORS.accent }];
    button.effects = [SHADOWS.accentShadow];
  } else {
    button.fills = [{ type: 'SOLID', color: COLORS.card }];
    button.strokes = [{ type: 'SOLID', color: COLORS.border }];
    button.strokeWeight = 1;
    button.effects = [SHADOWS.xs];
  }

  const buttonText = await createText(text, TEXT_STYLES.button, variant === 'primary' ? COLORS.accentForeground : COLORS.foreground);
  buttonText.x = (button.width - buttonText.width) / 2;
  buttonText.y = (button.height - buttonText.height) / 2;
  button.appendChild(buttonText);

  return button;
}

async function createInput(placeholder: string, iconName?: string): Promise<FrameNode> {
  const input = figma.createFrame();
  input.name = `Input/${placeholder}`;
  input.resize(360, 48);
  input.cornerRadius = 12;
  input.fills = [{ type: 'SOLID', color: COLORS.card }];
  input.strokes = [{ type: 'SOLID', color: COLORS.border }];
  input.strokeWeight = 1;
  input.effects = [SHADOWS.xs];

  let leftOffset = 16;

  // Add left icon if specified
  if (iconName) {
    const icon = createIcon(iconName, 20, COLORS.mutedForeground);
    icon.x = 16;
    icon.y = (input.height - 20) / 2;
    input.appendChild(icon);
    leftOffset = 48;
  }

  const placeholderText = await createText(placeholder, TEXT_STYLES.body, COLORS.mutedForeground);
  placeholderText.opacity = 0.5;
  placeholderText.x = leftOffset;
  placeholderText.y = (input.height - placeholderText.height) / 2;
  input.appendChild(placeholderText);

  return input;
}

async function createCard(): Promise<FrameNode> {
  const card = figma.createFrame();
  card.name = 'Card/Standard';
  card.resize(360, 200);
  card.cornerRadius = 16;
  card.fills = [{ type: 'SOLID', color: COLORS.card }];
  card.strokes = [{ type: 'SOLID', color: COLORS.border }];
  card.strokeWeight = 1;
  card.effects = [SHADOWS.md];

  const cardTitle = await createText('Card Title', TEXT_STYLES.heading3, COLORS.foreground);
  cardTitle.x = 20;
  cardTitle.y = 20;
  card.appendChild(cardTitle);

  const cardContent = await createText('Card content goes here', TEXT_STYLES.body, COLORS.mutedForeground);
  cardContent.x = 20;
  cardContent.y = 60;
  card.appendChild(cardContent);

  return card;
}

async function createBottomNav(activeIndex: number): Promise<FrameNode> {
  const nav = figma.createFrame();
  nav.name = 'Bottom Navigation';
  nav.resize(390, 64);
  nav.y = 844 - 64; // Position at bottom
  nav.fills = [{ type: 'SOLID', color: COLORS.card }];
  nav.strokes = [{ type: 'SOLID', color: COLORS.border }];
  nav.strokeWeight = 1;
  nav.strokeAlign = 'INSIDE';

  const navItems = [
    { name: 'Home', icon: 'Home' },
    { name: 'Portfolio', icon: 'Briefcase' },
    { name: 'Funds', icon: 'Wallet' },
    { name: 'Reports', icon: 'FileText' },
    { name: 'Account', icon: 'User' },
  ];

  const itemWidth = 390 / 5;

  for (let i = 0; i < navItems.length; i++) {
    const isActive = i === activeIndex;
    const item = figma.createFrame();
    item.name = navItems[i].name;
    item.resize(itemWidth, 64);
    item.x = i * itemWidth;
    item.fills = [];
    item.layoutMode = 'VERTICAL';
    item.primaryAxisAlignItems = 'CENTER';
    item.counterAxisAlignItems = 'CENTER';
    item.itemSpacing = 4;
    item.paddingTop = 8;
    item.paddingBottom = 8;

    const icon = createIcon(navItems[i].icon, 20, isActive ? COLORS.primary : COLORS.mutedForeground);
    item.appendChild(icon);

    const label = await createText(navItems[i].name, TEXT_STYLES.caption, isActive ? COLORS.primary : COLORS.mutedForeground);
    item.appendChild(label);

    nav.appendChild(item);
  }

  return nav;
}

async function createScreens(): Promise<FrameNode> {
  const container = createFrame('📱 Screens', 5000, 900);
  let xOffset = 0;

  // Create all screens
  const screens = [
    await createLoginScreen(),
    await create2FAScreen(),
    await createDashboardScreen(),
    await createPortfolioScreen(),
    await createFundsScreen(),
    await createReportsScreen(),
    await createAccountScreen(),
  ];

  for (const screen of screens) {
    screen.x = xOffset;
    screen.y = 0;
    container.appendChild(screen);
    xOffset += screen.width + 50;
  }

  return container;
}

async function createLoginScreen(): Promise<FrameNode> {
  const screen = createFrame('Login Screen', 390, 844);
  screen.fills = [{ type: 'SOLID', color: COLORS.background }];

  // Background gradient decoration
  const bgGradient = createRectangle(390, 256, COLORS.primary, 0);
  bgGradient.opacity = 0.1;
  bgGradient.cornerRadius = 48;
  bgGradient.constraints = { horizontal: 'STRETCH', vertical: 'MIN' };
  screen.appendChild(bgGradient);

  // Brand Section
  const brandContainer = figma.createFrame();
  brandContainer.name = 'Brand';
  brandContainer.resize(390, 200);
  brandContainer.x = 0;
  brandContainer.y = 100;
  brandContainer.fills = [];
  brandContainer.layoutMode = 'VERTICAL';
  brandContainer.primaryAxisAlignItems = 'CENTER';
  brandContainer.counterAxisAlignItems = 'CENTER';
  brandContainer.itemSpacing = 8;

  const logoText = await createText('PhillipCapital', TEXT_STYLES.heading1, COLORS.primary);
  brandContainer.appendChild(logoText);

  const tagline = await createText('YOUR PARTNER IN FINANCE', TEXT_STYLES.caption, COLORS.mutedForeground);
  tagline.letterSpacing = { value: 2, unit: 'PIXELS' };
  brandContainer.appendChild(tagline);

  // Create "Phillip1" with mixed styling
  const appNameContainer = figma.createFrame();
  appNameContainer.name = 'App Name';
  appNameContainer.resize(200, 60);
  appNameContainer.fills = [];
  appNameContainer.layoutMode = 'HORIZONTAL';
  appNameContainer.itemSpacing = 0;
  appNameContainer.primaryAxisAlignItems = 'CENTER';
  appNameContainer.counterAxisAlignItems = 'CENTER';

  const phillipText = await createText('Phillip', TEXT_STYLES.displayLarge, COLORS.foreground);
  appNameContainer.appendChild(phillipText);

  const oneText = await createText('1', { ...TEXT_STYLES.displayLarge, fontWeight: 700 }, COLORS.accent);
  appNameContainer.appendChild(oneText);

  brandContainer.appendChild(appNameContainer);

  screen.appendChild(brandContainer);

  // Form Container
  const formY = 320;

  // Username Input with User icon
  const usernameInput = await createInput('Username', 'User');
  usernameInput.x = 24;
  usernameInput.y = formY;
  screen.appendChild(usernameInput);

  // Password Input with Lock icon
  const passwordInput = await createInput('Password', 'Lock');
  passwordInput.x = 24;
  passwordInput.y = formY + 68;

  // Add Eye icon on the right for password visibility toggle
  const eyeIcon = createIcon('Eye', 20, COLORS.mutedForeground);
  eyeIcon.x = 360 - 16 - 20;
  eyeIcon.y = (48 - 20) / 2;
  passwordInput.appendChild(eyeIcon);

  screen.appendChild(passwordInput);

  // Forgot Links
  const forgotEmail = await createText('Forgot Email Id?', TEXT_STYLES.bodySmall, COLORS.primary);
  forgotEmail.opacity = 0.8;
  forgotEmail.x = 24;
  forgotEmail.y = formY + 136;
  screen.appendChild(forgotEmail);

  const forgotPassword = await createText('Forgot Password?', TEXT_STYLES.bodySmall, COLORS.primary);
  forgotPassword.opacity = 0.8;
  forgotPassword.x = 390 - 24 - forgotPassword.width;
  forgotPassword.y = formY + 136;
  screen.appendChild(forgotPassword);

  // Login Button
  const loginBtn = await createButton('Login', 'primary');
  loginBtn.x = 24;
  loginBtn.y = formY + 176;
  screen.appendChild(loginBtn);

  // Divider
  const dividerY = formY + 244;
  const dividerLine1 = createRectangle(140, 1, COLORS.border);
  dividerLine1.x = 24;
  dividerLine1.y = dividerY;
  screen.appendChild(dividerLine1);

  const dividerText = await createText('OR CONTINUE WITH', TEXT_STYLES.caption, COLORS.mutedForeground);
  dividerText.x = (390 - dividerText.width) / 2;
  dividerText.y = dividerY - 7;
  screen.appendChild(dividerText);

  const dividerLine2 = createRectangle(140, 1, COLORS.border);
  dividerLine2.x = 390 - 24 - 140;
  dividerLine2.y = dividerY;
  screen.appendChild(dividerLine2);

  // Biometric Button
  const biometricBtn = await createButton('Biometric Login', 'secondary');
  biometricBtn.x = 24;
  biometricBtn.y = dividerY + 30;
  screen.appendChild(biometricBtn);

  // Footer
  const newAccountText = await createText('Open a New Account', TEXT_STYLES.body, COLORS.primary);
  newAccountText.x = (390 - newAccountText.width) / 2;
  newAccountText.y = 720;
  screen.appendChild(newAccountText);

  const versionText = await createText('app version : 1.1.7', TEXT_STYLES.caption, COLORS.mutedForeground);
  versionText.x = (390 - versionText.width) / 2;
  versionText.y = 780;
  screen.appendChild(versionText);

  return screen;
}

async function create2FAScreen(): Promise<FrameNode> {
  const screen = createFrame('2FA Screen', 390, 844);
  screen.fills = [{ type: 'SOLID', color: COLORS.background }];

  // Background gradient
  const bgGradient = createRectangle(390, 256, COLORS.primary, 0);
  bgGradient.opacity = 0.1;
  bgGradient.cornerRadius = 48;
  screen.appendChild(bgGradient);

  // Brand
  const appName = await createText('Phillip1', TEXT_STYLES.displayLarge, COLORS.foreground);
  appName.x = (390 - appName.width) / 2;
  appName.y = 120;
  screen.appendChild(appName);

  // Title
  const title = await createText('Two-Step Verification', TEXT_STYLES.heading2, COLORS.foreground);
  title.x = (390 - title.width) / 2;
  title.y = 280;
  screen.appendChild(title);

  // Description
  const desc = await createText('Enter the 6-digit code sent to your\nregistered mobile number and email.', TEXT_STYLES.body, COLORS.mutedForeground);
  desc.textAlignHorizontal = 'CENTER';
  desc.x = 24;
  desc.y = 330;
  desc.resize(342, desc.height);
  screen.appendChild(desc);

  // OTP Boxes
  const otpY = 400;
  const otpGap = 8;
  const otpBoxWidth = 48;
  const totalOTPWidth = (otpBoxWidth * 6) + (otpGap * 5);
  const otpStartX = (390 - totalOTPWidth) / 2;

  for (let i = 0; i < 6; i++) {
    const otpBox = figma.createFrame();
    otpBox.name = `OTP-${i + 1}`;
    otpBox.resize(otpBoxWidth, 56);
    otpBox.x = otpStartX + (i * (otpBoxWidth + otpGap));
    otpBox.y = otpY;
    otpBox.cornerRadius = 12;
    otpBox.fills = [{ type: 'SOLID', color: COLORS.card }];
    otpBox.strokes = [{ type: 'SOLID', color: COLORS.border }];
    otpBox.strokeWeight = 1;
    otpBox.effects = [SHADOWS.xs];
    screen.appendChild(otpBox);
  }

  // Verify Button
  const verifyBtn = await createButton('Verify & Proceed', 'primary');
  verifyBtn.x = 24;
  verifyBtn.y = 500;
  screen.appendChild(verifyBtn);

  // Back Button
  const backText = await createText('Back to Login', TEXT_STYLES.body, COLORS.mutedForeground);
  backText.x = (390 - backText.width) / 2;
  backText.y = 570;
  screen.appendChild(backText);

  // Resend Code
  const resendText = await createText("Didn't receive the code? Resend Code", TEXT_STYLES.caption, COLORS.mutedForeground);
  resendText.x = (390 - resendText.width) / 2;
  resendText.y = 640;
  screen.appendChild(resendText);

  return screen;
}

async function createDashboardScreen(): Promise<FrameNode> {
  const screen = createFrame('Dashboard Screen', 390, 844);
  screen.fills = [{ type: 'SOLID', color: COLORS.background }];

  // Expanded Header with Profile Badge
  const header = figma.createFrame();
  header.name = 'Expanded Header';
  header.resize(390, 256);
  header.fills = [{ type: 'SOLID', color: COLORS.primary }];
  header.cornerRadius = 32;
  header.topLeftRadius = 0;
  header.topRightRadius = 0;
  header.effects = [SHADOWS.lg];
  screen.appendChild(header);

  // Header Title
  const headerTitle = await createText('Dashboard', TEXT_STYLES.heading3, COLORS.primaryForeground);
  headerTitle.x = 24;
  headerTitle.y = 60;
  header.appendChild(headerTitle);

  // Profile Badge (Top Right)
  const profileBadge = figma.createFrame();
  profileBadge.name = 'Profile Badge';
  profileBadge.resize(120, 44);
  profileBadge.x = 390 - 24 - 120;
  profileBadge.y = 52;
  profileBadge.cornerRadius = 22;
  profileBadge.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 }, opacity: 0.1 }];
  profileBadge.strokes = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 }, opacity: 0.1 }];
  profileBadge.strokeWeight = 1;
  profileBadge.layoutMode = 'HORIZONTAL';
  profileBadge.itemSpacing = 8;
  profileBadge.paddingLeft = 6;
  profileBadge.paddingRight = 16;
  profileBadge.paddingTop = 6;
  profileBadge.paddingBottom = 6;
  profileBadge.primaryAxisAlignItems = 'CENTER';
  profileBadge.counterAxisAlignItems = 'CENTER';

  // Avatar in badge
  const avatar = figma.createFrame();
  avatar.resize(32, 32);
  avatar.cornerRadius = 16;
  avatar.fills = [{ type: 'SOLID', color: COLORS.accent }];
  profileBadge.appendChild(avatar);

  const avatarText = await createText('AS', { fontSize: 12, fontWeight: 700, lineHeight: 16, fontFamily: 'Inter' }, COLORS.accentForeground);
  avatarText.x = (32 - avatarText.width) / 2;
  avatarText.y = (32 - avatarText.height) / 2;
  avatar.appendChild(avatarText);

  const userName = await createText('ANKITA', { fontSize: 12, fontWeight: 500, lineHeight: 16, fontFamily: 'Inter' }, COLORS.primaryForeground);
  userName.letterSpacing = { value: 0.5, unit: 'PIXELS' };
  profileBadge.appendChild(userName);

  header.appendChild(profileBadge);

  // Available Funds (Center)
  const fundsLabel = await createText('AVAILABLE FUNDS', { fontSize: 14, fontWeight: 500, lineHeight: 20, fontFamily: 'Inter' }, COLORS.primaryForeground);
  fundsLabel.opacity = 0.7;
  fundsLabel.letterSpacing = { value: 2, unit: 'PIXELS' };
  fundsLabel.x = (390 - fundsLabel.width) / 2;
  fundsLabel.y = 140;
  header.appendChild(fundsLabel);

  const fundsAmount = await createText('₹ 0', TEXT_STYLES.displayLarge, COLORS.primaryForeground);
  fundsAmount.x = (390 - fundsAmount.width) / 2;
  fundsAmount.y = 170;
  header.appendChild(fundsAmount);

  // Financial Card
  const financialCard = figma.createFrame();
  financialCard.name = 'Financial Card - Equities';
  financialCard.resize(358, 380);
  financialCard.x = 16;
  financialCard.y = 224;
  financialCard.cornerRadius = 24;
  financialCard.fills = [{ type: 'SOLID', color: COLORS.card }];
  financialCard.strokes = [{ type: 'SOLID', color: COLORS.border }];
  financialCard.strokeWeight = 1;
  financialCard.strokeAlign = 'INSIDE';
  financialCard.effects = [SHADOWS.xl];
  screen.appendChild(financialCard);

  // Card Header
  const cardTitle = await createText('Equities', TEXT_STYLES.heading3, COLORS.foreground);
  cardTitle.x = 24;
  cardTitle.y = 24;
  financialCard.appendChild(cardTitle);

  const gainBadge = figma.createFrame();
  gainBadge.resize(70, 24);
  gainBadge.x = 358 - 24 - 70;
  gainBadge.y = 24;
  gainBadge.cornerRadius = 12;
  gainBadge.fills = [{ type: 'SOLID', color: COLORS.greenBg }];
  financialCard.appendChild(gainBadge);

  const gainText = await createText('+21.1%', TEXT_STYLES.caption, COLORS.greenText);
  gainText.x = (70 - gainText.width) / 2;
  gainText.y = (24 - gainText.height) / 2;
  gainBadge.appendChild(gainText);

  // Invested & Current
  const investedLabel = await createText('INVESTED VALUE', TEXT_STYLES.caption, COLORS.mutedForeground);
  investedLabel.x = 24;
  investedLabel.y = 70;
  financialCard.appendChild(investedLabel);

  const investedValue = await createText('₹ 1,80,558', TEXT_STYLES.heading3, COLORS.foreground);
  investedValue.x = 24;
  investedValue.y = 90;
  financialCard.appendChild(investedValue);

  const currentLabel = await createText('CURRENT VALUE', TEXT_STYLES.caption, COLORS.mutedForeground);
  currentLabel.x = 358 - 24 - currentLabel.width;
  currentLabel.y = 70;
  financialCard.appendChild(currentLabel);

  const currentValue = await createText('₹ 2,18,705', TEXT_STYLES.heading3, COLORS.foreground);
  currentValue.x = 358 - 24 - currentValue.width;
  currentValue.y = 90;
  financialCard.appendChild(currentValue);

  // Divider
  const divider = createRectangle(310, 1, COLORS.border);
  divider.x = 24;
  divider.y = 140;
  financialCard.appendChild(divider);

  // Stats Section
  const statsLabel1 = await createText("Portfolio Gain/Loss", TEXT_STYLES.bodySmall, COLORS.mutedForeground);
  statsLabel1.x = 24;
  statsLabel1.y = 160;
  financialCard.appendChild(statsLabel1);

  const statsValue1 = await createText('₹ 38,147', TEXT_STYLES.heading3, COLORS.success);
  statsValue1.x = 24;
  statsValue1.y = 180;
  financialCard.appendChild(statsValue1);

  const statsLabel2 = await createText("Day's Total Gain/Loss", TEXT_STYLES.bodySmall, COLORS.mutedForeground);
  statsLabel2.x = 358 - 24 - statsLabel2.width;
  statsLabel2.y = 160;
  financialCard.appendChild(statsLabel2);

  const statsValue2 = await createText('₹ -646 (-0.3%)', TEXT_STYLES.body, COLORS.danger);
  statsValue2.x = 358 - 24 - statsValue2.width;
  statsValue2.y = 180;
  financialCard.appendChild(statsValue2);

  // Action Buttons
  const addFundsBtn = await createButton('Add Funds', 'primary');
  addFundsBtn.resize(165, 48);
  addFundsBtn.x = 16;
  addFundsBtn.y = 316;
  financialCard.appendChild(addFundsBtn);

  const viewDetailsBtn = await createButton('View Details', 'secondary');
  viewDetailsBtn.resize(165, 48);
  viewDetailsBtn.x = 177;
  viewDetailsBtn.y = 316;
  financialCard.appendChild(viewDetailsBtn);

  // Investment Options
  const optionsY = 624;
  const optionCards = [
    { title: 'Futures & Options', color: { r: 59/255, g: 130/255, b: 246/255 } },
    { title: 'Commodities', color: { r: 168/255, g: 85/255, b: 247/255 } },
    { title: 'Mutual Funds', color: { r: 34/255, g: 197/255, b: 94/255 } },
  ];

  for (let i = 0; i < optionCards.length; i++) {
    const optionCard = figma.createFrame();
    optionCard.name = optionCards[i].title;
    optionCard.resize(358, 64);
    optionCard.x = 16;
    optionCard.y = optionsY + (i * 76);
    optionCard.cornerRadius = 16;
    optionCard.fills = [{ type: 'SOLID', color: COLORS.card }];
    optionCard.strokes = [{ type: 'SOLID', color: COLORS.border }];
    optionCard.strokeWeight = 1;
    optionCard.effects = [SHADOWS.xs];
    screen.appendChild(optionCard);

    const iconBg = createRectangle(48, 48, optionCards[i].color, 12);
    iconBg.opacity = 0.1;
    iconBg.x = 16;
    iconBg.y = 8;
    optionCard.appendChild(iconBg);

    const optionTitle = await createText(optionCards[i].title, TEXT_STYLES.body, COLORS.foreground);
    optionTitle.x = 76;
    optionTitle.y = 22;
    optionCard.appendChild(optionTitle);

    const activateText = await createText('Activate Now', TEXT_STYLES.bodySmall, COLORS.primary);
    activateText.x = 358 - 16 - 20 - activateText.width;
    activateText.y = 24;
    optionCard.appendChild(activateText);
  }

  // Bottom Navigation (Active: Home)
  const bottomNav = await createBottomNav(0);
  screen.appendChild(bottomNav);

  return screen;
}

async function createPortfolioScreen(): Promise<FrameNode> {
  const screen = createFrame('Portfolio Screen', 390, 844);
  screen.fills = [{ type: 'SOLID', color: COLORS.background }];

  // Header
  const header = figma.createFrame();
  header.name = 'Header';
  header.resize(390, 120);
  header.fills = [{ type: 'SOLID', color: COLORS.primary }];
  header.cornerRadius = 32;
  header.topLeftRadius = 0;
  header.topRightRadius = 0;
  header.effects = [SHADOWS.lg];
  screen.appendChild(header);

  const headerTitle = await createText('Portfolio', TEXT_STYLES.heading3, COLORS.primaryForeground);
  headerTitle.x = 60;
  headerTitle.y = 60;
  header.appendChild(headerTitle);

  // Tabs
  const tabBar = figma.createFrame();
  tabBar.name = 'Tab Bar';
  tabBar.resize(390, 48);
  tabBar.y = 120;
  tabBar.fills = [{ type: 'SOLID', color: COLORS.background }];
  tabBar.strokes = [{ type: 'SOLID', color: COLORS.border, opacity: 1 }];
  tabBar.strokeWeight = 1;
  tabBar.strokeAlign = 'INSIDE';
  tabBar.bottomLeftRadius = 0;
  tabBar.bottomRightRadius = 0;
  screen.appendChild(tabBar);

  const tabs = ['Summary', 'Equities', 'Bonds', 'Futures'];
  for (let i = 0; i < tabs.length; i++) {
    const tab = await createText(tabs[i], TEXT_STYLES.bodySmall, i === 1 ? COLORS.primary : COLORS.mutedForeground);
    tab.x = 24 + (i * 90);
    tab.y = 16;
    tabBar.appendChild(tab);

    if (i === 1) {
      const indicator = createRectangle(60, 2, COLORS.primary, 1);
      indicator.x = 24 + (i * 90);
      indicator.y = 46;
      tabBar.appendChild(indicator);
    }
  }

  // Summary Card
  const summaryCard = figma.createFrame();
  summaryCard.name = 'Summary Card';
  summaryCard.resize(358, 140);
  summaryCard.x = 16;
  summaryCard.y = 200;
  summaryCard.cornerRadius = 16;
  summaryCard.fills = [{ type: 'SOLID', color: COLORS.orangeBg, opacity: 0.5 }];
  summaryCard.strokes = [{ type: 'SOLID', color: COLORS.orangeBorder }];
  summaryCard.strokeWeight = 1;
  screen.appendChild(summaryCard);

  const currentLabel = await createText('CURRENT VALUE', TEXT_STYLES.caption, COLORS.mutedForeground);
  currentLabel.x = 16;
  currentLabel.y = 16;
  summaryCard.appendChild(currentLabel);

  const currentVal = await createText('₹ 2,18,705', TEXT_STYLES.heading3, COLORS.foreground);
  currentVal.x = 16;
  currentVal.y = 36;
  summaryCard.appendChild(currentVal);

  const plLabel = await createText('UNREALISED P&L', TEXT_STYLES.caption, COLORS.mutedForeground);
  plLabel.x = 358 - 16 - plLabel.width;
  plLabel.y = 16;
  summaryCard.appendChild(plLabel);

  const plVal = await createText('₹ 38,147', TEXT_STYLES.body, COLORS.success);
  plVal.x = 358 - 16 - plVal.width;
  plVal.y = 36;
  summaryCard.appendChild(plVal);

  // Stock Card
  const stockCard = figma.createFrame();
  stockCard.name = 'Stock Card - BEL';
  stockCard.resize(358, 120);
  stockCard.x = 16;
  stockCard.y = 360;
  stockCard.cornerRadius = 12;
  stockCard.fills = [{ type: 'SOLID', color: COLORS.card }];
  stockCard.strokes = [{ type: 'SOLID', color: COLORS.border }];
  stockCard.strokeWeight = 1;
  stockCard.effects = [SHADOWS.xs];
  screen.appendChild(stockCard);

  const symbol = await createText('BEL', TEXT_STYLES.body, COLORS.foreground);
  symbol.x = 16;
  symbol.y = 16;
  stockCard.appendChild(symbol);

  const ltp = await createText('413.65', TEXT_STYLES.heading3, COLORS.foreground);
  ltp.x = 358 - 16 - ltp.width;
  ltp.y = 16;
  stockCard.appendChild(ltp);

  const gainPercent = await createText('+27.7%', TEXT_STYLES.bodySmall, COLORS.success);
  gainPercent.x = 358 - 16 - gainPercent.width;
  gainPercent.y = 48;
  stockCard.appendChild(gainPercent);

  const details = await createText('Qty: 34 | Avg: 323.94', TEXT_STYLES.caption, COLORS.mutedForeground);
  details.x = 16;
  details.y = 70;
  stockCard.appendChild(details);

  const value = await createText('Val: ₹ 14,064', TEXT_STYLES.caption, COLORS.mutedForeground);
  value.x = 358 - 16 - value.width;
  value.y = 70;
  stockCard.appendChild(value);

  const invested = await createText('Inv: ₹ 11,014', TEXT_STYLES.caption, COLORS.mutedForeground);
  invested.x = 16;
  invested.y = 90;
  stockCard.appendChild(invested);

  const gain = await createText('+₹ 3,050', TEXT_STYLES.caption, COLORS.success);
  gain.x = 358 - 16 - gain.width;
  gain.y = 90;
  stockCard.appendChild(gain);

  // Bottom Navigation (Active: Portfolio)
  const bottomNav = await createBottomNav(1);
  screen.appendChild(bottomNav);

  return screen;
}

async function createFundsScreen(): Promise<FrameNode> {
  const screen = createFrame('Funds Screen', 390, 844);
  screen.fills = [{ type: 'SOLID', color: COLORS.background }];

  // Header
  const header = figma.createFrame();
  header.name = 'Header';
  header.resize(390, 120);
  header.fills = [{ type: 'SOLID', color: COLORS.primary }];
  header.cornerRadius = 32;
  header.topLeftRadius = 0;
  header.topRightRadius = 0;
  header.effects = [SHADOWS.lg];
  screen.appendChild(header);

  const headerTitle = await createText('Funds', TEXT_STYLES.heading3, COLORS.primaryForeground);
  headerTitle.x = 60;
  headerTitle.y = 60;
  header.appendChild(headerTitle);

  // Balance Card
  const balanceCard = figma.createFrame();
  balanceCard.name = 'Balance Card';
  balanceCard.resize(358, 160);
  balanceCard.x = 16;
  balanceCard.y = 180;
  balanceCard.cornerRadius = 24;
  balanceCard.fills = [{ type: 'SOLID', color: COLORS.card }];
  balanceCard.strokes = [{ type: 'SOLID', color: COLORS.border }];
  balanceCard.strokeWeight = 1;
  balanceCard.effects = [SHADOWS.sm];
  screen.appendChild(balanceCard);

  const balanceLabel = await createText('AVAILABLE BALANCE', TEXT_STYLES.bodySmall, COLORS.mutedForeground);
  balanceLabel.x = (358 - balanceLabel.width) / 2;
  balanceLabel.y = 40;
  balanceCard.appendChild(balanceLabel);

  const balanceAmount = await createText('₹ 0.00', TEXT_STYLES.displayLarge, COLORS.primary);
  balanceAmount.x = (358 - balanceAmount.width) / 2;
  balanceAmount.y = 70;
  balanceCard.appendChild(balanceAmount);

  // Add Funds Button
  const addFundsBtn = figma.createFrame();
  addFundsBtn.name = 'Add Funds Button';
  addFundsBtn.resize(171, 100);
  addFundsBtn.x = 16;
  addFundsBtn.y = 370;
  addFundsBtn.cornerRadius = 16;
  addFundsBtn.fills = [{ type: 'SOLID', color: COLORS.accent }];
  addFundsBtn.effects = [SHADOWS.accentShadow];
  screen.appendChild(addFundsBtn);

  const addFundsText = await createText('Add Funds', TEXT_STYLES.button, COLORS.accentForeground);
  addFundsText.x = (171 - addFundsText.width) / 2;
  addFundsText.y = 60;
  addFundsBtn.appendChild(addFundsText);

  // Withdraw Button
  const withdrawBtn = figma.createFrame();
  withdrawBtn.name = 'Withdraw Button';
  withdrawBtn.resize(171, 100);
  withdrawBtn.x = 203;
  withdrawBtn.y = 370;
  withdrawBtn.cornerRadius = 16;
  withdrawBtn.fills = [{ type: 'SOLID', color: COLORS.card }];
  withdrawBtn.strokes = [{ type: 'SOLID', color: COLORS.border }];
  withdrawBtn.strokeWeight = 1;
  withdrawBtn.effects = [SHADOWS.sm];
  screen.appendChild(withdrawBtn);

  const withdrawText = await createText('Withdraw', TEXT_STYLES.button, COLORS.foreground);
  withdrawText.x = (171 - withdrawText.width) / 2;
  withdrawText.y = 60;
  withdrawBtn.appendChild(withdrawText);

  // Transactions Section
  const transactionsTitle = await createText('Recent Transactions', TEXT_STYLES.heading3, COLORS.foreground);
  transactionsTitle.x = 24;
  transactionsTitle.y = 510;
  screen.appendChild(transactionsTitle);

  const emptyState = figma.createFrame();
  emptyState.name = 'Empty State';
  emptyState.resize(358, 120);
  emptyState.x = 16;
  emptyState.y = 560;
  emptyState.cornerRadius = 12;
  emptyState.fills = [{ type: 'SOLID', color: COLORS.card }];
  emptyState.strokes = [{ type: 'SOLID', color: COLORS.border }];
  emptyState.strokeWeight = 1;
  screen.appendChild(emptyState);

  const emptyText = await createText('No recent transactions found', TEXT_STYLES.body, COLORS.mutedForeground);
  emptyText.x = (358 - emptyText.width) / 2;
  emptyText.y = (120 - emptyText.height) / 2;
  emptyState.appendChild(emptyText);

  // Bottom Navigation (Active: Funds)
  const bottomNav = await createBottomNav(2);
  screen.appendChild(bottomNav);

  return screen;
}

async function createReportsScreen(): Promise<FrameNode> {
  const screen = createFrame('Reports Screen', 390, 844);
  screen.fills = [{ type: 'SOLID', color: COLORS.background }];

  // Header
  const header = figma.createFrame();
  header.name = 'Header';
  header.resize(390, 120);
  header.fills = [{ type: 'SOLID', color: COLORS.primary }];
  header.cornerRadius = 32;
  header.topLeftRadius = 0;
  header.topRightRadius = 0;
  header.effects = [SHADOWS.lg];
  screen.appendChild(header);

  const headerTitle = await createText('Reports', TEXT_STYLES.heading3, COLORS.primaryForeground);
  headerTitle.x = 60;
  headerTitle.y = 60;
  header.appendChild(headerTitle);

  // Tab Bar
  const tabBar = figma.createFrame();
  tabBar.name = 'Tab Bar';
  tabBar.resize(390, 48);
  tabBar.y = 120;
  tabBar.fills = [{ type: 'SOLID', color: COLORS.card }];
  tabBar.strokes = [{ type: 'SOLID', color: COLORS.border }];
  tabBar.strokeWeight = 1;
  tabBar.strokeAlign = 'INSIDE';
  screen.appendChild(tabBar);

  const tabs = ['Trading', 'Demat', 'Mutual Funds', 'Advisory'];
  for (let i = 0; i < tabs.length; i++) {
    const tab = await createText(tabs[i], TEXT_STYLES.bodySmall, i === 0 ? COLORS.primary : COLORS.mutedForeground);
    tab.x = 16 + (i * 95);
    tab.y = 16;
    tabBar.appendChild(tab);

    if (i === 0) {
      const indicator = createRectangle(60, 2, COLORS.primary, 1);
      indicator.x = 16;
      indicator.y = 46;
      tabBar.appendChild(indicator);
    }
  }

  // Summary Card
  const summaryCard = figma.createFrame();
  summaryCard.name = 'Summary Card';
  summaryCard.resize(358, 56);
  summaryCard.x = 16;
  summaryCard.y = 190;
  summaryCard.cornerRadius = 12;
  summaryCard.fills = [{ type: 'SOLID', color: COLORS.orangeBg, opacity: 0.6 }];
  summaryCard.strokes = [{ type: 'SOLID', color: COLORS.orangeBorder }];
  summaryCard.strokeWeight = 1;
  summaryCard.effects = [SHADOWS.xs];
  screen.appendChild(summaryCard);

  const summaryLabel = await createText('Total Holding Value', TEXT_STYLES.bodySmall, COLORS.mutedForeground);
  summaryLabel.x = 16;
  summaryLabel.y = 18;
  summaryCard.appendChild(summaryLabel);

  const summaryValue = await createText('₹ 2,18,706', TEXT_STYLES.heading3, COLORS.foreground);
  summaryValue.x = 358 - 16 - summaryValue.width;
  summaryValue.y = 14;
  summaryCard.appendChild(summaryValue);

  // Table Header
  const tableHeader = figma.createFrame();
  tableHeader.name = 'Table Header';
  tableHeader.resize(390, 56);
  tableHeader.y = 266;
  tableHeader.fills = [{ type: 'SOLID', color: { r: 15/255, g: 23/255, b: 42/255 } }];
  screen.appendChild(tableHeader);

  const headerCol1 = await createText('ScripCode | Scrip Name\nQuantity', TEXT_STYLES.caption, COLORS.card);
  headerCol1.x = 16;
  headerCol1.y = 12;
  tableHeader.appendChild(headerCol1);

  const headerCol2 = await createText('Close Rate\nValuation', TEXT_STYLES.caption, COLORS.card);
  headerCol2.x = 390 - 16 - headerCol2.width;
  headerCol2.y = 12;
  tableHeader.appendChild(headerCol2);

  // Report Item
  const reportItem = figma.createFrame();
  reportItem.name = 'Report Item - BEL';
  reportItem.resize(390, 80);
  reportItem.y = 322;
  reportItem.fills = [{ type: 'SOLID', color: COLORS.card }];
  screen.appendChild(reportItem);

  const itemTitle = await createText('BEL | BHARAT ELECTRONICS LIMITED', TEXT_STYLES.bodySmall, COLORS.foreground);
  itemTitle.x = 16;
  itemTitle.y = 16;
  reportItem.appendChild(itemTitle);

  const itemQty = await createText('34', TEXT_STYLES.bodySmall, COLORS.foreground);
  itemQty.x = 16;
  itemQty.y = 44;
  reportItem.appendChild(itemQty);

  const itemRate = await createText('₹ 413.65', TEXT_STYLES.bodySmall, COLORS.foreground);
  itemRate.x = 390 - 16 - itemRate.width;
  itemRate.y = 16;
  reportItem.appendChild(itemRate);

  const itemVal = await createText('₹ 14,064', TEXT_STYLES.bodySmall, COLORS.foreground);
  itemVal.x = 390 - 16 - itemVal.width;
  itemVal.y = 44;
  reportItem.appendChild(itemVal);

  // Bottom Navigation (Active: Reports)
  const bottomNav = await createBottomNav(3);
  screen.appendChild(bottomNav);

  return screen;
}

async function createAccountScreen(): Promise<FrameNode> {
  const screen = createFrame('Account Screen', 390, 844);
  screen.fills = [{ type: 'SOLID', color: COLORS.background }];

  // Header
  const header = figma.createFrame();
  header.name = 'Header';
  header.resize(390, 120);
  header.fills = [{ type: 'SOLID', color: COLORS.primary }];
  header.cornerRadius = 32;
  header.topLeftRadius = 0;
  header.topRightRadius = 0;
  header.effects = [SHADOWS.lg];
  screen.appendChild(header);

  const headerTitle = await createText('Account', TEXT_STYLES.heading3, COLORS.primaryForeground);
  headerTitle.x = 60;
  headerTitle.y = 60;
  header.appendChild(headerTitle);

  // Profile Card
  const profileCard = figma.createFrame();
  profileCard.name = 'Profile Card';
  profileCard.resize(358, 180);
  profileCard.x = 16;
  profileCard.y = 72;
  profileCard.cornerRadius = 16;
  profileCard.fills = [{ type: 'SOLID', color: COLORS.card }];
  profileCard.strokes = [{ type: 'SOLID', color: COLORS.border }];
  profileCard.strokeWeight = 1;
  profileCard.effects = [SHADOWS.lg];
  screen.appendChild(profileCard);

  // Avatar Container
  const avatarContainer = figma.createFrame();
  avatarContainer.name = 'Avatar';
  avatarContainer.resize(96, 96);
  avatarContainer.x = (358 - 96) / 2;
  avatarContainer.y = 20;
  avatarContainer.cornerRadius = 48; // Make it circular
  avatarContainer.fills = [{ type: 'SOLID', color: COLORS.accent }];
  avatarContainer.clipsContent = true;
  profileCard.appendChild(avatarContainer);

  const avatarText = await createText('AS', TEXT_STYLES.heading1, COLORS.accentForeground);
  avatarText.x = (96 - avatarText.width) / 2;
  avatarText.y = (96 - avatarText.height) / 2;
  avatarContainer.appendChild(avatarText);

  const userName = await createText('ANKITA SAHU', TEXT_STYLES.heading3, COLORS.foreground);
  userName.x = (358 - userName.width) / 2;
  userName.y = 130;
  profileCard.appendChild(userName);

  const userId = await createText('Client ID: ankita.sahu', TEXT_STYLES.bodySmall, COLORS.mutedForeground);
  userId.x = (358 - userId.width) / 2;
  userId.y = 156;
  profileCard.appendChild(userId);

  // Menu Items
  const menuItems = [
    'Account Details',
    'Settings',
    'Notifications',
    'Security & Privacy',
    'Help & Support',
  ];

  const menuCard = figma.createFrame();
  menuCard.name = 'Menu Card';
  menuCard.resize(358, 280);
  menuCard.x = 16;
  menuCard.y = 280;
  menuCard.cornerRadius = 16;
  menuCard.fills = [{ type: 'SOLID', color: COLORS.card }];
  menuCard.strokes = [{ type: 'SOLID', color: COLORS.border }];
  menuCard.strokeWeight = 1;
  menuCard.effects = [SHADOWS.sm];
  screen.appendChild(menuCard);

  for (let i = 0; i < menuItems.length; i++) {
    const menuItem = await createText(menuItems[i], TEXT_STYLES.body, COLORS.foreground);
    menuItem.x = 56;
    menuItem.y = 16 + (i * 56);
    menuCard.appendChild(menuItem);

    if (i < menuItems.length - 1) {
      const divider = createRectangle(326, 1, COLORS.border);
      divider.opacity = 0.5;
      divider.x = 16;
      divider.y = 48 + (i * 56);
      menuCard.appendChild(divider);
    }
  }

  // Logout Button
  const logoutBtn = figma.createFrame();
  logoutBtn.name = 'Logout Button';
  logoutBtn.resize(358, 56);
  logoutBtn.x = 16;
  logoutBtn.y = 590;
  logoutBtn.cornerRadius = 16;
  logoutBtn.fills = [{ type: 'SOLID', color: { r: 254/255, g: 226/255, b: 226/255 } }];
  screen.appendChild(logoutBtn);

  const logoutText = await createText('Logout', TEXT_STYLES.button, COLORS.danger);
  logoutText.x = (358 - logoutText.width) / 2;
  logoutText.y = (56 - logoutText.height) / 2;
  logoutBtn.appendChild(logoutText);

  // Bottom Navigation (Active: Account)
  const bottomNav = await createBottomNav(4);
  screen.appendChild(bottomNav);

  return screen;
}

