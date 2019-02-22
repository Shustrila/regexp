import Validator from '../src/js/Validator';

describe('TEST: Validator', () => {
  test('name has been validated', () => {
    const validator = new Validator('vasya');
    expect(validator.validateUsername()).toBe('name has been validated');
  });

  test('the name does not pass validation', () => {
    const validator = new Validator(' vasya');
    expect(() => validator.validateUsername()).toThrow();
  });

  test('name with letters and spaces and dashes', () => {
    const validator = new Validator('v a-s-y a');
    expect(validator.validateUsername()).toBe('name has been validated');
  });

  test('name with different case', () => {
    const validator = new Validator('VaSyA');
    expect(validator.validateUsername()).toBe('name has been validated');
  });

  test('name with numbers', () => {
    const validator = new Validator('vasya777');
    expect(() => validator.validateUsername()).toThrow();
  });

  test('name with other characters', () => {
    const validator = new Validator('&@vasya@&');
    expect(() => validator.validateUsername()).toThrow();
  });

  test('multiple spaces', () => {
    const validator = new Validator('   vasya');
    expect(() => validator.validateUsername()).toThrow();
  });
});
