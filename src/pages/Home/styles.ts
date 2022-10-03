import styled from "styled-components";
import logoCompassBall from "../../assets/logoCompassBall.png";
export const Container = styled.div`
  width: 100%;
  background-image: url(${logoCompassBall});
  background-repeat: no-repeat;
  background-size: 30%;
  background-position-x: -1rem;
  background-position-y: 85%;
  /* background-position-y: bottom; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 2000px) {
    background-size: 28%;
  }
  @media (max-width: 1024px) {
    background-image: none;
  }
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

export const ContentRight = styled.div`
  width: 100%;
  text-align: end;
  padding: 8.75rem 8.438rem 13.2rem 0;
  @media (max-width: 1600px) {
    padding: 10rem 4.5rem 14rem 0;
  }
  @media (max-width: 1024px) {
    text-align: center;
    padding-right: 0;
    padding-top: 12rem;
  }
`;

export const MainTextTop = styled.h1`
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 46px;
  color: ${(props) => props.theme.primaryOrange};
  @media (max-width: 1360px) {
    font-size: 2rem;
  }
`;
export const MainText = styled.h2`
  font-weight: 700;
  font-size: 4rem;
  line-height: 81px;
  color: ${(props) => props.theme.primaryOrange};
  @media (max-width: 1360px) {
    font-size: 3.25rem;
  }
`;
export const SubText = styled.p`
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 30px;
  color: ${(props) => props.theme.darkText};
  @media (max-width: 1360px) {
    font-size: 1.7rem;
  }
`;
