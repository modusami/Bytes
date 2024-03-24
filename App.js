import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import ExploreScreen from "./app/screens/ExploreScreen";
import ProfileScreen from "./app/screens/ProfileScreen";
import HomeScreen from "./app/screens/HomeScreen";
import SignInScreen from "./app/screens/SignInScreen";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

// Create the stack navigator

const Stack = createStackNavigator();

// Create the bottom tab navigator
const Tab = createBottomTabNavigator();

// Main app component
export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("general");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category.toLowerCase());
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {() => (
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                  let iconName;

                  if (route.name === "Home") {
                    iconName = "home";
                  } else if (route.name === "Explore") {
                    iconName = "search";
                  } else if (route.name === "Profile") {
                    iconName = "person";
                  }

                  return <Ionicons name={iconName} size={size} color={color} />;
                },
              })}
              tabBarOptions={{
                activeTintColor: "blue",
                inactiveTintColor: "gray",
              }}
            >
              <Tab.Screen name="Home">
                {(props) => (
                  <HomeScreen {...props} selectedCategory={selectedCategory} />
                )}
              </Tab.Screen>
              <Tab.Screen name="Explore">
                {(props) => (
                  <ExploreScreen
                    {...props}
                    selectedCategory={selectedCategory}
                    handleClick={handleCategoryChange}
                  />
                )}
              </Tab.Screen>
              <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
