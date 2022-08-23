import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from './styles';

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/isadfrn.png" alt="A girl with short hair" />
        <div>
          <span>Welcome,</span>
          <strong>Isabella Nunes</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
