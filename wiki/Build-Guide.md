# Build Guide

This document details the process for building the Currency Converter application for production.

## Prerequisites

- EAS CLI installed (npm install -g eas-cli)
- Expo account
- Configured eas.json file

## Build Configuration

The project uses EAS Build with the following profile in eas.json:

```json
{
  "build": {
    "production": {
      "android": {
        "buildType": "app-bundle"
      }
    }
  }
}
```

## Build Process

### 1. Login to EAS

```bash
eas login
```

Enter your Expo credentials when prompted.

### 2. Configure Project (First Time Only)

```bash
eas build:configure
```

Select Android as the platform.

### 3. Start Build

```bash
eas build --platform android --profile production
```

### 4. Build Steps (Automated)

The build process performs the following:
1. Uploads project code to Expo servers
2. Installs dependencies
3. Compiles JavaScript bundle
4. Generates Android App Bundle (.aab)
5. Signs the bundle with release keystore

### 5. Download

Once complete, the terminal will display a download link for the .aab file. Download this file for Google Play submission.

## Troubleshooting

### Build Fails
- Run npm install to ensure dependencies are correct
- Check for errors in the build logs provided by the link
- Ensure assets are correctly referenced in app.json

### Credentials Issues
- If keystore issues arise, allow EAS to manage credentials automatically
- Ensure you are logged in to the correct Expo account

## Post-Build

After downloading the .aab file:
1. Verify file size (typically 20-40 MB)
2. Upload to Google Play Console
3. Create a new release in the Production track
