export default class Validator {
  constructor(username) {
    this.username = username;
  }

  validateUsername() {
    if (/[^\w-]/.test(this.username)) {
      throw new Error('Недопустимые символы');
    }

    if (/\d{4}/.test(this.username)) {
      throw new Error('В имени не может быть более 3 чисел подряд');
    }

    if (/^[\d-_]/.test(this.username)) {
      throw new Error('Имя должно начинаться с буквы');
    }

    if (/[\d-_]$/.test(this.username)) {
      throw new Error('Имя должно оканчиваться на букву');
    }

    return 'Валидное имя';
  }
}
