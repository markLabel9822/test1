import CryptoJS from 'crypto-js';

export const encrypt = (message: string, password: string) =>
  CryptoJS.AES.encrypt(message, password).toString();
export const decrypt = (message: string, password: string) =>
  CryptoJS.AES.decrypt(message, password).toString(CryptoJS.enc.Utf8);
