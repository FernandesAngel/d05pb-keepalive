const specialCaractereRegex = /[!@#$%^&*(),.?":{}|<>_-]/g;
const numberRegex = /\d/;
const lowercaseRegex = /[a-z]/;
const uppercaseRegex = /[A-Z]/;

export function lengthPassword(password = ""): boolean {
  if (password.length < 6) {
    return false;
  }
  return true;
}
export function specialCaracterePassword(password = ""): boolean {
  if (specialCaractereRegex.test(password)) {
    return true;
  }
  return false;
}
export function numberPassword(password = ""): boolean {
  if (numberRegex.test(password)) {
    return true;
  }
  return false;
}
export function uppercasePassword(password = ""): boolean {
  if (uppercaseRegex.test(password)) {
    return true;
  }
  return false;
}
export function lowercasePassword(password = ""): boolean {
  if (lowercaseRegex.test(password)) {
    return true;
  }
  return false;
}
