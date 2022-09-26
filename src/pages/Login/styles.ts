import styled from "styled-components";
import loginBackground from "../../assets/loginBackground.png";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
  height: 100vh;
`;
export const ContainerLeft = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${(props) => props.theme.secondary};
`;
export const TitleContainer = styled.div``;
export const Form = styled.form`
  min-width: 300px;
  margin-top: 135px;
  h2 {
    font-weight: 400;
    font-size: 1.875rem;
    line-height: 38px;
    margin-bottom: 32px;
    color: ${(props) => props.theme.secondary};
  }
`;
export const Title = styled.h1`
  font-weight: 400;
  font-size: 3.75rem;
  line-height: 76px;
`;
export const Description = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 20px;
  max-width: 300px;
`;
export const ContainerRight = styled.div`
  width: 50%;
  background-image: url(${loginBackground});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  padding-top: 35px;
  img {
    width: 306px;
    height: 69px;
  }
`;
