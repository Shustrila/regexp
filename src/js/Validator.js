export default class Validator {
  /***
   * constructor
   * @param {String} name - user name
   */
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    if ((/([a-z]|-|[ ])/ig).test(this.name) && (/(^[ ]|[ ]&)/).test(this.name)) {
      throw new TypeError('the name does not pass validation');
    }
    return 'name has been validated';
  }
}
