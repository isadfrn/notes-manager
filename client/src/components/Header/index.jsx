import { Container, Profile } from './styles';

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/isadfrn.png" alt="A girl with short hair" />
        <div>
          <span>Welcome,</span>
          <strong>Isabella Nunes</strong>
        </div>
      </Profile>
    </Container>
  );
}
