// tslint:disable-next-line: no-reference
/// <reference path="./module.d.ts" />

import * as jsf from 'json-schema-faker';
import * as tjs from 'typescript-json-schema';

interface ISettings extends tjs.PartialArgs {
  locale?: 'az' | 'cz' | 'de' | 'de_AT' | 'de_CH' | 'en' | 'en_AU' |
  'en_BORK' | 'en_CA' | 'en_GB' | 'en_IE' | 'en_IND' | 'en_US' | 'en_ZA' |
  'en_au_ocker' | 'es' | 'es_MX' | 'fa' | 'fr' |
  'fr_CA' | 'ge' | 'id_ID' | 'it' | 'ja' | 'ko' | 'nb_NO' | 'nep' |
  'nl' | 'pl' | 'pt_BR' | 'pt_PT' | 'ru' | 'sk' | 'sv' | 'tr' | 'uk' | 'vi' | 'zh_CN' | 'zh_TW';
}

export default async function fake(files: string[], settings: ISettings = { locale: 'en' }, transform = (_symboyName: string, jsonSchema: any) => jsonSchema) {
  const locale = settings.locale || 'en';
  jsf.extend('faker', () => require(`faker/locale/${locale}`));

  const program = tjs.getProgramFromFiles(files, { lib: ['esnext'] });
  const validationKeywords = settings.validationKeywords ? ['faker', ...settings.validationKeywords] : ['faker'];
  const generator = tjs.buildGenerator(program, { ...settings, validationKeywords, required: true, include: files }, files)!;
  const userSymbols = generator.getUserSymbols();
  const datas: any = {};
  const fakeDatas = await Promise.all(
    userSymbols.map((sym) => jsf.resolve(
      transform(sym, generator.getSchemaForSymbol(sym)))
    )
  );
  for (let i = 0; i < fakeDatas.length; ++i) {
    datas[userSymbols[i]] = fakeDatas[i];
  }
  return datas;
}
