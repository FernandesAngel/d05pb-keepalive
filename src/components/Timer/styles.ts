import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Number = styled.h4`
  font-weight: 700;
  font-size: 48px;
  line-height: 61px;
  color: ${(props) => props.theme.primaryText};
`;
export const Label = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${(props) => props.theme.primaryText};
`;
