import { Text, View } from 'react-native'

import React from 'react'
import { Stack } from 'expo-router'

export default function AuthLayout() {
  return (
    <Stack screenOptions={{
      headerShown: false,
      contentStyle: { backgroundColor: 'white' }
    }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
     <Stack.Screen name="register" />

    </Stack>
  )
}