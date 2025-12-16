import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Currency Converter</Text>
        <Text style={styles.version}>Version 1.0.0</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.description}>
            A simple and intuitive currency converter app that provides real-time
            exchange rates for over 20 major world currencies.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Features</Text>
          <Text style={styles.feature}>• Real-time exchange rates</Text>
          <Text style={styles.feature}>• Support for 20+ currencies</Text>
          <Text style={styles.feature}>• Easy currency selection</Text>
          <Text style={styles.feature}>• Quick swap between currencies</Text>
          <Text style={styles.feature}>• Clean and modern interface</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Data Source</Text>
          <Text style={styles.description}>
            Exchange rates are provided by exchangerate-api.com and are updated
            regularly to ensure accuracy.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Privacy</Text>
          <Text style={styles.description}>
            This app does not collect or store any personal information. All
            exchange rate data is fetched from public APIs.
          </Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2024 Currency Converter</Text>
          <Text style={styles.footerText}>All rights reserved</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  },
  version: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6200ee',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  feature: {
    fontSize: 14,
    color: '#666',
    lineHeight: 24,
    marginBottom: 4,
  },
  footer: {
    marginTop: 20,
    marginBottom: 40,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#999',
    marginBottom: 4,
  },
});

