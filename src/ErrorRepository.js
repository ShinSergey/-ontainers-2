const errors = new Map();

export default class ErrorRepository {
  constructor(code, meaning) {
    this.code = code;
    this.meaning = meaning;

    errors.set(code, meaning);
  }

  translate(code) {
    if (errors.has(code)) {
      return errors.get(code);
    }
    return 'Unknown error';
  }
}
