import { Text, View } from 'react-native'

import { Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import SkeletonLoading from 'expo-skeleton-loading'
import { useGetProduct } from '../hooks/queries/products';
import { useLocalSearchParams } from 'expo-router';

export default function ProductScreen() {

  const { productId } = useLocalSearchParams();
  console.log("🚀 ~ ProductScreen ~ productId:", productId)

  const { data: product, isLoading } = useGetProduct(productId);

  const productSkeleton = () => (
 <SkeletonLoading background={"#adadad"} highlight={"#ffffff"}>
   <View className="bg-white p-4 rounded-xl">
            <View className="flex-row items-center justify-between mb-10 pt-8">
              <Text className="flex- 1"  style={{ backgroundColor: "#adadad", width: '20%', height: 8, borderRadius: 5, marginTop: 3 }}/>
              <Text className="flex- 1" style={{ backgroundColor: "#adadad", width: '20%', height: 8, borderRadius: 5, marginTop: 3 }}/>

            </View>
            {/* DIVIDER */}
            <View className='border-b border-gray-300'  style={{ width: 100, height: 100, backgroundColor: "#adadad", borderRadius: 10 }} />

            {/* DESCRIPTION */}
            <View className="py-4">
              <Text style={{ width: 100, height: 100, backgroundColor: "#adadad", borderRadius: 10 }} />
                           <Text  style={{ width: 100, height: 100, backgroundColor: "#adadad", borderRadius: 10 }}/>

            </View>

            {/* DIVIDER */}
            <View className='border-b border-gray-300' />

            {/* MATERIAL */}
            <View className="py-4">
              <Text  style={{ width: 100, height: 100, backgroundColor: "#adadad", borderRadius: 10 }}/>
              <Text  style={{ width: 100, height: 100, backgroundColor: "#adadad", borderRadius: 10 }}/>
            </View>



          </View>
        {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ width: 100, height: 100, backgroundColor: "#adadad", borderRadius: 10 }} />

          <View style={{ flex:1, marginLeft: 10 }}>
              <View style={{ backgroundColor: "#adadad", width: "50%", height: 10, marginBottom: 3, borderRadius: 5 }} />
              <View style={{ backgroundColor: "#adadad", width: '20%', height: 8, borderRadius: 5 }} />
              <View style={{ backgroundColor: "#adadad", width: '15%', height: 8, borderRadius: 5, marginTop: 3 }} />
          </View>
        </View> */}
    </SkeletonLoading>
  )


  return (
    <SafeAreaView className="flex-1 bg-[#FAF4F0]">
      <View className="px-5">
        {/* Navigation UI */}
        <View className="flex-row justify-between items-center">
          <Ionicons name="menu" size={24} color="black" />
          <Text>Furnil Store</Text>
          <View className="flex-row gap-x-2">
            <Ionicons name="search" size={24} color="black" />
            <Ionicons name="cart-outline" size={24} color="black" />
          </View>
        </View>
        <View className="flex-col gap-y-14">

          <View>
            <Image
              source={require('@/assets/images/chair.png')}
              className="w-full h-96"
              accessibilityLabel={product?.data?.name || 'Product Image'}
            />
          </View>

          {/* PRODUCT DETAILS */}
        {
          isLoading ? productSkeleton() : (
              <View className="bg-white p-4 rounded-xl">
            <View className="flex-row items-center justify-between mb-10 pt-8">
              <Text className="flex- 1 flex-wrap font-medium text-xl">{product?.name}</Text>
              <Text className="flex- 1 flex-wrap font-medium text-xl">{`GHS ${product?.price}`}</Text>

            </View>
            {/* DIVIDER */}
            <View className='border-b border-gray-300' />

            {/* DESCRIPTION */}
            <View className="py-4">
              <Text className="text-lg mb-2">Description:</Text>
              <Text className="text-slate-600">{product?.description}</Text>
            </View>

            {/* DIVIDER */}
            <View className='border-b border-gray-300' />

            {/* MATERIAL */}
            <View className="py-4">
              <Text className="text-lg mb-2">Material:</Text>
              <Text className="text-slate-600">{product?.material}</Text>
            </View>



          </View>
          )
        }
        </View>
      </View>
    </SafeAreaView>
  )
}