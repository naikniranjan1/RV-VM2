import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';
import { HomeScreen } from '../screens/HomeScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { EmergencyContactScreen } from '../screens/EmergencyContactScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { SignOutScreen } from '../screens/SignOutScreen';
import { CustomDrawerContent } from './CustomDrawerContent';

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          width: Math.min(width * 0.7, 300),
          backgroundColor: '#fff',
        },
        headerShown: false,
      }}
    >
      <Drawer.Screen 
        name="Home" 
        component={HomeScreen} 
      />
      <Drawer.Screen 
        name="Profile" 
        component={ProfileScreen} 
      />
      <Drawer.Screen 
        name="EmergencyContact" 
        component={EmergencyContactScreen} 
      />
      <Drawer.Screen 
        name="AboutUs" 
        component={AboutScreen} 
      />
      <Drawer.Screen 
        name="Settings" 
        component={SettingsScreen} 
      />
      <Drawer.Screen 
        name="SignOut" 
        component={SignOutScreen} 
      />
    </Drawer.Navigator>
  );
} 