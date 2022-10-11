import * as S from "./styles";
import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}
const SimpleInputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = ({ label, error = "", ...rest }: InputProps, ref) => {
  return (
    <>
      <S.Container>
        <input ref={ref} placeholder={label} {...rest} />
      </S.Container>
    </>
  );
};

export const SimpleInput = forwardRef(SimpleInputBase);
