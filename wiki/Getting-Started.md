# Getting Started

This guide provides instructions for setting up the Currency Converter application in a local development environment.

## Prerequisites

The following software is required:

- Node.js version 14 or higher
- npm or yarn package manager (included with Node.js)
- Expo CLI (Install using npm install -g expo-cli)
- Android Studio for Android builds

## Installation

### 1. Repository Clone

```bash
git clone https://github.com/ASIF-RIA/Currency-Converter.git
cd Currency-Converter
```

### 2. Dependency Installation

```bash
npm install
```

This command installs all required packages including React Native, Expo, and navigation libraries.

### 3. Development Server

```bash
npm start
```

This command starts the Expo development server. A QR code will appear in the terminal.

### 4. Android Execution

```bash
npm run android
```

Alternatively, press 'a' in the Expo terminal to launch on the Android emulator.

### 5. iOS Execution (macOS only)

```bash
npm run ios
```

Alternatively, press 'i' in the Expo terminal.

## Development Commands

```bash
# Start development server
npm start

# Run on Android platform
npm run android

# Run on iOS platform
npm run ios

# Run on web browser
npm run web

# Build production Android package
eas build --platform android --profile production
```

## Project Structure

```
Currency-Converter/
├── App.js                 # Main application component
├── screens/              # Screen components
│   ├── HomeScreen.js
│   ├── CurrencySelectScreen.js
│   ├── SettingsScreen.js
│   └── AboutScreen.js
├── services/             # API services
│   └── currencyService.js
├── assets/               # Images, icons, fonts
├── app.json              # Expo configuration
├── package.json          # Dependencies
└── eas.json             # EAS Build configuration
```

## Application Testing

1. Home Screen: Test currency conversion with various amounts
2. Currency Selection: Search and select from available currencies
3. Settings: Access cache management and application information
4. About: Review application features and privacy policy

## Troubleshooting

### Build Issues

```bash
# Clear cache and reinstall dependencies
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Expo Issues

```bash
# Clear Expo cache
expo start -c
```

### Android Issues

- Verify Android Studio installation
- Confirm Android SDK configuration
- Ensure emulator is running

## Next Steps

- [Features](Features) - Review application capabilities
- [API Documentation](API-Documentation) - Understand API integration
- [Build Guide](Build-Guide) - Create production builds
- [Google Play Submission](Google-Play-Submission) - Publish to Google Play Store

## Support

- Review GitHub Issues
- Contact: rakibulasif84@gmail.com
