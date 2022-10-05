import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 120px;
`;
export const Number = styled.h4`
  font-weight: 700;
  font-size: 3rem;
  line-height: 61px;
  color: ${(props) => props.theme.primaryText};
  @media (max-width: 920px) {
    font-size: 4rem;
  }
`;
export const Label = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 18px;
  color: ${(props) => props.theme.primaryText};
  @media (max-width: 920px) {
    font-size: 1rem;
  }
`;
