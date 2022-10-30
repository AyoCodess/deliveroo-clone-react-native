import { View, Text, Image, TextInput } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className='bg-white pt-1 px-4'>
      <View className='flex-row pb-3 items-center  gap-2'>
        <Image
          source={{ uri: 'https://links.papareact.com/wru' }}
          className='h-7 w-7 bg-gray-300 p-4 rounded-full'
        />
        <View className='flex-1'>
          <Text className=' font-bold text-gray-400 text-xs'>Deliver Now</Text>
          <Text className='text-xl font-bold'>
            Current Location
            <AntDesign name='down' size={20} color='#00ccbb' />
          </Text>
        </View>
        <Feather name='user' size={35} color='#00ccbb' />
      </View>
      <View className='flex-row items-center space-x-2 pb-2'>
        <View className='flex-1 flex-row items-center p-3 space-x-2 bg-gray-200 '>
          <Ionicons name='ios-search' size={20} color='gray' />
          <TextInput
            placeholder='Restaurants and cuisines'
            keyboardType='default'
          />
        </View>
        <MaterialIcons
          name='settings-input-component'
          size={20}
          color='#00ccbb'
        />
      </View>
    </SafeAreaView>
  );
}
