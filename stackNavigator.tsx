import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import HomeScreen from "./screens/home";
import QuizScreen from "./screens/quiz"
import ResultScreen from "./screens/result"
import React from "react";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
          <Stack.Screen name="Quiz" component={QuizScreen} options={{headerShown:false}} />
          <Stack.Screen name="Result" component={ResultScreen} options={{headerShown:false}} />
        </Stack.Navigator>
      </NavigationContainer>
   
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
