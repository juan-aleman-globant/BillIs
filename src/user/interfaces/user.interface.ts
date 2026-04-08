export type UserID = string;

export interface User {
  userId: UserID;
  name: string;
  email: string;
  password: string;
}
