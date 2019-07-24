interface IType {
  propA: IModel.IUser;
}

declare namespace IModel {
  interface IUser extends IBaseUser {
    name: string;
    age: number;
    phone: IPhone;
  }

  interface IBaseUser {
    home: string;
  }

  interface IPhone {
    mobile: number;
    phone: string;
  }
}