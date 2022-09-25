import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border: 1px solid white;
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

  ${(props) =>
    props.focused ? "transform: translate(0)" : "transform: translate(50px, 0)"}
`;
