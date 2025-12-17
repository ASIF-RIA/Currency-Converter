import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
  ScrollView,
} from 'react-native';
import currencyService from '../services/currencyService';

export default function HomeScreen({ navigation }) {
  const [amount, setAmount] = useState('1');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState('');
  const [exchangeRate, setExchangeRate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [rates, setRates] = useState(null);
  const [previousRates, setPreviousRates] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    loadExchangeRates();
  }, [fromCurrency]);

  useEffect(() => {
    if (rates && amount) {
      convertCurrency();
    }
  }, [amount, fromCurrency, toCurrency, rates]);

  // Auto-refresh every 24 hours
  useEffect(() => {
    const checkAndRefresh = () => {
      if (lastUpdated) {
        const now = new Date();
        const diffHours = (now - lastUpdated) / (1000 * 60 * 60);

        // Refresh if data is older than 24 hours
        if (diffHours >= 24) {
          console.log('Auto-refreshing exchange rates (24 hours passed)');
          loadExchangeRates();
        }
      }
    };

    // Check immediately on mount
    checkAndRefresh();

    // Set up interval to check every hour
    const interval = setInterval(checkAndRefresh, 60 * 60 * 1000); // Check every hour

    return () => clearInterval(interval);
  }, [lastUpdated, fromCurrency]);

  const loadExchangeRates = async () => {
    setLoading(true);
    try {
      const data = await currencyService.getExchangeRates(fromCurrency);

      // Check if rates have actually changed
      let ratesChanged = false;

      if (!previousRates || !previousRates.rates) {
        // First time loading, consider it as changed
        ratesChanged = true;
      } else if (data.base !== previousRates.base) {
        // Base currency changed
        ratesChanged = true;
      } else {
        // Compare exchange rates
        const oldRates = previousRates.rates;
        const newRates = data.rates;

        // Check if any rate has changed
        for (const currency in newRates) {
          if (oldRates[currency] !== newRates[currency]) {
            ratesChanged = true;
            break;
          }
        }
      }

      setRates(data);
      setPreviousRates(data);

      // Only update the timestamp if rates have actually changed
      if (ratesChanged) {
        setLastUpdated(new Date());
        console.log('Exchange rates changed - timestamp updated');
      } else {
        console.log('Exchange rates unchanged - timestamp preserved');
      }

      calculateRate(data);
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  };

  const calculateRate = (rateData) => {
    if (fromCurrency === toCurrency) {
      setExchangeRate(1);
    } else if (toCurrency === rateData.base) {
      setExchangeRate(1 / (rateData.rates[fromCurrency] || 1));
    } else {
      const rate = rateData.rates[toCurrency] || 1;
      setExchangeRate(rate);
    }
  };

  const convertCurrency = () => {
    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      setConvertedAmount('');
      return;
    }

    if (!rates) return;

    try {
      const result = currencyService.convertCurrency(
        parseFloat(amount),
        fromCurrency,
        toCurrency,
        rates
      );
      setConvertedAmount(result.toFixed(2));
      calculateRate(rates);
    } catch (error) {
      Alert.alert('Error', 'Failed to convert currency');
    }
  };

  const swapCurrencies = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  const getCurrencyName = (code) => {
    const currency = currencyService.getAllCurrencies().find(c => c.code === code);
    return currency ? currency.name : code;
  };

  const getCurrencySymbol = (code) => {
    const currency = currencyService.getAllCurrencies().find(c => c.code === code);
    return currency ? currency.symbol : code;
  };

  const formatUpdateTime = () => {
    if (!lastUpdated) return 'Never';

    const now = new Date();
    const diffMs = now - lastUpdated;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);

    if (diffMins < 1) return 'Just now';
    if (diffMins === 1) return '1 minute ago';
    if (diffMins < 60) return `${diffMins} minutes ago`;
    if (diffHours === 1) return '1 hour ago';
    if (diffHours < 24) return `${diffHours} hours ago`;

    return lastUpdated.toLocaleString();
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.converterCard}>
        {/* From Currency */}
        <View style={styles.currencySection}>
          <Text style={styles.label}>From</Text>
          <TouchableOpacity
            style={styles.currencyButton}
            onPress={() => navigation.navigate('CurrencySelect', {
              currentCurrency: fromCurrency,
              onSelect: (currency) => setFromCurrency(currency),
              title: 'Select Base Currency'
            })}
          >
            <Text style={styles.currencyCode}>{fromCurrency}</Text>
            <Text style={styles.currencyName}>{getCurrencyName(fromCurrency)}</Text>
          </TouchableOpacity>
          <View style={styles.inputContainer}>
            <Text style={styles.currencySymbol}>{getCurrencySymbol(fromCurrency)}</Text>
            <TextInput
              style={styles.amountInput}
              value={amount}
              onChangeText={setAmount}
              keyboardType="decimal-pad"
              placeholder="0.00"
              placeholderTextColor="#999"
            />
          </View>
        </View>

        {/* Swap Button */}
        <TouchableOpacity style={styles.swapButton} onPress={swapCurrencies}>
          <Text style={styles.swapIcon}>⇅</Text>
        </TouchableOpacity>

        {/* To Currency */}
        <View style={styles.currencySection}>
          <Text style={styles.label}>To</Text>
          <TouchableOpacity
            style={styles.currencyButton}
            onPress={() => navigation.navigate('CurrencySelect', {
              currentCurrency: toCurrency,
              onSelect: (currency) => setToCurrency(currency),
              title: 'Select Target Currency'
            })}
          >
            <Text style={styles.currencyCode}>{toCurrency}</Text>
            <Text style={styles.currencyName}>{getCurrencyName(toCurrency)}</Text>
          </TouchableOpacity>
          <View style={styles.resultContainer}>
            {loading ? (
              <ActivityIndicator size="large" color="#6200ee" />
            ) : (
              <Text style={styles.convertedAmount}>
                {convertedAmount ? `${getCurrencySymbol(toCurrency)} ${convertedAmount}` : '-'}
              </Text>
            )}
          </View>
        </View>

        {/* Exchange Rate Info */}
        {exchangeRate && !loading && (
          <View style={styles.rateInfo}>
            <Text style={styles.rateText}>
              1 {fromCurrency} = {exchangeRate.toFixed(4)} {toCurrency}
            </Text>
          </View>
        )}

        {/* Last Updated Time */}
        {lastUpdated && !loading && (
          <View style={styles.updateTimeContainer}>
            <Text style={styles.updateTimeText}>
              🕐 Last updated: {formatUpdateTime()}
            </Text>
          </View>
        )}
      </View>

      {/* Navigation Buttons */}
      <View style={styles.navButtons}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Settings')}
        >
          <Text style={styles.navButtonText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('About')}
        >
          <Text style={styles.navButtonText}>About</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentContainer: {
    padding: 20,
    paddingTop: 10,
  },
  converterCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  currencySection: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    fontWeight: '500',
  },
  currencyButton: {
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  currencyCode: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6200ee',
  },
  currencyName: {
    fontSize: 14,
    color: '#666',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#6200ee',
    paddingBottom: 8,
  },
  currencySymbol: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6200ee',
    marginRight: 8,
  },
  amountInput: {
    flex: 1,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    paddingVertical: 8,
  },
  swapButton: {
    alignSelf: 'center',
    backgroundColor: '#6200ee',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#6200ee',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  swapIcon: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  resultContainer: {
    minHeight: 60,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderBottomWidth: 2,
    borderBottomColor: '#e0e0e0',
    paddingBottom: 8,
  },
  convertedAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  rateInfo: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  rateText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  updateTimeContainer: {
    marginTop: 8,
    paddingTop: 8,
  },
  updateTimeText: {
    fontSize: 12,
    color: '#999',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  navButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  navButton: {
    backgroundColor: '#6200ee',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 8,
  },
  navButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});



