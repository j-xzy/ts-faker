interface IType {
  /**
   * @ignore
   */
  ignoreProp: string;

  /**
   * @pattern yes|no|maybe
   */
  patternProp: string;

  /**
   * @format date-time
   */
  dateProp: string;

  /**
   * @format email
   */
  emailProp: string;

  /**
   * @format hostname
   */
  hostnameProp: string;

  /**
   * @format ipv4
   */
  ipv4Prop: string;

  /**
   * @format ipv6
   */
  ipv6Prop: string;

  /**
   * @format uri
   */
  uriProp: string;

  /**
   * @minLength 5
   */
  minLengthProp: string;

  /**
   * @minLength 3
   * @maxLength 5
   */
  maxLengthProp: string;

  /**
   * @minimum 50
   */
  minimumProp: number;

  /**
   * @maximum 52
   * @minimum 50
   */
  maximumProp: number;

  /**
   * @multipleOf 3
   */
  multipleOfProp: number;

  /**
   * @minItems 2
   */
  minItemsProp: string[];

  /**
   * @maxItems 5
   * @minItems 5
   */
  maxItemsProp: string[];

  /**
   * @uniqueItems true
   */
  uniqueItemsProp: number[];

  /**
   * @maxProperties 4
   * @minProperties 3
   */
  additionalPropertiesProp: {
    [p: string]: string;
  };
}