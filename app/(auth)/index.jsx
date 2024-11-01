import { Button, ImageBackground, Text, View } from 'react-native'

import BgImg from '../../assets/images/login3.png'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'

export default function InitialScreen() {
  const router = useRouter()

  return (
    <View className="flex-1 items-center justify-center">
      <ImageBackground source={BgImg} resizeMode="cover" className="flex-1 p-10 justify-end w-full">
        <Text className="text-4xl font-bold text-white">Finding the Perfect Furniture for Your Home</Text>
        <View className="mt-5 flex flex-col gap-y-5">
          <TouchableOpacity className=" justify-center items-center p-2 rounded-3xl border border-white" onPress={
            () => router.push('/(auth)/login')
          }>
            <Text className="text-xl  text-white">Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={
              () => router.push('/(auth)/register')
            }
            className=" bg-[#D47222] justify-center items-center p-2 rounded-3xl">
            <Text className="text-base  text-white">Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}