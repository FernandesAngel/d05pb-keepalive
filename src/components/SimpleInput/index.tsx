import * as S from "./styles";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}
export function SimpleInput({ label, error = "", ...rest }: InputProps) {
  return (
    <>
      <S.Container>
        <input placeholder={label} {...rest} />
      </S.Container>
    </>
  );
}
