import { useState } from "react";
import * as S from "./styles";

export function Timer() {
  const [timer, setTimer] = useState("");

  return (
    <S.Container>
      <S.Number>{timer}</S.Number>
      <S.Label>seconds</S.Label>
    </S.Container>
  );
}
