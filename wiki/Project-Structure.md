# Project Structure

This document explains the organization of the Currency Converter codebase.

## Directory Overview

```
Currency-Converter/
├── App.js                         # Main app component & navigation
├── app.json                       # Expo configuration
├── package.json                   # Dependencies & scripts
├── eas.json                      # EAS Build configuration
├── babel.config.js               # Babel configuration
├── .gitignore                    # Git ignore rules
│
├── screens/                      # All screen components
│   ├── HomeScreen.js             # Main converter interface
│   ├── CurrencySelectScreen.js   # Currency selection
│   ├── SettingsScreen.js         # App settings
│   └── AboutScreen.js            # About information
│
├── services/                     # API & business logic
│   └── currencyService.js        # Currency API integration
│
├── assets/                       # App assets
│   ├── icon.png                  # App icon (1024x1024)
│   ├── adaptive-icon.png         # Android adaptive icon
│   ├── splash.png                # Splash screen
│   └── Screenshots/              # App screenshots
│
├── wiki/                         # GitHub Wiki content
│   ├── Home.md
│   ├── Getting-Started.md
│   └── ...
│
└── docs/                         # Documentation
    ├── README.md
    ├── BUILD_GUIDE.md
    ├── PRIVACY_POLICY.md
    └── ...
```

## Core Files

### App.js

Purpose: Main application component and navigation setup

Key Features:
- Stack Navigator configuration
- Screen definitions
- Navigation structure
- App-wide providers

```javascript
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screen imports
import HomeScreen from './screens/HomeScreen';
// ... other screens

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* ... other screens */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

### app.json

Purpose: Expo configuration for the app

Contains:
- App name and slug
- Version information
- Icon and splash screen paths
- Platform-specific settings
- Build configurations

Key Fields:
```json
{
  "expo": {
    "name": "Currency Converter",
    "version": "1.0.0",
    "icon": "./assets/icon.png",
    "android": {
      "package": "com.currencyconverter.app",
      "versionCode": 1
    }
  }
}
```

### package.json

Purpose: Dependencies and npm scripts

Dependencies:
- expo: ~54.0.0
- react: 19.1.0
- react-native: 0.81.5
- @react-navigation/native: ^6.1.9
- axios: ^1.6.2

Scripts:
- npm start: Start development server
- npm run android: Run on Android
- npm run ios: Run on iOS

## Screen Components

### HomeScreen.js

Purpose: Main currency conversion interface

Features:
- Amount input field
- From/To currency selection
- Conversion display
- Exchange rate information
- Last updated timestamp
- Currency swap button

State Management:
```javascript
const [amount, setAmount] = useState('1');
const [fromCurrency, setFromCurrency] = useState('USD');
const [toCurrency, setToCurrency] = useState('EUR');
const [convertedAmount, setConvertedAmount] = useState('');
const [exchangeRate, setExchangeRate] = useState(null);
const [rates, setRates] = useState(null);
const [lastUpdated, setLastUpdated] = useState(null);
```

Key Functions:
- loadExchangeRates(): Fetch rates from API
- convertCurrency(): Perform conversion
- swapCurrencies(): Swap from/to currencies
- formatUpdateTime(): Display relative time

### CurrencySelect Screen.js

Purpose: Select currency from list

Features:
- Search functionality
- Scrollable currency list
- Visual selection indicator
- Currency code, name, symbol display

Props:
- currentCurrency: Currently selected currency
- onSelect: Callback when currency selected
- title: Screen title

### SettingsScreen.js

Purpose: App settings and preferences

Features:
- Cache management
- App version display
- Navigation to About

### AboutScreen.js

Purpose: App information and credits

Features:
- App version
- Feature list
- Data source information
- Privacy policy summary

## Services

### currencyService.js

Purpose: Currency API integration and caching

Class: CurrencyService (Singleton)

Properties:
- cache: Stores API responses
- cacheExpiry: Cache duration (1 hour)

Methods:
- getExchangeRates(baseCurrency): Fetch rates
- convertCurrency(amount, from, to, rates): Convert
- getAllCurrencies(): Get currency list

Architecture:
```
User Input -> HomeScreen -> CurrencyService -> API
                |              |
            UI Update <- Cache/Response
```

## Configuration Files

### eas.json

Purpose: EAS Build configuration

Profiles:
- development: Development builds
- preview: Preview APK builds
- production: Production AAB builds

### babel.config.js

Purpose: Babel transpiler configuration

```javascript
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
```

## Assets Structure

### Icons

- icon.png: Main app icon (1024x1024)
- adaptive-icon.png: Android adaptive (1024x1024)
- splash.png: Splash screen (1284x2778)

### Screenshots

- Stored in assets/Screenshots/
- Used for Google Play listing

## State Management

### Approach

- React Hooks: useState, useEffect
- No Redux: Simple app, hooks sufficient
- Local state: Component-level
- Service layer: Shared logic

### Data Flow

```
API -> CurrencyService -> Cache
                |
           HomeScreen State
                |
           UI Components
```

## Navigation Structure

```
Stack Navigator
└── Home (Main)
    ├── Currency Select
    ├── Settings
    └── About
```

Navigation Pattern:
- Stack navigation (iOS/Android native feel)
- Programmatic navigation
- Parameter passing between screens

## Styling Approach

### Method

- StyleSheet API: React Native styles
- Material Design: Design principles
- Inline styles: Minimal
- Reusable styles: Shared constants

### Color Scheme

```javascript
Primary: #6200ee (Purple)
Secondary: #4A90E2 (Blue)
Background: #f5f5f5
Text: #333
Accent: #6200ee
```

## Code Organization Principles

### 1. Separation of Concerns
- Screens: UI components
- Services: Business logic
- Navigation: App structure

### 2. Single Responsibility
- Each file has one purpose
- Small, focused components
- Reusable services

### 3. DRY (Don't Repeat Yourself)
- Shared service for API calls
- Reusable currency selection screen
- Centralized styling

### 4. Clean Code
- Descriptive names
- Comments where needed
- Consistent formatting

## Build Output

### Development
- JavaScript bundle
- Source maps
- Debug symbols

### Production
- Optimized bundle
- Minified code
- AAB file for Google Play

## Dependencies Explained

### Core
- expo: Development framework
- react: UI library
- react-native: Mobile framework

### Navigation
- @react-navigation/native: Navigation core
- @react-navigation/stack: Stack navigation
- react-native-screens: Native screens
- react-native-gesture-handler: Gestures

### API
- axios: HTTP client

### Utilities
- expo-constants: App constants
- expo-status-bar: Status bar control

## Best Practices Used

1. Component Structure: Clear, organized
2. Error Handling: Try-catch blocks
3. Loading States: User feedback
4. Caching: Performance optimization
5. Code Comments: Where needed
6. Consistent Naming: camelCase, descriptive

## File Naming Conventions

- Components: PascalCase (HomeScreen.js)
- Services: camelCase (currencyService.js)
- Config: lowercase (package.json)
- Docs: UPPERCASE (README.md)

---

## Related Documentation

- [Getting Started](Getting-Started) - Development setup
- [API Documentation](API-Documentation) - API integration
- [Build Guide](Build-Guide) - Production builds
