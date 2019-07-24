# ts-faker

[![npm version](https://badge.fury.io/js/ts-faker.svg)](https://badge.fury.io/js/ts-faker)
[![Build Status](https://travis-ci.org/whj1995/ts-faker.svg?branch=master)](https://travis-ci.org/whj1995/ts-faker)

> Use typescript fake data for your system.

- You can find examples for all features in the [test examples](https://github.com/whj1995/ts-faker/tree/master/test).

``` ts
interface IType {                          
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
   * @faker address.city
   */
  city: string;
}

      ↓ ↓ ↓
{
  "IType": {
    "patternProp": "yes",
    "dateProp": "1987-03-15T20:15:52.522Z",
    "emailProp": "6r1N9A@wMdhrhRY.abnm",
    "city": "New York"
  }
}
```


## Basic usage

``` ts
import fake from 'ts-faker';

const data = fake([
  '/path/to/some.d.ts',
  '/path/to/other.d.ts'
]);
```

