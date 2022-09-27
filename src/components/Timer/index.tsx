import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

interface TimerProps {
  time: number;
}
export function Timer({ time }: TimerProps) {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(time);

  useEffect(() => {
    const interval = setInterval(() => setTimer(timer - 1), 1000);
    if (timer === 0) {
      navigate("/");
    }

    return () => clearTimeout(interval);
  }, [timer, navigate]);

  return (
    <S.Container>
      <S.Number>{timer}</S.Number>
      <S.Label>seconds</S.Label>
    </S.Container>
  );
}
