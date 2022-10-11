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
  }
  @media (max-width: 1360px) {
    p {
      margin: 0 20px;
      width: 70%;
      br {
        display: none;
      }
    }
  }
  @media (max-width: 1060px) {
    p {
      font-size: 0.7rem;
      margin: 0 20px;
      width: 100%;
    }
  }

  @media (max-width: 920px) {
    margin: 0 auto 50px;
    border-right: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      border-bottom: 1px solid ${(props) => props.theme.primaryText};
      text-align: center;
      padding: 0 10% 20px;
    }
  }

  @media (max-width: 420px) {
    p {
      padding: 0 0 20px;
    }
  }
`;

export const WelcomeMessage = styled.h5`
  width: 35%;
  font-weight: 400;
  font-size: 1.05rem;
  line-height: 20px;
  padding-left: 20px;

  @media (max-width: 1060px) {
    font-size: 0.9rem;
    width: 80%;
  }
  @media (max-width: 920px) {
    width: 100%;
    text-align: center;
    font-size: 1.2rem;
    margin-bottom: 35px;
    padding-left: 0;
  }
`;
export const ContentRight = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 30px;

  @media (max-width: 1060px) {
    width: 55%;
  }

  @media (max-width: 920px) {
    margin: 0 auto 50px;
    padding: 0 20%;
    width: 60%;
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
  @media (max-width: 320px) {
    margin-right: 25px;
  }
`;
export const Navigation = styled.div`
  display: flex;
  @media (max-width: 920px) {
    width: 100%;
    flex-direction: row;
  }
  @media (max-width: 420px) {
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
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 420px) {
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
    height: 110px;
  }
`;
