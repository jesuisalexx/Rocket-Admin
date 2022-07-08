export type SignInDto = {
  email: string,
  password: string,
}
export type SignUpDto = {
  firstName: string,
  lastName: string,
  username: string,
  email: string,
  password: string,
  confirmPassword: string,
  accept: boolean,
}