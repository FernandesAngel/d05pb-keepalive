import * as S from "./styles";
import logoCompass from "../../assets/logoCompassDark.png";
import { Clock } from "../Clock";
import { Temperature } from "../Temperature";
export function HomeHeader() {
  return (
    <S.Container>
      <S.LogoContainer>
        <img src={logoCompass} alt="Logo compass" />
      </S.LogoContainer>
      <S.ClockContainer>
        <Clock />
      </S.ClockContainer>
      <S.TempContainer>
        <Temperature />
      </S.TempContainer>
    </S.Container>
  );
}
