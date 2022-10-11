import { ButtonHTMLAttributes } from "react";
import * as S from "./styles";
import { ImSpinner8 } from "react-icons/im";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading: boolean;
  title: string;
}
export function Button({ loading, title, ...rest }: ButtonProps) {
  return (
    <S.Container>
      <button {...rest}>
        {loading ? <ImSpinner8 className="spinner" size={17} /> : title}
      </button>
    </S.Container>
  );
}
