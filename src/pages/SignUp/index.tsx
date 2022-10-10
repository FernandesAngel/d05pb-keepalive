import * as S from "./styles";
import logoCompass from "../../assets/logoCompass.png";
import { Button } from "../../components/Button";
import { FormEvent, useState } from "react";
import { SimpleInput } from "../../components/SimpleInput";
import { PasswordReq } from "../../components/PasswordReq";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import { useTestPassword } from "../../utils/passwordValidation";

export function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");
  const { signUp, signUpError } = useAuth();
  const {
    passwordLengthError,
    passwordNumberError,
    passwordUppercaseError,
    passwordLowercaseError,
    passwordSpecialCaractereError,
  } = useTestPassword(password);

  // const {} = useAuth();

  function handleGoBack() {
    navigate("/");
  }

  function dataValidation() {
    const regEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    if (
      passwordLengthError &&
      passwordLowercaseError &&
      passwordNumberError &&
      passwordSpecialCaractereError &&
      passwordUppercaseError
    ) {
      if (password !== passwordConfirmation) {
        setError("As senhas devem ser iguais");
      } else {
        if (signUpError) {
          setError(signUpError);
        } else {
          setError("");
        }
        setError("");
      }
    } else {
      setError("Verifique se sua senha atende a todas especificações");
    }
    if (!regEmail.test(email)) {
      setError("Email inválido");
    }
    console.log(error);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    dataValidation();
    if (error === "") {
      try {
        const userData = {
          email,
          password: passwordConfirmation,
        };
        await signUp(userData, { name, surname, email });
      } catch (e) {
        setError("Erro ao criar conta, tente novamente.");
      }
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
        <S.Form onSubmit={handleSubmit}>
          <h2>Cadastro</h2>
          <SimpleInput
            label="Nome"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <SimpleInput
            label="Sobrenome"
            type="text"
            value={surname}
            onChange={(event) => setSurname(event.target.value)}
          />
          <SimpleInput
            label="Email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <SimpleInput
            label="Senha"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            error={error}
          />
          <S.PasswordReqContainer>
            <PasswordReq
              checked={passwordLengthError}
              text="Mínimo 6 caracteres"
            />
            <PasswordReq
              checked={passwordUppercaseError}
              text="Pelo menos uma letra maiúscula"
            />
            <PasswordReq
              checked={passwordLowercaseError}
              text="Pelo menos uma letra minúscula"
            />
            <PasswordReq
              checked={passwordNumberError}
              text="Pelo menos um número"
            />
            <PasswordReq
              checked={passwordSpecialCaractereError}
              text="Pelo menos um caractere especial"
            />
          </S.PasswordReqContainer>
          <SimpleInput
            label="Confirmar Senha"
            type="password"
            value={passwordConfirmation}
            onChange={(event) => setPasswordConfirmation(event.target.value)}
            error={error}
          />
          <S.ErrorMessageContainer>
            <S.ErrorMessage>{error}</S.ErrorMessage>
          </S.ErrorMessageContainer>
          <Button type="submit">Cadastrar</Button>
        </S.Form>
        <S.GoBackButton onClick={handleGoBack}>Voltar</S.GoBackButton>
      </S.ContainerLeft>
      <S.ContainerRight>
        <img src={logoCompass} alt="" />
      </S.ContainerRight>
    </S.Container>
  );
}
