export default class Validator {
  constructor(userName) {
    this.userName = userName;
  }

  validateUsername() {
    this.letterCheck = /[a-z]/.test(this.userName); // проверка на латиницу

    this.numberCheck = /\d/.test(this.userName); // проверка на числа

    this.symbolCheck = /-_/.test(this.userName); // проверка на символы

    this.moreThanThreeCheck = this.userName.match(/\d{4,}/) === null; // проверка на более 3 чисел подряд

    this.beginningCheck = this.userName.match(/^\d|^-|^_/) === null; // проверка начала строки

    this.endingCheck = this.userName.match(/\d$|-$|_$/) === null; // проверка конца строки

    if (!this.letterCheck && !this.numberCheck && !this.symbolCheck) throw new Error('Невалидное имя');

    if (!this.moreThanThreeCheck) throw new Error('В имени не может быть более 3 чисел подряд');

    if (!this.beginningCheck) throw new Error('Имя не может начинаться с чисел или символов');

    if (!this.endingCheck) throw new Error('Имя не может заканчиваться числами или символами');

    return 'Валидное имя';
  }
}
