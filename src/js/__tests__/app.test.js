import Validator from '../app';

test('Неверный логин1', () => {
  const test = new Validator('123ab_-');
  const testValidate = validateUsername();
  expect(testValidate).toBe('Неверный логин');
});


test('Неверный логин2', () => {
  const test = new Validator('!!!!!!');
  const testValidate = validateUsername();
  expect(testValidate).toBe('Неверный логин');
});


test('Неверный логин2', () => {
  const test = new Validator('12ааа34');
  const testValidate = validateUsername();
  expect(testValidate).toBe('login корректный');
});
