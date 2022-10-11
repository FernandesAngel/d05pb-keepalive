import { MouseEvent } from "react";
import { useAuth } from "../../contexts/auth";
import { Timer } from "../Timer";
import * as S from "./styles";

export function Footer() {
  const { signOut, data } = useAuth();

  function handleLogout(
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) {
    event.preventDefault();
    signOut();
  }
  return (
    <S.Container>
      <S.Content>
        <S.ContentLeft>
          <S.WelcomeMessage>
            Bem-vindo(a), <br />
            <b>{data.user.name.split(" ")[0]}</b>
          </S.WelcomeMessage>
          <p>
            Essa janela do navegador é usada para manter sua sessão de
            autenticação ativa.
            <br /> Deixe-a aberta em segundo plano e abra uma nova janela para
            continuar a navegar.
          </p>
        </S.ContentLeft>
        <S.ContentRight>
          <S.TimerContainer>
            <S.TimerLabel>
              Application <br /> refresh in
            </S.TimerLabel>
            <Timer time={Number(import.meta.env.VITE_TIMER)} />
          </S.TimerContainer>
        </S.ContentRight>
      </S.Content>
      <S.Navigation>
        <S.NavigateButton href="https://www.google.com" target="_blank">
          Continuar <br /> Navegando
        </S.NavigateButton>
        <S.LogoutButton onClick={(event) => handleLogout(event)}>
          Logout
        </S.LogoutButton>
      </S.Navigation>
    </S.Container>
  );
}
