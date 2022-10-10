import { useState, useEffect } from "react";
export function useTestPassword(password: string) {
  const [passwordLengthError, setPasswordLengthError] = useState(false);
  const [passwordNumberError, setPasswordNumberError] = useState(false);
  const [passwordUppercaseError, setPasswordUppercaseError] = useState(false);
  const [passwordLowercaseError, setPasswordLowercaseError] = useState(false);
  const [passwordSpecialCaractereError, setPasswordSpecialCaractereError] =
    useState(false);

  const specialCaractereRegex = /[^a-zA-Z 0-9]+/g;
  const numberRegex = /\d/;
  const lowercaseRegex = /[a-z]/;
  const uppercaseRegex = /[A-Z]/;

  useEffect(() => {
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
  }, [
    password,
    lowercaseRegex,
    uppercaseRegex,
    numberRegex,
    specialCaractereRegex,
  ]);

  return {
    passwordLengthError,
    passwordNumberError,
    passwordUppercaseError,
    passwordLowercaseError,
    passwordSpecialCaractereError,
  };
}
