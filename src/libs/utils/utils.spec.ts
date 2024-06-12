import { decrypt, encrypt } from './crypto';
import { hashKey, UUID } from './generate';

describe('Utils library', () => {
  test('Should hash key correctly', () => {
    const hash = hashKey('Test');
    expect(hash).toEqual(
      '532eaabd9574880dbf76b9b8cc00832c20a6ec113d682299550d7a6e0f345e25',
    );
  });

  test('Should generate UUID', () => {
    const uuid = UUID(16);
    expect(uuid).toHaveLength(32);
  });

  test('Should encrypted and decrypted correctly', () => {
    const message = 'Test Message 123';
    const password = 'TEST_PASSWORD';
    const enc = encrypt(message, password);
    const dec = decrypt(enc, password);

    expect(dec).toEqual(message);
  });

  test('Should generate UUID', () => {
    const uuid = UUID(16);
    expect(uuid).toHaveLength(32);
  });
});
