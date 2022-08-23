import { Container, Form, Background } from './style';
import { Input } from '../../components/Input';
import { FiMail, FiLock } from 'react-icons/fi';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Notes Manager</h1>
        <p>Manage your notes easily</p>
        <h2>Access your account</h2>
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Password" type="password" icon={FiLock} />
        <Button title="Log in" />
        <Link to="/register">Create account</Link>
      </Form>
      <Background />
    </Container>
  );
}
