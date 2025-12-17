import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import currencyService from '../services/currencyService';

export default function CurrencySelectScreen({ route, navigation }) {
  const { currentCurrency, onSelect } = route.params;
  const [searchQuery, setSearchQuery] = useState('');
  const allCurrencies = currencyService.getAllCurrencies();

  const filteredCurrencies = allCurrencies.filter(currency =>
    currency.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    currency.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = (currencyCode) => {
    onSelect(currencyCode);
    navigation.goBack();
  };

  const renderCurrencyItem = ({ item }) => {
    const isSelected = item.code === currentCurrency;
    
    return (
      <TouchableOpacity
        style={[styles.currencyItem, isSelected && styles.selectedItem]}
        onPress={() => handleSelect(item.code)}
      >
        <View style={styles.currencyInfo}>
          <Text style={[styles.currencyCode, isSelected && styles.selectedText]}>
            {item.code}
          </Text>
          <Text style={[styles.currencyName, isSelected && styles.selectedText]}>
            {item.name}
          </Text>
        </View>
        <Text style={[styles.currencySymbol, isSelected && styles.selectedText]}>
          {item.symbol}
        </Text>
        {isSelected && (
          <View style={styles.checkmark}>
            <Text style={styles.checkmarkText}>✓</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search currency..."
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={setSearchQuery}
          autoCapitalize="none"
        />
      </View>
      <FlatList
        data={filteredCurrencies}
        renderItem={renderCurrencyItem}
        keyExtractor={(item) => item.code}
        style={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#333',
  },
  list: {
    flex: 1,
  },
  currencyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  selectedItem: {
    backgroundColor: '#e8e0f5',
  },
  currencyInfo: {
    flex: 1,
  },
  currencyCode: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  currencyName: {
    fontSize: 14,
    color: '#666',
  },
  currencySymbol: {
    fontSize: 18,
    color: '#6200ee',
    fontWeight: '600',
    marginRight: 12,
  },
  selectedText: {
    color: '#6200ee',
  },
  checkmark: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#6200ee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmarkText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


