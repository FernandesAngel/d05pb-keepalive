import * as S from "./styles";
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";

interface PasswordReqPRops {
  text: string;
  checked: boolean;
}
export function PasswordReq({ checked, text }: PasswordReqPRops) {
  return (
    <S.PasswordReq check={checked}>
      {checked ? <AiOutlineCheckCircle /> : <AiOutlineCloseCircle />}
      <S.PasswordReqText>{text}</S.PasswordReqText>
    </S.PasswordReq>
  );
}
