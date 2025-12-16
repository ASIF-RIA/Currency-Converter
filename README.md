# Currency Converter Mobile App

A simple and intuitive currency converter app built with React Native and Expo. The app provides real-time exchange rates for over 20 major world currencies.

## Features

- **Real-time Exchange Rates**: Fetches up-to-date exchange rates from exchangerate-api.com
- **20+ Currencies**: Support for major world currencies including USD, EUR, GBP, JPY, and more
- **Easy Navigation**: Simple 4-screen interface
- **Quick Swap**: Instantly swap between base and target currencies
- **Search Functionality**: Easy currency search and selection
- **Modern UI**: Clean and user-friendly interface

## Screens

1. **Home Screen**: Main converter interface with input/output fields
2. **Currency Selection Screen**: Search and select currencies
3. **Settings Screen**: App settings and cache management
4. **About Screen**: App information and features

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Android Studio (for Android builds)

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Run on Android:
```bash
npm run android
```

## Building for Google Play

### Using EAS Build (Recommended)

1. Install EAS CLI:
```bash
npm install -g eas-cli
```

2. Login to Expo:
```bash
eas login
```

3. Configure the project:
```bash
eas build:configure
```

4. Build for Android:
```bash
eas build --platform android
```

### Using Expo Build

1. Build APK:
```bash
expo build:android -t apk
```

2. Build AAB (for Google Play):
```bash
expo build:android -t app-bundle
```

### Manual Build

1. Generate a keystore:
```bash
keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

2. Update `app.json` with your keystore information

3. Build locally:
```bash
expo build:android
```

## Project Structure

```
Currency converter/
├── App.js                 # Main app component with navigation
├── screens/
│   ├── HomeScreen.js      # Main converter screen
│   ├── CurrencySelectScreen.js  # Currency selection
│   ├── SettingsScreen.js  # Settings
│   └── AboutScreen.js     # About page
├── services/
│   └── currencyService.js # API service for exchange rates
├── assets/                # App icons and images
├── app.json              # Expo configuration
└── package.json          # Dependencies
```

## API

The app uses [exchangerate-api.com](https://www.exchangerate-api.com/) for exchange rates. The free tier provides:
- Hourly updated rates
- No API key required
- Support for 160+ currencies

## Configuration

### Update App Information

Edit `app.json` to customize:
- App name
- Package name (Android)
- Version
- Icons and splash screens

### Android Package Name

The default package name is `com.currencyconverter.app`. To change it:
1. Update `android.package` in `app.json`
2. Update `bundleIdentifier` for iOS (if needed)

## Testing

Test the app on:
- Android emulator
- Physical Android device
- Expo Go app (for quick testing)

## Submission to Google Play

1. **Prepare Assets**:
   - App icon (512x512px)
   - Feature graphic (1024x500px)
   - Screenshots (at least 2)

2. **Build AAB**:
   ```bash
   eas build --platform android --profile production
   ```

3. **Sign the Bundle** (if not using EAS):
   - Use your keystore to sign the AAB

4. **Upload to Google Play Console**:
   - Create a new app
   - Upload the AAB file
   - Fill in store listing
   - Submit for review

## Troubleshooting

### Build Issues
- Ensure all dependencies are installed: `npm install`
- Clear cache: `expo start -c`
- Check Node.js version (should be 14+)

### API Issues
- Check internet connection
- Verify API endpoint is accessible
- Check rate limits (free tier has limits)

## License

This project is provided as-is for development purposes.

## Support

For issues or questions, please refer to:
- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)

