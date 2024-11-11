import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import IntroScreen from "../screens/IntroScreen/IntroScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import SelectionScreen from "../screens/SelectionScreen/SelectionScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import InformationScreen from "../screens/InformationScreen/InformationScreen";

export default function AppStackNavigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="IntroScreen" component={IntroScreen} />
      <Stack.Screen name="SelectionScreen" component={SelectionScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="InformationScreen" component={InformationScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}
