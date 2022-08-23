import { Container, Form, Background } from './style';
import { Input } from '../../components/Input';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Button } from '../../components/Button';
import { Link, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { useState } from 'react';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert('Add info in all fields');
    }

    api
      .post('/users', { name, email, password })
      .then(() => {
        alert('User created');
        navigate('/');
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert('Can\t create');
        }
      });
  }

  return (
    <Container>
      <Background />
      <Form>
        <h1>Notes Manager</h1>
        <p>Manage your notes easily</p>
        <h2>Create your account</h2>
        <Input
          placeholder="Name"
          type="text"
          icon={FiUser}
          onChange={(event) => setName(event.target.value)}
        />
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
        <Button title="Sign up" onClick={handleSignUp} />

        <Link to="/">Back to log in page</Link>
      </Form>
    </Container>
  );
}
