import { Link } from "expo-router";
import React from "react";
import { Text, View ,SafeAreaView  } from "react-native";
import Toast from 'react-native-toast-message';
import {StatusBar} from 'expo-status-bar'
export default  function  Home() {
  return (
    <SafeAreaView className="flex flex-1 items-center justify-center">
       <StatusBar style={"dark"} backgroundColor="transparent" translucent={true}/>
       <View>

        <Text>Hello</Text>
        <Link href='/cheackemail'>
         <Text>Login</Text>
        </Link>
        <Link href='/chat'>
          <Text>Chat</Text>
        </Link>
        <Toast />
       </View>
    </SafeAreaView>
  );
}
