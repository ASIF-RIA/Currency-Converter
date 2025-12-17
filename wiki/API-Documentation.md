# API Documentation

This guide explains how the Currency Converter app integrates with the exchange rate API.

## API Provider

- Service: ExchangeRate-API
- Tier: Free (No API key required)
- Base URL: https://api.exchangerate-api.com/v4/latest/

## Features

- Free tier access without API key
- Support for 160+ currencies
- Hourly data updates
- High reliability and uptime
- No rate limiting for basic usage

## Currency Service Architecture

### File: services/currencyService.js

The app uses a singleton service pattern to manage API calls and caching.

```javascript
import axios from 'axios';

const API_BASE_URL = 'https://api.exchangerate-api.com/v4/latest';

class CurrencyService {
  constructor() {
    this.cache = {};
    this.cacheExpiry = 3600000; // 1 hour
  }
  
  // Methods...
}

export default new CurrencyService();
```

## Main Methods

### 1. getExchangeRates(baseCurrency)

Fetches exchange rates for a base currency.

Parameters:
- baseCurrency (string): Currency code (e.g., 'USD', 'EUR')

Returns:
- Object with base, rates, and date

Example:
```javascript
const data = await currencyService.getExchangeRates('USD');
// Returns:
// {
//   base: 'USD',
//   rates: { EUR: 0.92, GBP: 0.79, ... },
//   date: '2024-12-18'
// }
```

Caching:
- Results are cached for 1 hour
- Reduces API calls
- Improves performance
- Enables offline functionality

### 2. convertCurrency(amount, fromCurrency, toCurrency, rates)

Converts an amount between two currencies.

Parameters:
- amount (number): Amount to convert
- fromCurrency (string): Source currency code
- toCurrency (string): Target currency code  
- rates (object): Exchange rates data

Returns:
- Converted amount (number)

Example:
```javascript
const result = currencyService.convertCurrency(
  100,
  'USD',
  'EUR',
  ratesData
);
// Returns: 92.34
```

Conversion Logic:
1. If same currency return amount
2. If from base currency multiply by rate
3. If to base currency divide by rate
4. Otherwise convert via base currency

### 3. getAllCurrencies()

Returns the complete list of supported currencies.

Returns:
- Array of currency objects

Example:
```javascript
const currencies = currencyService.getAllCurrencies();
// Returns:
// [
//   { code: 'USD', name: 'US Dollar', symbol: '$' },
//   { code: 'EUR', name: 'Euro', symbol: '€' },
//   ...
// ]
```

## API Response Format

### Successful Response

```json
{
  "base": "USD",
  "date": "2024-12-18",
  "rates": {
    "AED": 3.67,
    "AFN": 70.50,
    "ALL": 92.50,
    "EUR": 0.92,
    "GBP": 0.79,
    ...
  }
}
```

### Error Handling

The service includes comprehensive error handling:

```javascript
try {
  const data = await currencyService.getExchangeRates('USD');
} catch (error) {
  // Error message shown to user
  Alert.alert('Error', error.message);
}
```

Common Errors:
- Network timeout
- Invalid currency code
- API temporarily unavailable

## Caching System

### How It Works

1. First Request: Fetches from API, stores in cache
2. Subsequent Requests: Returns cached data if less than 1 hour old
3. Expired Cache: Fetches fresh data, updates cache

### Cache Structure

```javascript
this.cache = {
  'USD': {
    data: { base: 'USD', rates: {...}, date: '2024-12-18' },
    timestamp: 1702896000000
  },
  'EUR': {
    data: { base: 'EUR', rates: {...}, date: '2024-12-18' },
    timestamp: 1702896000000
  }
}
```

### Benefits

- Faster response times
- Works offline with cached data
- Reduces battery usage
- Reduces API calls

## Smart Rate Change Detection

The app only updates the last updated timestamp when rates actually change:

```javascript
// Compare old vs new rates
let ratesChanged = false;
for (const currency in newRates) {
  if (oldRates[currency] !== newRates[currency]) {
    ratesChanged = true;
    break;
  }
}

// Only update timestamp if changed
if (ratesChanged) {
  setLastUpdated(new Date());
}
```

## Automatic 24-Hour Refresh

The app automatically refreshes rates every 24 hours:

```javascript
useEffect(() => {
  const checkAndRefresh = () => {
    if (lastUpdated) {
      const diffHours = (Date.now() - lastUpdated) / (1000 * 60 * 60);
      if (diffHours >= 24) {
        loadExchangeRates();
      }
    }
  };

  const interval = setInterval(checkAndRefresh, 60 * 60 * 1000);
  return () => clearInterval(interval);
}, [lastUpdated]);
```

## Supported Currencies

### Major Currencies
USD, EUR, GBP, JPY, CNY, INR, AUD, CAD, CHF, SGD

### Regional Coverage
- Africa: 30+ currencies
- Asia: 40+ currencies
- Europe: 35+ currencies
- Americas: 25+ currencies
- Middle East: 15+ currencies
- Oceania: 10+ currencies

See getAllCurrencies() for complete list.

## Rate Limits

Free Tier:
- No API key required
- Reasonable usage accepted
- Hourly rate updates
- No documented hard limits

Best Practices:
- Use caching (implemented)
- Avoid refetching unnecessarily
- Handle errors gracefully

## Data Privacy

- No user data sent to API
- Only currency codes transmitted
- No tracking or analytics
- Secure HTTPS connections

## Testing the API

### Manual Test

```javascript
// In your browser console or Node.js
fetch('https://api.exchangerate-api.com/v4/latest/USD')
  .then(res => res.json())
  .then(data => console.log(data));
```

### Expected Response Time
- Average: 200-500ms
- Cached: < 10ms

## Troubleshooting

### Issue: Failed to fetch exchange rates
Solutions:
- Check internet connection
- Verify API is accessible
- Check for network blocking (firewall, VPN)

### Issue: Stale data shown
Solutions:
- Clear app cache (Settings > Clear Cache)
- Wait for 24-hour auto-refresh
- Restart app

### Issue: Currency not found
Solutions:
- Check currency code is valid
- Ensure 3-letter ISO code (e.g., 'USD', not 'usd')
- Verify currency is in getAllCurrencies() list

## Future Enhancements

Potential API improvements:
- Multiple API provider fallback
- Historical rate data
- Rate change notifications
- Configurable cache duration
- Currency rate alerts

## Links

- API Documentation: exchangerate-api.com/docs
- Supported Currencies: exchangerate-api.com/docs/supported-currencies
- Status Page: status.exchangerate-api.com

---

## Related Documentation

- [Features](Features) - App features overview
- [Getting Started](Getting-Started) - Development setup
- [Project Structure](Project-Structure) - Code organization
