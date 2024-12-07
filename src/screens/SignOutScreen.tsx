import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../hooks/useAuth'; // You'll need to implement this

export function SignOutScreen() {
  const navigation = useNavigation();
  const { signOut } = useAuth();

  useEffect(() => {
    async function handleSignOut() {
      await signOut();
      // Navigate to login or auth screen after signing out
      navigation.reset({
        index: 0,
        routes: [{ name: 'Auth' }],
      });
    }

    handleSignOut();
  }, []);

  return null; // This screen doesn't render anything as it immediately triggers sign out
} 