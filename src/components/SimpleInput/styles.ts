import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  border: 1px solid ${(props) => props.theme.primaryText};
  padding: 5px;
  border-radius: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 25px;

  input {
    border: 0;
    background-color: transparent;
    padding: 10px 15px;
    width: 100%;
    color: ${(props) => props.theme.secondary};
    font-size: 1rem;
    outline: none;
  }
`;
