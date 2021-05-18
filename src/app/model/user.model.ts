export interface User {
  id: string;
  email: string;
  password: string;
  passowrdConfirm: string;
  dotz: number;
  cart: Cart[];
}

export interface Cart {
  id: string;
  userId: string;
  name: string;
  photo: string;
  price: number;
}

export interface ChangeSald {
  dotz: any
}

