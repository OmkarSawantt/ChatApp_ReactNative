import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Chat = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      const savedToken = await AsyncStorage.getItem('token');
      setToken(savedToken);
    };

    fetchToken();
  }, []);

  return(
    <View className="flex flex-1 items-center justify-center">
      <Text>{token || 'Loading...'}</Text>
    </View>

  )
};

export default Chat;
