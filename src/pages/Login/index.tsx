import * as S from "./styles";
import logoCompass from "../../assets/logoCompass.png";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("ta indo");
    navigate("/home");
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
          <Input variant="user" label="Usuário" type="text" />
          <Input variant="password" label="Senha" type="password" />
          <Button type="submit">Continuar</Button>
        </S.Form>
      </S.ContainerLeft>
      <S.ContainerRight>
        <img src={logoCompass} alt="" />
      </S.ContainerRight>
    </S.Container>
  );
}
