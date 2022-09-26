import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%);
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  color: ${(props) => props.theme.primaryText};
  height: 103px;
  padding: 20px 0 20px;
  width: 100%;
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
    font-size: 12px;
    line-height: 15px;
    text-align: right;
    margin-right: 35px;
  }
`;
export const ContentRight = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 35px;
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
  font-size: 14px;
  line-height: 18px;
`;
export const Navigation = styled.div`
  display: flex;
`;
export const LogoutButton = styled.button`
  min-width: 130px;
  text-align: center;
  height: 103px;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  background: transparent;
  border: 0;
  color: ${(props) => props.theme.primaryText};
  cursor: pointer;
`;
export const NavigateButton = styled.a`
  min-width: 130px;
  text-align: center;
  height: 103px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #c13216;
  background-color: ${(props) => props.theme.primaryText};
  text-decoration: none;
`;
