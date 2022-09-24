import * as S from "./styles";
import logoCompass from "../../assets/logoCompass.png";

export function Login() {
  return (
    <S.Container>
      <S.ContainerLeft>
        <S.TitleContainer>
          <S.Title>Olá,</S.Title>
          <S.Description>
            Para continuar navegando de forma segura, efetue o login na rede.
          </S.Description>
        </S.TitleContainer>
      </S.ContainerLeft>
      <S.ContainerRight>
        <img src={logoCompass} alt="" />
      </S.ContainerRight>
    </S.Container>
  );
}
