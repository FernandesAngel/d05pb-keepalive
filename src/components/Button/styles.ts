import styled, { keyframes } from "styled-components";

export function rotationBuilder() {
  const rotation = keyframes`
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
      opacity: .9
    }
    75% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `;
  return rotation;
}

export const Container = styled.div`
  width: 100%;
  button {
    width: 99%;
    border-radius: 50px;
    padding: 15px 0;
    border: 2px solid ${(props) => props.theme.secondaryOrange};
    background: linear-gradient(90deg, #ff2d04 0%, #c13216 100%);
    font-weight: 700;
    font-size: 1.125rem;
    color: ${(props) => props.theme.primaryText};
    line-height: 23px;
    box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
    filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.5));
    margin-top: 47px;
    cursor: pointer;
  }
  .spinner {
    animation: ${rotationBuilder()} 1s linear infinite;
  }
`;
