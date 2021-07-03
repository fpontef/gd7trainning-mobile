import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../pages/SignIn';

const Auth = createStackNavigator();

// TODO: avaliar uso do React.FC e tipagem ao inves de function CompName
export const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      // cardStyle: { backgroundColor: theme.colors.background }
      cardStyle: { backgroundColor: 'transparent' },
    }}
  >
    <Auth.Screen name='SignIn' component={SignIn} />
  </Auth.Navigator>
);
