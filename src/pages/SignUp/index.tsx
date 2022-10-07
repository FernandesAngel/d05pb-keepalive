import * as S from "./styles";
import logoCompass from "../../assets/logoCompass.png";
import { Button } from "../../components/Button";
import { FormEvent, useEffect, useState } from "react";
import { SimpleInput } from "../../components/SimpleInput";
import { PasswordReq } from "../../components/PasswordReq";

export function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");

  const [passwordLengthError, setPasswordLengthError] = useState(false);
  const [passwordNumberError, setPasswordNumberError] = useState(false);
  const [passwordUppercaseError, setPasswordUppercaseError] = useState(false);
  const [passwordLowercaseError, setPasswordLowercaseError] = useState(false);
  const [passwordSpecialCaractereError, setPasswordSpecialCaractereError] =
    useState(false);
  // const {} = useAuth();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const regEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    event.preventDefault();
    if (password.length >= 6 && regEmail.test(email)) {
      // signIn({ email, password });
      setError("false");
    }
    setError("true");
  }

  function testPassword(password: string) {
    const specialCaractereRegex = /[^a-zA-Z 0-9]+/g;
    const numberRegex = /\d/;
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;

    if (password.length < 6) {
      setPasswordLengthError(false);
    } else {
      setPasswordLengthError(true);
    }

    if (specialCaractereRegex.test(password)) {
      setPasswordSpecialCaractereError(true);
    } else {
      setPasswordSpecialCaractereError(false);
    }

    if (numberRegex.test(password)) {
      setPasswordNumberError(true);
    } else {
      setPasswordNumberError(false);
    }

    if (lowercaseRegex.test(password)) {
      setPasswordLowercaseError(true);
    } else {
      setPasswordLowercaseError(false);
    }

    if (uppercaseRegex.test(password)) {
      setPasswordUppercaseError(true);
    } else {
      setPasswordUppercaseError(false);
    }
  }

  useEffect(() => {
    testPassword(password);
  }, [password]);

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
            label="Nome Completo"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            error={error}
          />
          <SimpleInput
            label="Email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            // error={"email inválido"}
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
            <S.ErrorMessage error={false}>
              Ops, usuário ou senha inválidos. <br /> Tente novamente!
            </S.ErrorMessage>
          </S.ErrorMessageContainer>
          <Button type="submit">Continuar</Button>
        </S.Form>
      </S.ContainerLeft>
      <S.ContainerRight>
        <img src={logoCompass} alt="" />
      </S.ContainerRight>
    </S.Container>
  );
}
