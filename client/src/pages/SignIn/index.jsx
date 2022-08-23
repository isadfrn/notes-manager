import { Container, Form, Background } from './style';
import { Input } from '../../components/Input';
import { FiMail, FiLock } from 'react-icons/fi';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { useState } from 'react';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <h1>Notes Manager</h1>
        <p>Manage your notes easily</p>
        <h2>Access your account</h2>
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          icon={FiLock}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button title="Log in" onClick={handleSignIn} />
        <Link to="/register">Create account</Link>
      </Form>
      <Background />
    </Container>
  );
}
