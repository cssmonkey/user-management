export interface User {
  id?: string;
  name?: string;
  email?: string;
  username?: string;
  company?: {
    name: string;
  };
}

export type Users = User[];
