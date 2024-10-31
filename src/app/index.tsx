import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import Toast from 'react-native-toast-message';
export default  function  Home() {
  return (
    <View className="flex flex-1 items-center justify-center">
      <Text>"Hello"</Text>
      <Link href='/cheackemail'>
        <Text>Login</Text>
      </Link>
      <Toast />
    </View>
  );
}
