import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <DrawerItem
          label="Home"
          icon={({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          )}
          onPress={() => props.navigation.navigate('Home')}
        />
        <DrawerItem
          label="Profile"
          icon={({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          )}
          onPress={() => props.navigation.navigate('Profile')}
        />
        <DrawerItem
          label="Emergency Contact"
          icon={({ color, size }) => (
            <Ionicons name="call-outline" size={size} color={color} />
          )}
          onPress={() => props.navigation.navigate('EmergencyContact')}
        />
        <DrawerItem
          label="About Us"
          icon={({ color, size }) => (
            <Ionicons name="information-circle-outline" size={size} color={color} />
          )}
          onPress={() => props.navigation.navigate('AboutUs')}
        />
        <DrawerItem
          label="Settings"
          icon={({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          )}
          onPress={() => props.navigation.navigate('Settings')}
        />
        <View style={styles.separator} />
        <DrawerItem
          label="Sign Out"
          icon={({ color, size }) => (
            <Ionicons name="log-out-outline" size={size} color={color} />
          )}
          onPress={() => props.navigation.navigate('SignOut')}
          style={styles.signOutItem}
          labelStyle={styles.signOutLabel}
        />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 10,
  },
  signOutItem: {
    marginTop: 'auto',
  },
  signOutLabel: {
    color: '#FF3B30', // Red color for sign out
  },
}); 