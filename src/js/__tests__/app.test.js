import Validator from '../app';

test('Name should be valid', () => {
  const name = new Validator('Dmitri2-4_Antyfeev');
  const check = name.validateUsername();
  expect(check).toBe('Валидное имя');
});

test('Name should not be valid', () => {
  const name = new Validator('%^$#  ');
  expect(() => name.validateUsername()).toThrow('Невалидное имя');
});

test('Name should not be valid due to 4 numbers', () => {
  const name = new Validator('Dmitri1996');
  expect(() => name.validateUsername()).toThrowError('В имени не может быть более 3 чисел подряд');
});


test('Name should not be valid due to numbers in beginning', () => {
  const name = new Validator('96Dmitri');
  expect(() => name.validateUsername()).toThrowError('Имя не может начинаться с чисел или символов');
});

test('Name should not be valid due to - in beginning', () => {
  const name = new Validator('-96Dmitri');
  expect(() => name.validateUsername()).toThrowError('Имя не может начинаться с чисел или символов');
});

test('Name should not be valid due to _ in beginning', () => {
  const name = new Validator('_96Dmitri');
  expect(() => name.validateUsername()).toThrowError('Имя не может начинаться с чисел или символов');
});

test('Name should not be valid due to numbers in ending', () => {
  const name = new Validator('Dmitri96');
  expect(() => name.validateUsername()).toThrowError('Имя не может заканчиваться числами или символами');
});

test('Name should not be valid due to - in ending', () => {
  const name = new Validator('Dmitri-');
  expect(() => name.validateUsername()).toThrowError('Имя не может заканчиваться числами или символами');
});

test('Name should not be valid due to _ in ending', () => {
  const name = new Validator('Dmitri_');
  expect(() => name.validateUsername()).toThrowError('Имя не может заканчиваться числами или символами');
});
