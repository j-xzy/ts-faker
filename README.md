# ts-faker

[![npm version](https://badge.fury.io/js/ts-faker.svg)](https://badge.fury.io/js/ts-faker)
[![Build Status](https://travis-ci.org/whj1995/ts-faker.svg?branch=master)](https://travis-ci.org/whj1995/ts-faker)

> Use typescript fake data for your system.

- You can find examples for all features in the [test examples](https://github.com/whj1995/ts-faker/tree/master/test).

![](https://raw.githubusercontent.com/whj1995/images-host/master/tsfaker.gif)

![](https://raw.githubusercontent.com/whj1995/images-host/master/ts-faker-t.png)

## Basic usage

``` ts
import fake from 'ts-faker';

const data = fake([
  '/path/to/some.d.ts',
  '/path/to/other.d.ts'
]);
```

