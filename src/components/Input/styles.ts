import styled from "styled-components";
interface InputProps {
  error: boolean;
}
export const Container = styled.div<InputProps>`
  width: 100%;
  border: 1px solid
    ${(props) => (props.error ? props.theme.warnText : props.theme.primaryText)};
  padding: 5px;
  border-radius: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  input {
    border: 0;
    background-color: transparent;
    padding: 10px 15px;
    width: 85%;
    color: ${(props) => props.theme.secondary};
    font-size: 1rem;
    outline: none;
    :-webkit-autofill {
      background-color: ${(props) => props.theme.primaryText};
      -webkit-text-fill-color: ${(props) => props.theme.primaryText};
      transition: background-color 5000s ease-in-out 0s;
    }
  }
`;

interface IconProps {
  focused: boolean;
}

export const Icon = styled.div<IconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  transition: 0.5s transform;

  @media (max-width: 375px) {
    transform: translate(0);
  }

  ${(props) =>
    props.focused ? "transform: translate(0)" : "transform: translate(50px, 0)"}
`;
