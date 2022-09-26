import styled from "styled-components";
import logoCompassBall from "../../assets/logoCompassBall.png";
export const Container = styled.div`
  width: 100%;
  background-image: url(${logoCompassBall});
  background-repeat: no-repeat;
  background-size: 30%;
  background-position-x: -10px;
  background-position-y: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;

export const ContentRight = styled.div`
  width: 100%;
  text-align: end;
  padding: 140px 135px 260px 0;
`;

export const MainTextTop = styled.h1`
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 46px;
  color: ${(props) => props.theme.primaryOrange};
`;
export const MainText = styled.h2`
  font-weight: 700;
  font-size: 4rem;
  line-height: 81px;
  color: ${(props) => props.theme.primaryOrange};
`;
export const SubText = styled.p`
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 30px;
  color: ${(props) => props.theme.darkText};
`;
