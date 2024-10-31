import "../global.css";
import { Slot } from "expo-router";
import Toast from 'react-native-toast-message';
import {SocketProvider} from './redux/SocketContext'
import {Provider} from 'react-redux'
import { store } from './redux/store';
export default function Layout() {
  return (
    <SocketProvider>
      <Provider store={store}>
        <Slot />
        <Toast />
      </Provider>
    </SocketProvider>
  );
}
