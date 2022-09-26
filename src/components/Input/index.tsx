import * as S from "./styles";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineLockClosed } from "react-icons/hi";
import { InputHTMLAttributes, useState } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  variant?: "user" | "password";
  error: boolean;
}
export function Input({ label, error, variant = "user", ...rest }: InputProps) {
  const [focused, setFocused] = useState(false);
  return (
    <S.Container error={error}>
      <input
        placeholder={label}
        onFocus={() => setFocused(true)}
        onBlur={(event) =>
          event.target.value.length > 0 ? setFocused(true) : setFocused(false)
        }
        {...rest}
      />
      <S.Icon focused={focused}>
        {variant === "user" ? (
          <AiOutlineUser size={20} />
        ) : (
          <HiOutlineLockClosed size={20} />
        )}
      </S.Icon>
    </S.Container>
  );
}
