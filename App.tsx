import { ThemeProvider } from 'styled-components/native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import theme from './src/theme';

import { SignIn } from './src/screens/SignIn';
import { Loading } from './src/components/Loading';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [ fontsLoaded ] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  if(!fontsLoaded) {
    return (
      <Loading />
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        style="light" 
        backgroundColor="transparent" 
        translucent 
      />
      <SignIn />
    </ThemeProvider>
  );
}