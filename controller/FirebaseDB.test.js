/* eslint-disable jest/expect-expect */
import FirebaseDB from './FirebaseDB';

const firebaseDB = new FirebaseDB();

describe('Firebase Tests', () => {
  test('Fetch url', async () => {
    const document = await firebaseDB.getURL('templateKey');
    expect(document.get('url')).toBe('https://aulascolmeia.com.br/');
  });
  test('Create url', async () => {
    await firebaseDB.createURL('templateKey2', 'www.google.com');
    expect(true).toBe(true);
  });
});
