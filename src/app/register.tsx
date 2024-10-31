import {Image, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Feather';
import { Link, useRouter } from "expo-router";
import { registerUser } from './actions/UserActions';
import Toast from 'react-native-toast-message';
export default function Register ()  {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [conPassword,setConPassword]=useState('')
  const router = useRouter()
  const handlePress = async() => {
    try {
      if(password===conPassword){
        const res = await registerUser({name:name,email:email,password:password});
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
          router.push('/cheackemail');
        }
      }else{
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2:'Passwords are no Matching',
          visibilityTime: 1000,
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

      <Text>Name :</Text>
      <TextInput placeholder="Enter Email" value={name} onChangeText={name=>setName(name)} className='bg-slate-100 px-2 py-1 rounded focus:outline-primary '></TextInput>

      <Text>Email :</Text>
      <TextInput placeholder="Enter Email" value={email} onChangeText={email=>setEmail(email)} className='bg-slate-100 px-2 py-1 rounded focus:outline-primary '></TextInput>

      <Text>Password :</Text>
      <TextInput placeholder="Enter Password" secureTextEntry={true}  value={password} onChangeText={password=>setPassword(password)} className='bg-slate-100 px-2 py-1 rounded focus:outline-primary '></TextInput>

      <Text>Confirm Password :</Text>
      <TextInput placeholder="Confirm your Password" secureTextEntry={true}  value={conPassword} onChangeText={conpassword=>setConPassword(conpassword)} className='bg-slate-100 px-2 py-1 rounded focus:outline-primary '></TextInput>

      <TouchableOpacity onPress={handlePress}  className="bg-primary text-lg px-4 py-1 rounded mt-2 text-white font-bold leading-relaxed tracking-wide"  ><Text className="text-white  font-bold  text-center leading-relaxed">Register</Text></TouchableOpacity>
        <View className="flex flex-row justify-center items-center">
          <Text className="my-2">Already't Have Account ? </Text><Link href='/cheackemail' className='text-secondary hover:text-primary hover:underline font-semibold'><Text>Login</Text></Link>
        </View>

      </View>
    </View>
  )
}
