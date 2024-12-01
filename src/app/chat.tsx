import React, { useState, useEffect } from 'react';
import { Text, View ,Image, TouchableOpacity, Modal } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Link } from "expo-router";


const Chat = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [allUser, setAllUser] = useState([])
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return(
    <View className="flex-1 bg-gray-100 ">
      <View className='flex flex-row items-center justify-between  h-20 shadow-lg pt-4 bg-white'>
        <Image source={require('./assets/logo.png')} width={210} height={70} className="ml-2"></Image>
        <TouchableOpacity onPress={toggleModal} className="mr-2">
          <Entypo name="dots-three-vertical" size={25} />
        </TouchableOpacity>
        <Modal transparent={true} animationType="fade" visible={modalVisible} onRequestClose={toggleModal}>
          <TouchableOpacity style={{ flex: 1 }} onPress={toggleModal}>
            <View className="absolute top-12 right-4 bg-white shadow-lg rounded-md w-40">
              <Link href='/' onPress={() => { /* Handle Add Friend action */ }} className="p-4 border-b border-gray-200">
                <Text className="text-lg">Add Friend</Text>
              </Link>
              <Link href='/' onPress={() => { /* Handle My Profile action */ }} className="p-4 border-b border-gray-200">
                <Text className="text-lg">My Profile</Text>
              </Link>
              <Link href='/' onPress={() => { /* Handle Logout action */ }} className="p-4">
                <Text className="text-lg text-red-800">Logout</Text>
              </Link>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    {
       allUser.length === 0 && (
        <View className=' w-full h-3/4 flex items-center justify-center'>
          <MaterialCommunityIcons name='message-text-outline' size={70} className='text-slate-800 p-4'></MaterialCommunityIcons>
          <Text className='text-lg text-center text-slate-800'>Start exploring and find someone</Text>
          <Text className='text-lg text-center text-slate-800'> to chat with!</Text>
          <Link href='/searchUser' onPress={() => { /* Handle Logout action */ }} className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 mt-6 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                <Text className="text-lg ">Explore</Text>
            </Link>
        </View>
      )
    }
    </View>

  )
};

export default Chat;
