interface IType {
  nestProp: {
    arrayProp: Array<{ name: string; age: number }>;
    objProp: {
      one: string;
      two: number;
    };
  };
}