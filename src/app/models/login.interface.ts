export interface LoginInterface {
  accessToken: string;
  user: {
    email: string;
    id: number;
    role: string;
  };
}
