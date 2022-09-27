import { useEffect, useState } from "react";
import * as S from "./styles";

export function Clock() {
  const [dateNow, setDateNow] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateNow(new Date()), 1000);
  }, []);
  return (
    <S.Container>
      <S.ClockText>
        {dateNow.toLocaleString("pt-BR", {
          hour: "numeric",
          minute: "numeric",
          hour12: false,
        })}
      </S.ClockText>
      <S.DayText>
        {dateNow.toLocaleString("pt-BR", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </S.DayText>
    </S.Container>
  );
}
