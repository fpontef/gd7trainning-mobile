import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, ActivityIndicator } from 'react-native';
import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

// import { useAuth } from '../hooks/auth';

// temporário pra teste, pois deveria estar no hook useAuth
interface UserProp {
  user: object | null;
  loading: boolean;
}

export const Routes: React.FC = () => {
  // const { user, loading } = useAuth();
  const [data, setData] = useState<UserProp>({ user: null, loading: true });
  const fakeLoad = () => {
    setTimeout(() => {
      setData({ user: { name: 'Fulano', role: 2 }, loading: false });
    }, 1000);
  };
  useEffect(() => {
    fakeLoad();
  }, [fakeLoad]);

  if (data.loading) {
    return (
      <View
        style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}
      >
        <ActivityIndicator size='large' color='black' />
      </View>
    );
  }
  return (
    <NavigationContainer>
      {data.user ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};
