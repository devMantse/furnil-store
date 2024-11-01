import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGetProducts } from '../../hooks/queries/products';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const { data: products = [], isFetching, isLoading } = useGetProducts();
  const router = useRouter();

  const renderProductItem = ({ item: product }) => (
    <TouchableOpacity
      key={product.id}
      className="bg-[#faf4f0b6] p-4 rounded-xl flex-1 m-2 items-center"
      onPress={() => {
        router.push(`/${product.id}`);
      }}
    >
      <View className="flex-col items-center gap-y-14 pt-8">
        <Image
          source={require('@/assets/images/chair.png')}
          className="w-28 h-28 "
          accessibilityLabel={product.name || 'Product Image'}
        />
        <Text className="text-sm text-center ">
          GHS {product.price || 'N/A'}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
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

        {/* Banner UI */}
        <View className="mt-10 bg-[#F7EDE5] p-5 rounded-xl flex-row items-center gap-x-10">
          <Image
            source={require('@/assets/images/chair.png')}
            className="w-28 h-28"
          />
          <View className="flex-col gap-y-5 flex-wrap overflow-hidden">
            <Text className="text-2xl w-2/5 font-semibold">
              Get your Special sale up to 50%
            </Text>
            <TouchableOpacity className="bg-[#D47222] w-1/2 items-center p-1 rounded-3xl">
              <Text className="text-sm text-white">Shop Now</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Product List UI */}
        {isFetching || isLoading ? (
          <View className="flex-1 justify-center items-center mt-5">
            <Text>Loading...</Text>
          </View>
        ) : (
          <FlatList
            data={products}
            renderItem={renderProductItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            contentContainerStyle={{ marginTop: 5 }}
            scrollEnabled={true}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
