import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%);
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  @media (max-width: 920px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  color: ${(props) => props.theme.primaryText};
  width: 100%;
  padding: 20px 0;
  @media (max-width: 920px) {
    flex-direction: column;
  }
`;

export const ContentLeft = styled.div`
  height: 100%;
  border-right: 1px solid ${(props) => props.theme.primaryText};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;

  p {
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 15px;
    text-align: right;
    margin-right: 35px;

    @media (max-width: 1024px) {
      font-size: 0.9rem;
      margin: 0 30px;
      br {
        display: none;
      }
    }
  }

  @media (max-width: 920px) {
    margin: 0 auto 50px;
    border-right: 0;
    p {
      border-bottom: 1px solid ${(props) => props.theme.primaryText};
      text-align: center;
      padding: 0 10% 20px;
    }
  }
`;
export const ContentRight = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 35px;

  @media (max-width: 920px) {
    margin: 0 auto 50px;
    padding: 0 20%;
  }
`;

export const TimerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const TimerLabel = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 18px;
  margin-right: 33px;
  text-align: end;
  @media (max-width: 920px) {
    font-size: 1rem;
    margin-right: 50px;
  }
`;
export const Navigation = styled.div`
  display: flex;
  @media (max-width: 920px) {
    width: 100%;
    flex-direction: column;
  }
`;
export const LogoutButton = styled.button`
  min-width: 130px;
  text-align: center;
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 15px;
  background: transparent;
  border: 0;
  color: ${(props) => props.theme.primaryText};
  cursor: pointer;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }
  @media (max-width: 920px) {
    width: 100%;
    height: 70px;
  }
`;
export const NavigateButton = styled.a`
  min-width: 130px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 15px;
  color: #c13216;
  background-color: ${(props) => props.theme.primaryText};
  text-decoration: none;
  @media (max-width: 1024px) {
    font-size: 1rem;
  }
  @media (max-width: 920px) {
    width: 100%;
    height: 130px;
  }
`;
