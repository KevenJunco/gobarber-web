import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background, AnimationContainer } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <AnimationContainer>
        <img src={logoImg} alt="GoBarber" />

        <form>
          <h1>Faça seu logon</h1>
          <Input name="email" icon={FiMail} placeholder="Email" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Entrar</Button>
          <a href="forgot">Esqueci minha senha</a>
        </form>
        <a href="sing-up">
          <FiLogIn />
          Criar conta
        </a>
      </AnimationContainer>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
