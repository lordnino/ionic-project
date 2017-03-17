export interface IUser{
  rCode: number,
  Message: string,
  user: IUserDetails;
}

export interface IUserDetails{
  token: string,
  mobile: string,
  isvalidated: string,
  photo_url: string,
  pin: string;
}
