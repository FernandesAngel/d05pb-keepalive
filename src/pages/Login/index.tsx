import * as S from "./styles";
import logoCompass from "../../assets/logoCompass.png";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FormEvent, useState } from "react";
import { useAuth } from "../../contexts/auth";

export function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { signIn, authError } = useAuth();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const regEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    event.preventDefault();
    if (password.length >= 6 && regEmail.test(user)) {
      signIn({ email: user, password });
      setError(false);
    }
    setError(true);
  }

  return (
    <S.Container>
      <S.ContainerLeft>
        <S.TitleContainer>
          <S.Title>Olá,</S.Title>
          <S.Description>
            Para continuar navegando de forma segura, efetue o login na rede.
          </S.Description>
        </S.TitleContainer>
        <S.Form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <Input
            variant="user"
            label="Usuário"
            type="text"
            value={user}
            onChange={(event) => setUser(event.target.value)}
            error={error}
          />
          <Input
            variant="password"
            label="Senha"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            error={error}
          />
          <S.ErrorMessageContainer>
            <S.ErrorMessage error={error || authError}>
              Ops, usuário ou senha inválidos. <br /> Tente novamente!
            </S.ErrorMessage>
          </S.ErrorMessageContainer>
          <Button type="submit">Continuar</Button>
        </S.Form>
      </S.ContainerLeft>
      <S.ContainerRight>
        <img src={logoCompass} alt="" />
      </S.ContainerRight>
    </S.Container>
  );
}
