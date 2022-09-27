import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth";
import * as S from "./styles";

interface TimerProps {
  time: number;
}
export function Timer({ time }: TimerProps) {
  const { signOut } = useAuth();
  const [timer, setTimer] = useState(time);

  useEffect(() => {
    const interval = setInterval(() => setTimer(timer - 1), 1000);
    if (timer === 0) {
      signOut();
    }

    return () => clearTimeout(interval);
  }, [timer, signOut]);

  return (
    <S.Container>
      <S.Number>{timer}</S.Number>
      <S.Label>seconds</S.Label>
    </S.Container>
  );
}
