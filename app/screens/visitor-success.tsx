import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { RouteProp, useRoute } from '@react-navigation/native';
import { VisitorFormData, AdditionalDetailsFormData } from '../types/visitor';

type RootStackParamList = {
  VisitorSuccess: {
    formData: VisitorFormData & AdditionalDetailsFormData;
  };
};

type VisitorSuccessRouteProp = RouteProp<RootStackParamList, 'VisitorSuccess'>;

export function VisitorSuccess() {
  const route = useRoute<VisitorSuccessRouteProp>();
  const { formData } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration Successful!</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.subtitle}>Visitor Details:</Text>
        <Text>Name: {formData.name}</Text>
        <Text>Contact: {formData.contactNumber}</Text>
        <Text>Purpose: {formData.purposeOfVisit}</Text>
        <Text>Department: {formData.department}</Text>
        <Text>Meeting: {formData.whomToMeet}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  detailsContainer: {
    width: '100%',
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
}); 