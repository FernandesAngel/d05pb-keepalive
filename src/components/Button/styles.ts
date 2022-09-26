import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  button {
    width: 99%;
    border-radius: 50px;
    padding: 15px 0;
    border: 2px solid ${(props) => props.theme.secondaryOrange};
    background: linear-gradient(90deg, #ff2d04 0%, #c13216 100%);
    font-weight: 500;
    font-size: 1.125rem;
    color: ${(props) => props.theme.primaryText};
    line-height: 23px;
    box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
    filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.5));
    margin-top: 47px;
  }
`;
