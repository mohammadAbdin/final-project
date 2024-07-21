export default interface UserType {
  name: string;
  _id?: string;
  email: string;
  iat: number;
  exp: number;
  userType: string;
  notification?: string[];
}
