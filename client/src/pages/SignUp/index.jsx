import { Container, Form, Background } from './style';
import { Input } from '../../components/Input';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

export function SignUp() {
  return (
    <Container>
      <Background />
      <Form>
        <h1>Notes Manager</h1>
        <p>Manage your notes easily</p>
        <h2>Create your account</h2>
        <Input placeholder="Name" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Password" type="password" icon={FiLock} />
        <Button title="Sign up" />

        <Link to="/">Back to log in page</Link>
      </Form>
    </Container>
  );
}
