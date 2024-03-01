import { useState } from 'react';
import { Container, Title, Slogan } from './styles';
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { Realm, useApp } from '@realm/react'

import backgroundImg from '../../assets/background.png'
import { Button } from '../../components/Button';

import { WEB_CLIENT_ID, IOS_CLIENT_ID } from '@env'
import { Alert } from 'react-native';

GoogleSignin.configure({
  scopes: ['email', 'profile'],
  webClientId: WEB_CLIENT_ID,
  iosClientId: IOS_CLIENT_ID
})

export function SignIn() {
  const [isAutenticating, setIsAuthenticanting] = useState(false)
  const app = useApp()

  async function handleGoogleSignIn() {
    try {
      setIsAuthenticanting(true)

      const { idToken } = await GoogleSignin.signIn()
      
      if(idToken) {
        const credentials = Realm.Credentials.jwt(idToken)

        await app.logIn(credentials)
      } else {
        Alert.alert('SignIn', "Unable to connect to your Google account.")
        setIsAuthenticanting(false)  
      }

    } catch (error) {
      console.log(error)
      Alert.alert('SignIn', "Unable to connect to your Google account.")
      setIsAuthenticanting(false)
    }
  }

  return (
    <Container source={backgroundImg}>
      <Title>Ignite Fleet</Title>
      <Slogan>Car use management</Slogan>

      <Button title='Entrar com Google' onPress={handleGoogleSignIn} isLoading={isAutenticating} />
    </Container>
  );
}