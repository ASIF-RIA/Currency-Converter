# Build Guide for Google Play Submission

This guide will help you build and prepare the Currency Converter app for Google Play submission.

## Prerequisites

1. **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
2. **Expo CLI** - Install globally: `npm install -g expo-cli`
3. **EAS CLI** (Recommended) - Install globally: `npm install -g eas-cli`
4. **Expo Account** - Sign up at [expo.dev](https://expo.dev)

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Prepare App Assets

Before building, ensure you have proper app assets:

1. **App Icon** (`assets/icon.png`)
   - Size: 1024x1024px
   - Format: PNG
   - No transparency
   - Square format

2. **Adaptive Icon** (`assets/adaptive-icon.png`)
   - Size: 1024x1024px
   - Format: PNG
   - Important content in center (safe area)

3. **Splash Screen** (`assets/splash.png`)
   - Recommended: 1284x2778px
   - Format: PNG
   - Background color: #ffffff

4. **Favicon** (`assets/favicon.png`)
   - Size: 48x48px
   - Format: PNG

## Step 3: Configure App Information

Edit `app.json` to update:
- App name
- Package name (currently: `com.currencyconverter.app`)
- Version number
- Version code (increment for each release)

## Step 4: Build Using EAS (Recommended)

### 4.1 Login to Expo

```bash
eas login
```

### 4.2 Configure Project

```bash
eas build:configure
```

This will create/update `eas.json` with build configurations.

### 4.3 Build for Android

**For Testing (APK):**
```bash
eas build --platform android --profile preview
```

**For Production (AAB - Required for Google Play):**
```bash
eas build --platform android --profile production
```

The build will be processed in the cloud. You'll receive a download link when complete.

## Step 5: Alternative - Local Build with Expo

### 5.1 Generate Keystore (First Time Only)

```bash
keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

Save the keystore file securely and note the password.

### 5.2 Configure Keystore in app.json

Add to `app.json` under `expo.android`:

```json
"android": {
  "package": "com.currencyconverter.app",
  "versionCode": 1,
  "signingConfig": {
    "keystore": "./my-upload-key.keystore",
    "storePassword": "YOUR_STORE_PASSWORD",
    "keyAlias": "my-key-alias",
    "keyPassword": "YOUR_KEY_PASSWORD"
  }
}
```

### 5.3 Build APK

```bash
expo build:android -t apk
```

### 5.4 Build AAB (for Google Play)

```bash
expo build:android -t app-bundle
```

## Step 6: Prepare for Google Play Submission

### 6.1 Required Information

1. **App Title**: Currency Converter
2. **Short Description**: (80 characters max)
   - Example: "Convert currencies with real-time exchange rates"
3. **Full Description**: (4000 characters max)
   - Describe features, benefits, etc.
4. **Screenshots**: 
   - At least 2 screenshots
   - Phone: 16:9 or 9:16 aspect ratio
   - Minimum: 320px, Maximum: 3840px
5. **Feature Graphic**: 1024x500px
6. **App Icon**: 512x512px (high-res icon)

### 6.2 Content Rating

Complete the content rating questionnaire in Google Play Console.

### 6.3 Privacy Policy

If your app collects data, you need a privacy policy URL. Since this app only fetches public exchange rates, you may not need one, but check Google's requirements.

## Step 7: Upload to Google Play Console

1. Go to [Google Play Console](https://play.google.com/console)
2. Create a new app
3. Fill in store listing details
4. Upload the AAB file from Step 4 or 5
5. Complete all required sections:
   - Store listing
   - Content rating
   - Pricing & distribution
   - App content
6. Submit for review

## Step 8: Testing Before Submission

### Test on Physical Device

1. Install Expo Go app on Android device
2. Run `npm start`
3. Scan QR code with Expo Go
4. Test all features:
   - Currency conversion
   - Currency selection
   - Settings
   - Navigation

### Test Production Build

1. Download the APK from EAS build
2. Install on Android device: `adb install app.apk`
3. Test all functionality

## Troubleshooting

### Build Fails

- Check Node.js version: `node --version` (should be 14+)
- Clear cache: `expo start -c`
- Reinstall dependencies: `rm -rf node_modules && npm install`

### Keystore Issues

- Ensure keystore file is in project root
- Verify passwords in app.json
- Keep keystore file secure and backed up

### API Issues

- Test internet connectivity
- Verify API endpoint is accessible
- Check for rate limits

## Version Updates

For future updates:

1. Increment `version` in `app.json`
2. Increment `versionCode` in `app.json` (Android)
3. Rebuild using same process
4. Upload new AAB to Google Play Console

## Support

For issues:
- Check [Expo Documentation](https://docs.expo.dev/)
- Check [EAS Build Documentation](https://docs.expo.dev/build/introduction/)
- Check [Google Play Console Help](https://support.google.com/googleplay/android-developer)

