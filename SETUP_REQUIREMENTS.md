# Complete Setup Requirements for Currency Converter App

## ✅ Current System Status

- **Node.js**: v22.20.0 ✅ (Required: v14+)
- **npm**: v10.9.3 ✅ (Comes with Node.js)

## 📋 Required Software & Tools

### 1. **Node.js** (REQUIRED)
- **Version**: v14.0.0 or higher (v16+ recommended)
- **Current**: v22.20.0 ✅
- **Download**: https://nodejs.org/
- **Verify**: `node --version`
- **Includes**: npm (Node Package Manager)

### 2. **npm** (Comes with Node.js)
- **Version**: v6.0.0 or higher
- **Current**: v10.9.3 ✅
- **Verify**: `npm --version`

### 3. **Expo CLI** (REQUIRED)
- **Install**: `npm install -g expo-cli`
- **Verify**: `expo --version`
- **Purpose**: Development server and build tools

### 4. **Git** (Optional but Recommended)
- **Download**: https://git-scm.com/downloads
- **Purpose**: Version control (already have if using GitHub)

## 📱 For Android Development

### Option A: Physical Android Device (Easiest)
- **Expo Go App**: Install from Google Play Store
- **Requirements**:
  - Android device (Android 5.0+)
  - Same Wi-Fi network as your computer
  - OR USB connection with USB debugging enabled

### Option B: Android Emulator (For Testing)
- **Android Studio**: https://developer.android.com/studio
- **Requirements**:
  - Android Studio installed
  - Android SDK (comes with Android Studio)
  - Android Virtual Device (AVD) created
  - Minimum 4GB RAM recommended

## 🌐 Internet Connection
- **Required**: Yes (for downloading packages and fetching exchange rates)
- **Purpose**: 
  - Installing npm packages
  - Fetching real-time currency exchange rates
  - Expo development server

## 💻 Project Dependencies (Auto-installed)

When you run `npm install`, these will be automatically installed:

### Core Dependencies
- **expo**: ~49.0.0 - Expo framework
- **react**: 18.2.0 - React library
- **react-native**: 0.72.10 - React Native framework

### Navigation
- **@react-navigation/native**: ^6.1.9 - Navigation library
- **@react-navigation/stack**: ^6.3.20 - Stack navigator
- **react-native-screens**: ~3.22.0 - Native screen components
- **react-native-safe-area-context**: 4.6.3 - Safe area handling
- **react-native-gesture-handler**: ~2.12.0 - Gesture handling

### Utilities
- **axios**: ^1.6.2 - HTTP client for API calls
- **expo-status-bar**: ~1.6.0 - Status bar component
- **expo-constants**: ~14.4.2 - App constants

### Development Dependencies
- **@babel/core**: ^7.20.0 - JavaScript compiler

## 🔧 Setup Steps

### Step 1: Install Node.js (if not installed)
1. Download from https://nodejs.org/
2. Install the LTS version
3. Verify: `node --version` and `npm --version`

### Step 2: Install Expo CLI
```bash
npm install -g expo-cli
```

### Step 3: Install Project Dependencies
```bash
cd "C:\Users\Asif\OneDrive\Desktop\Currency converter"
npm install
```

### Step 4: Fix Dependency Versions (if needed)
```bash
npx expo install --fix
```

### Step 5: Start Development Server
```bash
npm start
```

## 📦 For Building Production App (Google Play)

### Additional Tools Needed:

1. **EAS CLI** (Recommended)
   ```bash
   npm install -g eas-cli
   ```
   - **Purpose**: Cloud-based builds for Google Play
   - **Account**: Free Expo account required

2. **OR Android Studio** (For local builds)
   - Android SDK
   - Java Development Kit (JDK)
   - Gradle build tools

## ✅ Quick Verification Checklist

Run these commands to verify your setup:

```bash
# Check Node.js
node --version
# Should show: v14.0.0 or higher

# Check npm
npm --version
# Should show: v6.0.0 or higher

# Check Expo CLI
expo --version
# Should show: version number

# Check if dependencies are installed
cd "C:\Users\Asif\OneDrive\Desktop\Currency converter"
npm list --depth=0
# Should show all installed packages
```

## 🚀 Minimum System Requirements

### Windows (Your Current OS)
- **OS**: Windows 10 or higher ✅
- **RAM**: 4GB minimum (8GB recommended)
- **Storage**: 2GB free space
- **Internet**: Required for package installation and API calls

### For Android Emulator
- **RAM**: 8GB+ recommended
- **Storage**: Additional 10GB+ for Android Studio and SDK
- **CPU**: Multi-core processor recommended

## 📝 What You Already Have ✅

Based on your system:
- ✅ Node.js v22.20.0 (Excellent - latest version)
- ✅ npm v10.9.3 (Latest version)
- ✅ Windows 10/11
- ✅ Project dependencies installed
- ✅ Git (for version control)

## ⚠️ What You Might Need to Install

1. **Expo CLI** (if not installed globally):
   ```bash
   npm install -g expo-cli
   ```

2. **Expo Go App** (on Android device):
   - Download from Google Play Store
   - Free app for testing

3. **Android Studio** (only if using emulator):
   - Download from https://developer.android.com/studio
   - Large download (~1GB+)

## 🎯 Recommended Setup for Your Use Case

Since you want to:
- Develop the app
- Test quickly
- Build for Google Play

### Recommended Setup:
1. ✅ **Node.js & npm** - Already installed
2. ✅ **Expo CLI** - Install: `npm install -g expo-cli`
3. ✅ **Expo Go App** - Install on Android phone (easiest testing)
4. ✅ **EAS CLI** - Install: `npm install -g eas-cli` (for Google Play builds)

### Optional (if you want emulator):
5. **Android Studio** - Only if you want to test on emulator

## 🔍 Troubleshooting

### If `npm start` fails:
1. Check Node.js version: `node --version` (should be 14+)
2. Clear npm cache: `npm cache clean --force`
3. Delete node_modules and reinstall:
   ```bash
   rm -rf node_modules
   npm install
   ```

### If Expo CLI not found:
```bash
npm install -g expo-cli
```

### If dependencies are incompatible:
```bash
npx expo install --fix
```

## 📚 Additional Resources

- **Expo Documentation**: https://docs.expo.dev/
- **React Native Docs**: https://reactnative.dev/
- **Node.js Docs**: https://nodejs.org/docs/

## ✨ Summary

**You're almost ready!** You just need:
1. ✅ Node.js - Already have (v22.20.0)
2. ✅ npm - Already have (v10.9.3)
3. ⚠️ Expo CLI - Install: `npm install -g expo-cli`
4. ⚠️ Expo Go App - Install on Android device
5. ⚠️ EAS CLI - Install: `npm install -g eas-cli` (for builds)

That's it! You're ready to develop and build your app! 🚀


