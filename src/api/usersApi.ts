import { api } from "./api";

interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

interface IGeo {
  lat: string;
  lng: string;
}

interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IResponseUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}

export interface IUser extends Pick<
  IResponseUser,
  "id" | "username" | "name" | "email" | "phone"
> {
  imgUrl: string;
  city: string;
  company: string;
}

export const usersApi = {
  getUsers: () => {
    return api.get<IResponseUser[]>("/users").then((res) => res.data);
  },
};
