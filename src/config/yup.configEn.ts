import { MessageParams } from 'yup/lib/types';

const labelText = (prm: MessageParams) => {
  return prm.label ? `${prm.label}` : '';
};

export const enConfig = {
  mixed: {
    default: (prm: MessageParams) => `${labelText(prm)}無効です`,
    required: (prm: MessageParams) => `${labelText(prm)}必ず入力してください。`,
    oneOf: (prm: MessageParams & { values: any }) =>
      `${labelText(prm)}次の値のいずれかでなければなりません:${prm.values}`,
    notOneOf: (prm: MessageParams & { values: any }) =>
      `${labelText(prm)}次の値のいずれかであってはなりません:${prm.values}`,
    notType: (prm: MessageParams) => {
      if (prm.type === 'number') {
        return `${labelText(prm)}数値を入力してください。`;
      }
      if (prm.type === 'date') {
        return `${labelText(prm)}日付を入力してください。`;
      }
      return `${labelText(prm)}有効な形式で入力してください。`;
    },
    defined: `defined`,
  },
  string: {
    length: (prm: MessageParams & { length: number }) =>
      `${labelText(prm)}${prm.length}文字で入力してください。`,
    min: (prm: MessageParams & { min: number }) =>
      `${labelText(prm)}${prm.min}文字以上で入力してください。`,
    max: (prm: MessageParams & { max: number }) =>
      `${labelText(prm)}${prm.max}文字以下で入力してください。`,
    matches: (prm: MessageParams & { regex: RegExp }) =>
      `${labelText(prm)}有効な形式で入力してください。`,
    email: (prm: MessageParams & { regex: RegExp }) =>
      `${labelText(prm)}メールアドレス形式である必要があります`,
    url: (prm: MessageParams & { regex: RegExp }) =>
      `${labelText(prm)}有効なURLでなければなりません`,
    uuid: (prm: MessageParams & { regex: RegExp }) =>
      `${labelText(prm)}有効なUUIDでなければなりません`,
    trim: (prm: MessageParams) => `${labelText(prm)}前後にスペースを入れてはいけません`,
    lowercase: (prm: MessageParams) => `${labelText(prm)}小文字でなければなりません`,
    uppercase: (prm: MessageParams) => `${labelText(prm)}大文字でなければなりません`,
  },
  number: {
    min: (prm: MessageParams & { min: number }) =>
      `${labelText(prm)}${prm.min}以上で入力してください。`,
    max: (prm: MessageParams & { max: number }) =>
      `${labelText(prm)}${prm.max}以下で入力してください。`,
    lessThan: (prm: MessageParams & { less: number }) =>
      `${labelText(prm)}${prm.less}より小さくなければなりません`,
    moreThan: (prm: MessageParams & { more: number }) =>
      `${labelText(prm)}${prm.more}より大きくなければなりません`,
    positive: (prm: MessageParams & { more: number }) =>
      `${labelText(prm)}正数で入力してください。`,
    negative: (prm: MessageParams & { less: number }) =>
      `${labelText(prm)}負数で入力してください。`,
    integer: (prm: MessageParams) => `${labelText(prm)}整数でなければなりません`,
  },
  date: {
    min: (prm: MessageParams & { min: Date | string }) =>
      `${labelText(prm)}${prm.min}より後でなければなりません`,
    max: (prm: MessageParams & { max: Date | string }) =>
      `${labelText(prm)}${prm.max}より前でなければなりません`,
  },
  boolean: {
    isValue: (prm: MessageParams) => `${labelText(prm)}値が必要です`,
  },
  object: {
    noUnknown: (prm: MessageParams) =>
      `${labelText(
        prm,
      )}オブジェクトシェイプで指定されていないキーを含めることはできません`,
  },
  array: {
    length: (prm: MessageParams & { length: number }) =>
      `${labelText(prm)}${prm.length}個が必要です`,
    min: (prm: MessageParams & { min: number }) =>
      `${labelText(prm)}${prm.min}個以上の項目が必要です`,
    max: (prm: MessageParams & { max: number }) =>
      `${labelText(prm)}${prm.max}個以下の項目が必要です`,
  },
};
