import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default async function  Home() {
  const token = await AsyncStorage.getItem('token');
  return (
    <View className="flex flex-1 items-center justify-center">
      <Text>"Hello"</Text>
      <Link href='/cheackemail'>
        <Text>Login</Text>
      </Link>
      <Text>{token}</Text>
      <Toast />
    </View>
  );
}
