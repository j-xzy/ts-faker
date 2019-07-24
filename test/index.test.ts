// tslint:disable-next-line: no-reference
/// <reference path="./module.d.ts" />
import * as fs from 'fs-extra';
import { describe, it } from 'mocha';
import * as Parameter from 'parameter';
import * as path from 'path';
import fake from '../src';

describe('ts2data', () => {
  const parameter = new Parameter();
  const dirs = fs.readdirSync(__dirname).filter((v) => v !== 'index.test.ts' && v !== 'module.d.ts');

  // tslint:disable-next-line: prefer-for-of
  for (let i = 0; i < dirs.length; i++) {
    const dir = dirs[i];
    it(dir, async () => {
      const data = await fake([
        path.resolve(__dirname, dir, 'model.d.ts')
      ], {}, (_name, schema) => {
        // fs.writeFileSync(path.resolve(__dirname, dir, 'schema.json'), JSON.stringify(schema, null, 2));
        return schema;
      });
      // fs.writeFileSync(path.resolve(__dirname, dir, 'data.json'), JSON.stringify(data, null, 2));
      const rule = fs.readJSONSync(path.resolve(__dirname, dir, 'rule.json'));
      const result = parameter.validate(rule, data.IType);
      if (result !== undefined) {
        throw Error(JSON.stringify(result, null, 2));
      }
    });
  }
});
