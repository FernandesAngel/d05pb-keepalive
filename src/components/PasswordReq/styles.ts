import styled from "styled-components";
interface PasswordReqProps {
  check: boolean;
}
export const PasswordReqContainer = styled.div`
  width: 100%;
  margin-top: 5px;
`;
export const PasswordReq = styled.div<PasswordReqProps>`
  padding: 3px 15px;
  display: flex;
  align-items: center;
  color: ${(props) =>
    props.check ? props.theme.successText : props.theme.warnText};
`;
export const PasswordReqText = styled.p`
  font-size: 0.8rem;
  margin-left: 5px;
`;
