export default class Validator {
  /**
   * constructor
   * @param {String} name - user name
   */
  constructor(name) {
    this.name = name;
  }

  /**
   * @returns {string|onerror}
   */
  validateUsername() {
    if ((/^[a-z\s-]+$/i).test(this.name) && !(/(^[\s])|([\s]$)/).test(this.name)) {
      return 'name has been validated';
    }
    throw new TypeError('the name does not pass validation');
  }
}
