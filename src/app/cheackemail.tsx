import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { Button, Image,Text, TextInput, View ,Alert, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import {email} from './actions/UserActions'
import Toast from 'react-native-toast-message';
export default function Cheackemail() {
  const [email1, setEmail1] = useState('')
  const [abc, setAbc] = useState('');
  const router = useRouter()

  const handlePress = async() => {
    try {
      const res=await email({email:email1});
      setAbc(res.message);
      if(res.error){
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: res.message,
          visibilityTime: 1000,
        });
      }else{
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: res.message,
          visibilityTime: 2000,
        });
        router.push({
          pathname: '/checkpassword',
          params: { avatar: encodeURIComponent(res.data.profile_pic.toString()) ,id:res.data._id , name: res.data.name},
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View className="flex-1 bg-gray-100 ">
      <View className='flex  items-start justify-center py-3 h-20 shadow-lg pt-8 bg-white'>
      <Image source={require('./assets/logo.png')} width={210} height={70} className="mx-auto"></Image>
      </View>
      <View className="bg-white w-full max-w-sm mt-4  rounded overflow-hidden shadow-lg p-4 mx-auto">
        <View className='w-fit mx-auto rounded-full border-8 border-black mb-2'>
          <Icon name="user" size={70}  />
        </View>
        <Text className='text-xl text-primary font-bold mb-2 mx-auto'>Welcome to Chat App !</Text>
        <Text>Email :</Text>
        <TextInput placeholder="Enter Email" value={email1} onChangeText={email1=>setEmail1(email1)} className='bg-slate-100 px-2 py-1 rounded focus:outline-primary '></TextInput>
        <TouchableOpacity onPress={handlePress}  className="bg-primary text-lg px-4 py-1 rounded mt-2 text-white font-bold leading-relaxed tracking-wide"  ><Text className="text-white  font-bold  text-center leading-relaxed">Let's Go..</Text></TouchableOpacity>
        <View className="flex flex-row justify-center items-center">
          <Text className="my-2">Don't Have Account ? </Text><Link href='/register' className='text-secondary hover:text-primary hover:underline font-semibold'><Text>Register</Text></Link>
        </View>
      </View>
    </View>
  );
}
