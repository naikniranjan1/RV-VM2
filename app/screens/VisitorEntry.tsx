import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { VisitorRegistration } from './visitor-registration';
import { VisitorAdditionalDetails } from './visitor-additional-details';
import { VisitorSuccess } from './visitor-success';
import { VisitorFormData, AdditionalDetailsFormData } from '../types/visitor';

const Stack = createStackNavigator<RootStackParamList>();

type RootStackParamList = {
  VisitorRegistration: undefined;
  VisitorAdditionalDetails: {
    formData: VisitorFormData;
  };
  VisitorSuccess: {
    formData: VisitorFormData & AdditionalDetailsFormData;
  };
};

const VisitorEntry = () => {
    return (
        <Stack.Navigator 
            initialRouteName="VisitorRegistration"
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: '#fff' },
                presentation: 'card',
                gestureEnabled: true,
            }}
        >
            <Stack.Screen 
                name="VisitorRegistration" 
                component={VisitorRegistration}
            />
            <Stack.Screen 
                name="VisitorAdditionalDetails" 
                component={VisitorAdditionalDetails}
            />
            <Stack.Screen 
                name="VisitorSuccess" 
                component={VisitorSuccess}
            />
        </Stack.Navigator>
    );
}

export default VisitorEntry;
