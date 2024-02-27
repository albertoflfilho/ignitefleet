
import backgroundImg from '../../assets/background.png';
import { Button } from '../../components/Button';
import { Container, Title, Slogan } from './styles';

export function SignIn() {
  return (
    <Container source={backgroundImg}>
      <Title>Ignite Fleet</Title>
      <Slogan>The live stream dream!</Slogan>

      <Button title="Sign in with Google" onPress={() => {}} />
    </Container>
  );
}

