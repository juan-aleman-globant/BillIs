export type UserID = string;

export interface IUser {
  userId: UserID;
  name: string;
  email: string;
  password: string;
}
