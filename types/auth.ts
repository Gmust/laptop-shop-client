export interface ISignUp {
  url: string,
  username: string,
  password: string,
  email: string
}

export interface ISignIn{
  url: string,
  username: string,
  password: string,
}

export interface IUser {
  username: string
  userId: number | string
  email: string
}