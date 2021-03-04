import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import DetailScreen from "../screens/DetailScreen";
import Constants from "expo-constants";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: "#000",
            paddingTop: Constants.statusBarHeight,
          },
        }}
        initialRouteName="Home"
      >
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
