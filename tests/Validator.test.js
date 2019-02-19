import Validator from '../src/js/Validator';

describe('TEST: Validator', () => {
  test('the name does not pass validation', () => {
    const validator = new Validator(' Vasya');
    expect(() => validator.validateUsername()).toThrow();
  });

  test('name has been validated', () => {
    const validator = new Validator('Vasya');
    expect(validator.validateUsername()).toBe('name has been validated');
  });
});
