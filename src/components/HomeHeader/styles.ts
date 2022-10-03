import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 25px 40px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 375px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;
export const LogoContainer = styled.div`
  @media (max-width: 375px) {
    img {
      width: 200px;
    }
  }
`;
export const ClockContainer = styled.div``;
export const TempContainer = styled.div`
  @media (max-width: 375px) {
    margin-top: 16px;
    min-width: 50%;
  }
`;
