# Quick Start Guide

Get the Currency Converter app running in minutes!

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Run on Android:**
   - Option A: Press `a` in the terminal after `npm start`
   - Option B: Run `npm run android`
   - Make sure you have an Android emulator running or a device connected

## Testing with Expo Go

1. Install **Expo Go** app on your Android device from Google Play
2. Run `npm start`
3. Scan the QR code with Expo Go app
4. The app will load on your device

## Building for Production

### Quick Build (EAS - Recommended)

```bash
# Install EAS CLI
npm install -g eas-cli

# Login
eas login

# Build for Android
eas build --platform android --profile production
```

### Local Build

```bash
# Build APK
expo build:android -t apk

# Build AAB (for Google Play)
expo build:android -t app-bundle
```

## Project Structure

- `App.js` - Main app entry point
- `screens/` - All app screens
- `services/` - API services
- `assets/` - Images and icons

## Next Steps

- See `README.md` for detailed documentation
- See `BUILD_GUIDE.md` for Google Play submission steps
- Customize app in `app.json`

## Need Help?

- Check the main README.md
- Review BUILD_GUIDE.md for production builds
- Ensure all dependencies are installed


