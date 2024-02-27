import backgroundImg from '../../assets/background.png';
import { Container, Title, Slogan } from './styles';

export function SignIn() {
  return (
    <Container source={backgroundImg}>
      <Title>Ignite Fleet</Title>
      <Slogan>Open up App.tsx to start working on your App!</Slogan>
    </Container>
  );
}

