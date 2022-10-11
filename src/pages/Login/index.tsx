import * as S from "./styles";
import logoCompass from "../../assets/logoCompass.png";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useAuth } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

const schemaLogin = yup.object({
  email: yup.string().required("Email obrigatória").email("erro email"),

  password: yup.string().required("senha obrigatória"),
});

interface LoginProps {
  email: string;
  password: string;
}

export function Login() {
  const navigate = useNavigate();
  const { signIn, loading, authError } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    resolver: yupResolver(schemaLogin),
  });

  function handleNavigation() {
    navigate("/signup");
  }

  async function handleLoginSubmit(data: LoginProps) {
    await signIn(data);
  }

  return (
    <S.Container>
      <S.ContainerLeft>
        <S.TitleContainer>
          <S.Title>Olá,</S.Title>
          <S.Description>
            Para continuar navegando de forma segura, efetue o login na rede.
          </S.Description>
        </S.TitleContainer>
        <S.Form onSubmit={handleSubmit(handleLoginSubmit)}>
          <h2>Login</h2>
          <Input
            variant="user"
            label="Email"
            type="text"
            error={
              (errors.email !== undefined &&
                errors.email.message !== undefined) ||
              (errors.password !== undefined &&
                errors.password.message !== undefined) ||
              authError
            }
            {...register("email")}
          />
          <Input
            variant="password"
            label="Senha"
            type="password"
            error={
              (errors.email !== undefined &&
                errors.email.message !== undefined) ||
              (errors.password !== undefined &&
                errors.password.message !== undefined) ||
              authError
            }
            {...register("password")}
          />
          <S.ErrorMessageContainer>
            {authError && (
              <S.ErrorMessage error={true}>
                Ops, usuário ou senha inválidos. <br /> Tente novamente!
              </S.ErrorMessage>
            )}
            {errors.email ? (
              <S.ErrorMessage error={true}>
                Ops, usuário ou senha inválidos. <br /> Tente novamente!
              </S.ErrorMessage>
            ) : errors.password ? (
              <S.ErrorMessage error={true}>
                Ops, usuário ou senha inválidos. <br /> Tente novamente!
              </S.ErrorMessage>
            ) : null}
          </S.ErrorMessageContainer>
          <S.FormButtonContainer>
            <Button loading={loading} type="submit" title="Continuar" />
          </S.FormButtonContainer>
        </S.Form>
        <S.SignUpButton onClick={handleNavigation}>
          Ainda não tem uma conta? Cadastre-se
        </S.SignUpButton>
      </S.ContainerLeft>
      <S.ContainerRight>
        <img src={logoCompass} alt="" />
      </S.ContainerRight>
    </S.Container>
  );
}
