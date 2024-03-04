import { TouchableOpacity } from 'react-native';
import { Power } from 'phosphor-react-native'; 
import { Container, Greeting, Message, Name } from './styles';
import theme from '../../theme';

export function HomeHeader() {
  return (
    <Container>
        <Greeting>
            <Message>Hello</Message>
            <Name>Alberto Lacerda</Name>
        </Greeting>

        <TouchableOpacity>
            <Power size={32} color={theme.COLORS.GRAY_400} />
        </TouchableOpacity>
    </Container>
  );
}