import { ButtonHTMLAttributes } from "react";
import * as S from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
export function Button({ children, ...rest }: ButtonProps) {
  return (
    <S.Container>
      <button {...rest}>{children}</button>
    </S.Container>
  );
}
