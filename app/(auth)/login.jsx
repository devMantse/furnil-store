import { Text, TextInput, View } from 'react-native'

import { Image } from 'expo-image'
import Logo from '../../assets/images/splash.png'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'

export default function LoginScreen() {
    const router = useRouter()

  return (
    <View className="flex-1 items-center justify-center p-10">

     <TextInput className="h-12  w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
      placeholder="Email"
      />
       <TextInput className="h-12 w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
      placeholder="Password"
      />
      <Image
          source={require('@/assets/images/splash.png')}
        />


       <TouchableOpacity
            onPress={
              () => router.push('/(tabs)/')
            }
            className="w-full bg-[#D47222] justify-center items-center p-2 rounded-3xl">
            <Text className="text-base  text-white">Get Started</Text>
          </TouchableOpacity>
    </View>
  )
}
