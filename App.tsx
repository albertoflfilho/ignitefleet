import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import { AppProvider, UserProvider } from '@realm/react';
import { SafeAreaProvider } from 'react-native-safe-area-context'; 
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import theme from './src/theme';

import { REALM_APP_ID } from '@env'

import { Home } from './src/screens/Home';
import { SignIn } from './src/screens/SignIn';
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';


export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  if (!fontsLoaded) {
    return (
      <Loading />
    );
  }

  return (
    <SafeAreaProvider>
    <AppProvider id={REALM_APP_ID}>
      <ThemeProvider theme={theme}>
        <StatusBar
          style="light"
          backgroundColor="transparent"
          translucent
        />
        <UserProvider fallback={SignIn}>
          <Routes />
        </UserProvider>
      </ThemeProvider>
    </AppProvider>
    </SafeAreaProvider>
  );
}