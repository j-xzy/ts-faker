interface IType {
  boolProp: boolean;
  numberProp: number;
  stringProp: string;
  arrayProp: string[];
  tupleProp: [string, number, boolean];
  emumProp: 'red' | 'blue' | true | 999;
  nullProp: null;
  anyProp: any;
  unknowProp: unknown;
}