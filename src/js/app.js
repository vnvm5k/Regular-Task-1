export default class Validator {
  constructor(login) {
    this.login = login;
  }

  validateUsername() {
    const firstCheck = /[\w-]+/.test(this.login);
    const secondCheck = /^((\d\d\d)|[\d_\-])(\d\d\d)([\d_\-]|(\d\d\d))$/.test(this.login);
    if (firstCheck) {
   	if (secondCheck) {
   		return new Error('Неверный логин');
   	}
   		return 'login корректный';
    }
   	return new Error('Неверный логин');
  }
}
