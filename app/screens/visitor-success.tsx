import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from './VisitorEntry';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  route: RouteProp<RootStackParamList, 'VisitorSuccess'>;
}

export function VisitorSuccess({ route }: Props) {
  const { formData } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.successIcon}>
          <Ionicons name="checkmark-circle" size={80} color="#4CAF50" />
        </View>
        
        <Text style={styles.title}>Registration Successful!</Text>
        
        <View style={styles.detailsContainer}>
          <DetailRow label="Name" value={formData.name} />
          <DetailRow label="Contact" value={formData.contact} />
          <DetailRow label="Purpose" value={formData.purpose} />
          <DetailRow label="Department" value={formData.department} />
          <DetailRow label="Meeting" value={formData.meeting} />
        </View>
      </View>
    </SafeAreaView>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.detailRow}>
      <Text style={styles.label}>{label}:</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  successIcon: {
    marginTop: 40,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  detailsContainer: {
    width: '100%',
    backgroundColor: '#F5F5F5',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  detailRow: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  label: {
    flex: 1,
    fontWeight: '600',
    color: '#666',
    fontSize: 16,
  },
  value: {
    flex: 2,
    color: '#333',
    fontSize: 16,
  },
}); 