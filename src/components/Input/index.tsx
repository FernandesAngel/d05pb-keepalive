import * as S from "./styles";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineLockClosed } from "react-icons/hi";
import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  useState,
} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  variant?: "user" | "password" | null;
  error: boolean;
}
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, error, variant = null, ...rest }: InputProps,
  ref
) => {
  const [focused, setFocused] = useState(false);
  return (
    <S.Container error={error}>
      <input
        placeholder={label}
        onFocus={() => setFocused(true)}
        onBlur={(event) =>
          event.target.value.length > 0 ? setFocused(true) : setFocused(false)
        }
        ref={ref}
        {...rest}
      />
      <S.Icon focused={focused}>
        {variant === "user" ? (
          <AiOutlineUser size={20} />
        ) : variant === "password" ? (
          <HiOutlineLockClosed size={20} />
        ) : (
          <div></div>
        )}
      </S.Icon>
    </S.Container>
  );
};

export const Input = forwardRef(InputBase);
