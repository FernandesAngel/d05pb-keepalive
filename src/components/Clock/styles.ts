import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 720px) {
    display: none;
  }
`;
export const ClockText = styled.h3`
  font-weight: 700;
  line-height: 144px;
  font-size: 9rem;
  text-align: center;
  @media (max-width: 1024px) {
    font-size: 8rem;
    line-height: 100px;
  }
  @media (max-width: 768px) {
    font-size: 5rem;
    line-height: 60px;
  }
`;
export const DayText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin-top: 5px;
`;
