import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Dashboard } from "../pages/Dashboard";
import { MediaDetails } from "../pages/MediaDetails";
import { MediaList } from "../pages/MediaList";
import { MediaPlayer } from "../pages/MediaPlayer";
import { Profile } from "../pages/Profile";

const App = createStackNavigator();

export const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: 'transparent' }
    }}
  >
    <App.Screen name="Dashboard" component={Dashboard}/>
    <App.Screen name="MediaDetails" component={MediaDetails}/>
    <App.Screen name="MediaList" component={MediaList} />
    <App.Screen name="MediaPlayer" component={MediaPlayer}/>
    <App.Screen name="Profile" component={Profile}/>
  </App.Navigator>
)