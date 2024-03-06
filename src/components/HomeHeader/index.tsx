import { TouchableOpacity } from 'react-native';
import { Power } from 'phosphor-react-native';
import { useUser, useApp } from '@realm/react';
import { Container, Greeting, Message, Name, Picture } from './styles';
import theme from '../../theme';

export function HomeHeader() {
  const user = useUser();
  const app = useApp();

  function handleLogout() {
    app.currentUser?.logOut();
  }

  return (
    <Container>
        <Picture source={{ uri: user?.profile.pictureurl }}
          placeholder="L184i9kCbIof00ayjZay~qj[ayj@"
        />
        <Greeting>
            <Message>Hello,</Message>
            <Name>{user?.profile.name}</Name>
        </Greeting>

        <TouchableOpacity activeOpacity={0.7} onPress={handleLogout}>
            <Power size={32} color={theme.COLORS.GRAY_400} />
        </TouchableOpacity>
    </Container>
  );
}