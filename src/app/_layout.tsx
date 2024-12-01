import "../global.css";
import { Slot } from "expo-router";
import Toast from 'react-native-toast-message';
import {SocketProvider} from './redux/SocketContext'
import {Provider} from 'react-redux'
import { store } from './redux/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
export default function Layout() {
  return (
    <SafeAreaProvider>
    <Provider store={store}>
      <SocketProvider>
<StatusBar style="dark"  />
        <Slot />
        <Toast />
      </SocketProvider>
</Provider>
    </SafeAreaProvider>
  );
}
