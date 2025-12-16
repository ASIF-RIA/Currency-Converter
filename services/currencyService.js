import axios from 'axios';

// Using exchangerate-api.com (free tier, no API key required)
const API_BASE_URL = 'https://api.exchangerate-api.com/v4/latest';

class CurrencyService {
  constructor() {
    this.cache = {};
    this.cacheExpiry = 3600000; // 1 hour in milliseconds
  }

  async getExchangeRates(baseCurrency = 'USD') {
    const cacheKey = baseCurrency;
    const cached = this.cache[cacheKey];

    // Return cached data if still valid
    if (cached && Date.now() - cached.timestamp < this.cacheExpiry) {
      return cached.data;
    }

    try {
      const response = await axios.get(`${API_BASE_URL}/${baseCurrency}`);
      const data = {
        base: response.data.base,
        rates: response.data.rates,
        date: response.data.date,
      };

      // Cache the data
      this.cache[cacheKey] = {
        data,
        timestamp: Date.now(),
      };

      return data;
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
      throw new Error('Failed to fetch exchange rates. Please check your internet connection.');
    }
  }

  convertCurrency(amount, fromCurrency, toCurrency, rates) {
    if (fromCurrency === toCurrency) {
      return amount;
    }

    // If converting from base currency
    if (fromCurrency === rates.base) {
      return amount * (rates.rates[toCurrency] || 1);
    }

    // If converting to base currency
    if (toCurrency === rates.base) {
      return amount / (rates.rates[fromCurrency] || 1);
    }

    // Convert via base currency
    const fromRate = rates.rates[fromCurrency] || 1;
    const toRate = rates.rates[toCurrency] || 1;
    return (amount / fromRate) * toRate;
  }

  getAllCurrencies() {
    return [
      { code: 'USD', name: 'US Dollar', symbol: '$' },
      { code: 'EUR', name: 'Euro', symbol: '€' },
      { code: 'GBP', name: 'British Pound', symbol: '£' },
      { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
      { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' },
      { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$' },
      { code: 'CHF', name: 'Swiss Franc', symbol: 'CHF' },
      { code: 'CNY', name: 'Chinese Yuan', symbol: '¥' },
      { code: 'INR', name: 'Indian Rupee', symbol: '₹' },
      { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$' },
      { code: 'HKD', name: 'Hong Kong Dollar', symbol: 'HK$' },
      { code: 'NZD', name: 'New Zealand Dollar', symbol: 'NZ$' },
      { code: 'KRW', name: 'South Korean Won', symbol: '₩' },
      { code: 'MXN', name: 'Mexican Peso', symbol: 'Mex$' },
      { code: 'BRL', name: 'Brazilian Real', symbol: 'R$' },
      { code: 'ZAR', name: 'South African Rand', symbol: 'R' },
      { code: 'RUB', name: 'Russian Ruble', symbol: '₽' },
      { code: 'TRY', name: 'Turkish Lira', symbol: '₺' },
      { code: 'AED', name: 'UAE Dirham', symbol: 'د.إ' },
      { code: 'SAR', name: 'Saudi Riyal', symbol: '﷼' },
    ];
  }
}

export default new CurrencyService();

