import * as yup from 'yup';
import { RequiredStringSchema } from 'yup/lib/string';
import { AnyObject, Maybe } from 'yup/lib/types';

yup.addMethod<yup.StringSchema>(yup.string, 'regexPassword', function (message) {
  return this.test('regexPassword', message, function (value) {
    return /^([a-zA-Z\d!@#$%^&*+_-]+)$/.test(<string>value);
  });
});

declare module 'yup' {
  interface StringSchema<
    TType extends Maybe<string> = string | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType,
  > extends yup.BaseSchema<TType, TContext, TOut> {
    regexPassword(value: string): RequiredStringSchema<TType, TContext>;
  }
}

export default yup;
