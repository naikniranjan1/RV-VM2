import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AdditionalDetailsFormData, RootStackParamList } from '../types/visitor';
import { Header } from '../components/ui/header';
import { PhotoUploadSection } from '../components/visitor/photo-upload-section';
import { VisitorForm } from '../components/visitor/visitor-form';
import { SubmitButton } from '../components/ui/submit-button';

type ScreenRouteProp = RouteProp<RootStackParamList, 'VisitorAdditionalDetails'>;
type ScreenNavigationProp = StackNavigationProp<RootStackParamList, 'VisitorAdditionalDetails'>;

export function VisitorAdditionalDetails() {
  const navigation = useNavigation<ScreenNavigationProp>();
  const route = useRoute<ScreenRouteProp>();
  const { formData: previousFormData } = route.params;

  const [formData, setFormData] = useState<AdditionalDetailsFormData>({
    whomToMeet: '',
    department: '',
    documentType: '',
    documentUri: '',
    visitorPhotoUri: '',
    sendNotification: true,
  });

  const handleSubmit = () => {
    if (!formData.whomToMeet || !formData.department || !formData.documentType) {
      alert('Please fill in all required fields');
      return;
    }

    navigation.navigate('VisitorSuccess', {
      formData: { ...previousFormData, ...formData },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        title="Additional Details" 
        onBack={() => navigation.goBack()} 
      />

      <VisitorForm
        formData={formData}
        setFormData={setFormData}
        renderBefore={() => (
          <PhotoUploadSection 
            type="visitor" 
            uri={formData.visitorPhotoUri}
            onPhotoSelected={(uri: string) => setFormData(prev => ({ 
              ...prev, 
              visitorPhotoUri: uri 
            }))}
          />
        )}
        renderAfter={() => formData.documentType && (
          <PhotoUploadSection 
            type="document" 
            uri={formData.documentUri}
            onPhotoSelected={(uri) => setFormData(prev => ({ 
              ...prev, 
              documentUri: uri 
            }))}
          />
        )}
      />

      <SubmitButton 
        onPress={handleSubmit}
        label="Submit"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
}); 