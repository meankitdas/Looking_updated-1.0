import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "../navigation/AuthNavigator";


export default function AuthScreen() {
    return (
      <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
    )
}