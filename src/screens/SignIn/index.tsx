import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

import { Realm, useApp } from '@realm/react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { Container, Title, Slogan } from './styles';

import backgroundImg from '../../assets/background.png';
import { Button } from '../../components/Button';

import { IOS_CLIENT_ID, WEB_CLIENT_ID, ANDROID_CLIENT_ID } from '@env';

WebBrowser.maybeCompleteAuthSession();

export function SignIn() {
  const [ isAuthenticating, setIsAuthenticating ] = useState(false);

  const app = useApp();

  const [_, response, googleSignIng] = Google.useAuthRequest({
    androidClientId: ANDROID_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
    scopes: ['profile', 'email']
  });

  function handleGoogleSignIn(){
    setIsAuthenticating(true);

    googleSignIng().then(response => {
      if(response?.type !== 'success') {
        setIsAuthenticating(false);
      }
    })
  }

  useEffect(() => {
    if(response?.type === 'success') {
      if(response.authentication?.idToken) {
        const credentials = Realm.Credentials.jwt(response.authentication.idToken);

        app.logIn(credentials).catch((error) => {
          console.log(error);
          Alert.alert('Entrar', 'Não foi possível conectar-se a sua conta google.')
          setIsAuthenticating(false);
        })
      } else {
        Alert.alert('Entrar', 'Não foi possível conectar-se a sua conta google.')
        setIsAuthenticating(false);
      }
    }
  },[response])

  return (
    <Container source={backgroundImg}>
      <Title>Ignite Fleet</Title>
      <Slogan>Car use management</Slogan>

      <Button 
        title="Sign in with Google" 
        onPress={handleGoogleSignIn} 
        isLoading={isAuthenticating}
      />
    </Container>
  );
}

