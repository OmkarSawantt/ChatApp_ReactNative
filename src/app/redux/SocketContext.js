// SocketContext.js
import React, { createContext, useState, useEffect } from 'react';
import io from 'socket.io-client';
import AsyncStorage from '@react-native-async-storage/async-storage'; // AsyncStorage for token storage in RN
import { useSelector } from 'react-redux';

// Create Context
export const SocketContext = createContext(null);

export const SocketProvider = ({ children }) => {
  const [socketConnection, setSocketConnection] = useState(null);
  const user = useSelector(state => state.user);

  useEffect(() => {
    const setupSocket = async () => {
      if (user) {
        const token = await AsyncStorage.getItem('token');
        console.log(token);


        const socket = io('https://chat-backend-z2ic.onrender.com', {
          auth: { token },
        });

        socket.on('connect', () => {
          console.log('Connected to socket');
        });

        socket.on('disconnect', () => {
          console.log('Disconnected from socket');
        });

        setSocketConnection(socket);

        // Cleanup when component is unmounted
        return () => {
          socket.disconnect();
        };
      }
    };

    setupSocket();
  }, [user]);

  return (
    <SocketContext.Provider value={socketConnection}>
      {children}
    </SocketContext.Provider>
  );
};
