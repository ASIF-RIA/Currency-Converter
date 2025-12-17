# Logo Setup Instructions

## Your App Logo

You have provided a beautiful currency exchange logo featuring:
- Medium-blue background
- Dollar ($) and Euro (€) symbols in gray circles
- White curved arrows connecting the symbols
- Modern, flat design style

## Quick Setup Steps

### Step 1: Prepare Your Logo Files

You need to create 4 versions of your logo in different sizes:

1. **icon.png** - 1024x1024px (square)
2. **adaptive-icon.png** - 1024x1024px (square, with padding)
3. **splash.png** - 1284x2778px (portrait)
4. **favicon.png** - 48x48px (small)

### Step 2: Easy Method - Use Online Generator

1. Visit: https://www.appicon.co/ or https://icon.kitchen/
2. Upload your logo image
3. Select "Generate" for all platforms
4. Download the generated files
5. Copy the following files to `assets/` folder:
   - `icon.png` (1024x1024)
   - `adaptive-icon.png` (1024x1024)
   - `splash.png` (use the largest size, or create manually)
   - `favicon.png` (48x48)

### Step 3: Manual Method

If you prefer to create them manually:

#### icon.png (1024x1024px)
- Take your logo
- Make it square (1024x1024px)
- Center the logo
- Use the blue background from your logo

#### adaptive-icon.png (1024x1024px)
- Same as icon.png BUT
- Add 20% padding on all sides (keep logo in center 60% of image)
- Android will crop edges, so keep important parts centered

#### splash.png (1284x2778px or 1080x1920px)
- Portrait orientation
- Use medium-blue background (#4A90E2)
- Center your logo (large but not touching edges)
- This is the screen users see when app launches

#### favicon.png (48x48px)
- Small, simplified version
- Can be just the currency symbols or a simplified icon
- Should be recognizable at small size

### Step 4: Place Files

Copy all 4 files to the `assets/` folder:
```
assets/
  ├── icon.png
  ├── adaptive-icon.png
  ├── splash.png
  └── favicon.png
```

### Step 5: Verify Configuration

The app is already configured to use your logo:
- ✅ Icon path set in `app.json`
- ✅ Splash screen configured
- ✅ Adaptive icon configured
- ✅ Background colors set to match your logo's blue (#4A90E2)

## Color Reference

Based on your logo:
- **Background Blue**: #4A90E2 (medium-blue)
- **Currency Circles**: Light gray
- **Symbols**: White
- **Arrows**: White

## Testing

After adding the assets:

1. Run `npm start`
2. The app should show your logo as the icon
3. Splash screen should display on launch
4. Verify on Android device/emulator

## Troubleshooting

**Logo not showing?**
- Check file names are exactly: `icon.png`, `adaptive-icon.png`, `splash.png`, `favicon.png`
- Verify files are in the `assets/` folder (not a subfolder)
- Clear cache: `expo start -c`

**Logo looks cropped?**
- For adaptive-icon.png, add more padding around edges
- Keep logo in center 60% of the image

**Splash screen issues?**
- Ensure splash.png is portrait orientation
- Check the background color matches your logo

## Ready to Build

Once all assets are in place:
1. Test the app: `npm start`
2. Build for production: `eas build --platform android --profile production`

Your logo will appear:
- As the app icon on the device
- On the splash screen when app launches
- In the app store listing (when you upload)


