import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';

interface Props {
  type: 'document' | 'visitor';
  uri: string;
  onPhotoSelected: (uri: string) => void;
}

export function PhotoUploadSection({ type, uri, onPhotoSelected }: Props) {
  const handleTakePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    
    if (status !== 'granted') {
      alert('Sorry, we need camera permissions to make this work!');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: type === 'visitor' ? [1, 1] : [4, 3],
      quality: 0.7,
    });

    if (!result.canceled && result.assets[0]) {
      onPhotoSelected(result.assets[0].uri);
    }
  };

  const handleUploadFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['image/*', ...(type === 'document' ? ['application/pdf'] : [])],
        copyToCacheDirectory: true,
      });

      if (result.assets?.[0]) {
        onPhotoSelected(result.assets[0].uri);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {type === 'document' ? 'Upload Document' : 'Visitor Photo (Optional)'}
      </Text>
      
      {uri ? (
        <View style={styles.preview}>
          {type === 'document' && uri.endsWith('.pdf') ? (
            <View style={styles.pdfPreview}>
              <MaterialIcons name="picture-as-pdf" size={48} color="#6B46C1" />
              <Text style={styles.documentName}>Document uploaded</Text>
            </View>
          ) : (
            <Image 
              source={{ uri }} 
              style={[styles.image, type === 'visitor' && styles.visitorPhoto]} 
              resizeMode={type === 'visitor' ? "cover" : "contain"}
            />
          )}
          <TouchableOpacity 
            style={styles.removeButton}
            onPress={() => onPhotoSelected('')}
          >
            <MaterialIcons name="close" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.buttons}>
          <TouchableOpacity 
            style={styles.button}
            onPress={handleTakePhoto}
          >
            <MaterialIcons name="camera-alt" size={24} color="#6B46C1" />
            <Text style={styles.buttonText}>Take Photo</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.button}
            onPress={handleUploadFile}
          >
            <MaterialIcons name="upload-file" size={24} color="#6B46C1" />
            <Text style={styles.buttonText}>Upload File</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 16,
    marginLeft: 4,
  },
  preview: {
    position: 'relative',
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#f8f4ff',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  image: {
    width: '100%',
    height: 200,
  },
  visitorPhoto: {
    aspectRatio: 1,
    height: undefined,
  },
  pdfPreview: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  documentName: {
    marginTop: 8,
    fontSize: 14,
    color: '#666',
  },
  removeButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f8f4ff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderStyle: 'dashed',
  },
  buttonText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#6B46C1',
    fontWeight: '500',
  },
}); 