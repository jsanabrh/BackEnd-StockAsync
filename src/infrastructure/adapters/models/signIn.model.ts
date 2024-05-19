export interface SignInPayload {
  userIdentification: string;
  password: string;
  userName: string;
  userLastName: string;
  role?: string;
  id?: string;
}
