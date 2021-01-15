import Validator from '../app';

test('Name should be valid', () => {
  const name = new Validator('rogue12undead');
  const check = name.validateUsername();
  expect(check).toBe('Валидное имя');
});

test('Name should not be valid', () => {
  const name = new Validator('warrior#human');
  expect(() => name.validateUsername()).toThrow('Недопустимые символы');
});

test('Name shoule not have more than 3 numbers in a row', () => {
  const name = new Validator('Dmitri1996');
  expect(() => name.validateUsername()).toThrowError('В имени не может быть более 3 чисел подряд');
});


test('Name should begin with letter', () => {
  const name = new Validator('96Dmitri');
  expect(() => name.validateUsername()).toThrowError('Имя должно начинаться с буквы');
});

test('Name should begin with letter', () => {
  const name = new Validator('_Dmitri');
  expect(() => name.validateUsername()).toThrowError('Имя должно начинаться с буквы');
});

test('Name should begin with letter', () => {
  const name = new Validator('-12Dmitri');
  expect(() => name.validateUsername()).toThrowError('Имя должно начинаться с буквы');
});

test('Name should end with letter', () => {
  const name = new Validator('Dmitri96');
  expect(() => name.validateUsername()).toThrowError('Имя должно оканчиваться на букву');
});

test('Name should end with letter', () => {
  const name = new Validator('Dmitri96_');
  expect(() => name.validateUsername()).toThrowError('Имя должно оканчиваться на букву');
});
test('Name should end with letter', () => {
  const name = new Validator('Dmitri96-');
  expect(() => name.validateUsername()).toThrowError('Имя должно оканчиваться на букву');
});
