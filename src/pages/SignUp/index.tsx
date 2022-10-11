import * as S from "./styles";
import logoCompass from "../../assets/logoCompass.png";
import { Button } from "../../components/Button";
import { useEffect, useState } from "react";
import { SimpleInput } from "../../components/SimpleInput";
import { PasswordReq } from "../../components/PasswordReq";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import {
  lengthPassword,
  lowercasePassword,
  numberPassword,
  specialCaracterePassword,
  uppercasePassword,
} from "../../utils/validators/password";

const schemaUser = yup.object({
  name: yup.string().required("Você precisa preencher seu nome completo."),
  email: yup
    .string()
    .required("O campo de email é obrigatório")
    .email("Seu email é inválido"),

  password: yup
    .string()
    .required("A senha é obrigatória")
    .test("password", "1", (value) => lengthPassword(value || ""))
    .test("password", "2", (value) => specialCaracterePassword(value || ""))
    .test("password", "3", (value) => uppercasePassword(value || ""))
    .test("password", "4", (value) => lowercasePassword(value || ""))
    .test("password", "5", (value) => numberPassword(value || "")),

  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais."),
});

const errorsPassword = ["1", "2", "3", "4", "5"];

interface SignUpProps {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export function SignUp() {
  const navigate = useNavigate();
  const [isCaractere, setIsCaractere] = useState("");
  const { signUp, loading, signUpError } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<SignUpProps>({
    mode: "onChange",
    reValidateMode: "onSubmit",
    resolver: yupResolver(schemaUser),
  });

  const pass = watch("password");

  function handleGoBack() {
    navigate("/");
  }

  useEffect(() => {
    setIsCaractere(pass);
  }, [pass]);

  async function handleSignUpSubmit(data: SignUpProps) {
    const { name, email, password } = data;

    const userData = {
      email,
      password,
    };
    const response = await signUp(userData, { name, email });
    if (response) {
      reset();
    }
  }

  return (
    <S.Container>
      <S.ContainerLeft>
        <S.TitleContainer>
          <S.Title>Olá,</S.Title>
          <S.Description>
            Para continuar navegando de forma segura, faça seu cadastro.
          </S.Description>
        </S.TitleContainer>
        <S.Form onSubmit={handleSubmit(handleSignUpSubmit)}>
          <h2>Cadastro</h2>
          <SimpleInput
            label="Nome Completo"
            type="text"
            {...register("name")}
          />
          <SimpleInput label="Email" type="email" {...register("email")} />
          <SimpleInput
            label="Senha"
            type="password"
            {...register("password")}
          />
          <S.PasswordReqContainer>
            <PasswordReq
              checked={lengthPassword(pass)}
              text="Mínimo 6 caracteres"
            />
            <PasswordReq
              checked={uppercasePassword(pass)}
              text="Pelo menos uma letra maiúscula"
            />
            <PasswordReq
              checked={lowercasePassword(pass)}
              text="Pelo menos uma letra minúscula"
            />
            <PasswordReq
              checked={numberPassword(pass)}
              text="Pelo menos um número"
            />
            <PasswordReq
              checked={specialCaracterePassword(isCaractere)}
              text="Pelo menos um caractere especial"
            />
          </S.PasswordReqContainer>
          <SimpleInput
            label="Confirmar Senha"
            type="password"
            {...register("passwordConfirmation")}
          />
          <S.ErrorMessageContainer>
            {errors.name ? (
              <S.ErrorMessage>{errors.name.message}</S.ErrorMessage>
            ) : errors.email ? (
              <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>
            ) : errors.password &&
              errors.password.message === "A senha é obrigatória" ? (
              <S.ErrorMessage>A senha é obrigatória</S.ErrorMessage>
            ) : errors.passwordConfirmation ? (
              <S.ErrorMessage>
                {errors.passwordConfirmation.message}
              </S.ErrorMessage>
            ) : errors.password &&
              errorsPassword.includes(errors.password.message || "") ? (
              <S.ErrorMessage>
                Verifique se a sua senha atende a todas as especificações.
              </S.ErrorMessage>
            ) : signUpError ? (
              <S.ErrorMessage>{signUpError}</S.ErrorMessage>
            ) : null}
          </S.ErrorMessageContainer>
          <Button loading={loading} type="submit" title="Cadastrar" />
        </S.Form>
        <S.GoBackButton onClick={handleGoBack}>
          Já tem uma conta? Faça seu login
        </S.GoBackButton>
      </S.ContainerLeft>
      <S.ContainerRight>
        <img src={logoCompass} alt="" />
      </S.ContainerRight>
    </S.Container>
  );
}
