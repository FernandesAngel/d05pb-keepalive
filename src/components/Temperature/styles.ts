import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
export const Local = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 18px;
  @media (max-width: 375px) {
    line-height: 16px;
  }
`;
export const Temperature = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const TemperatureText = styled.p`
  font-weight: 700;
  font-size: 3rem;
  line-height: 61px;
  margin-left: 10px;
  @media (max-width: 375px) {
    line-height: 50px;
  }
`;
