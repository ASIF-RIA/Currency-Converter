import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import currencyService from '../services/currencyService';

export default function SettingsScreen({ navigation }) {
  const clearCache = () => {
    Alert.alert(
      'Clear Cache',
      'This will clear cached exchange rates. Rates will be fetched fresh on next use.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Clear',
          onPress: () => {
            currencyService.cache = {};
            Alert.alert('Success', 'Cache cleared successfully');
          },
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Data</Text>
        <TouchableOpacity style={styles.settingItem} onPress={clearCache}>
          <Text style={styles.settingLabel}>Clear Cache</Text>
          <Text style={styles.settingDescription}>
            Clear cached exchange rates
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Information</Text>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Exchange rates are updated hourly</Text>
          <Text style={styles.infoDescription}>
            Rates are fetched from exchangerate-api.com
          </Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Supported Currencies</Text>
          <Text style={styles.infoDescription}>
            {currencyService.getAllCurrencies().length} currencies available
          </Text>
        </View>
      </View>

      <View style={styles.section}>
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
  section: {
    backgroundColor: '#fff',
    marginTop: 20,
    marginHorizontal: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    padding: 16,
    paddingBottom: 8,
    textTransform: 'uppercase',
  },
  settingItem: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  settingDescription: {
    fontSize: 14,
    color: '#666',
  },
  infoItem: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  infoDescription: {
    fontSize: 14,
    color: '#666',
  },
  navButton: {
    backgroundColor: '#6200ee',
    margin: 16,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  navButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});


