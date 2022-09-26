import { Footer } from "../../components/HomeFooter";
import { HomeHeader } from "../../components/HomeHeader";

import * as S from "./styles";

export function Home() {
  return (
    <S.Container>
      <HomeHeader />
      <S.Content>
        <S.ContentRight>
          <S.MainTextTop>Our mission is</S.MainTextTop>
          <S.SubText>Nossa missão é</S.SubText>
          <S.MainText>to transform the world</S.MainText>
          <S.SubText>transformar o mundo</S.SubText>
          <S.MainText>building digital experiences</S.MainText>
          <S.SubText>construindo experiências digitais</S.SubText>
          <S.MainText>that enable our client’s growth </S.MainText>
          <S.SubText>que permitam o crescimento dos nossos clientes</S.SubText>
        </S.ContentRight>
      </S.Content>
      <Footer />
    </S.Container>
  );
}
