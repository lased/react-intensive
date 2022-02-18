import Validator from './Validator'

describe('validator class', () => {
  let validator: Validator | null = null

  beforeEach(() => {
    validator = new Validator()
  })

  it('required without error', () => {
    expect(validator?.validate('test', ['required'])).toBeTruthy()
    expect(validator?.getErrorMessage()).toBe('')
  })
  it('required with error', () => {
    expect(validator?.validate('', ['required'])).toBeFalsy()
    expect(validator?.getErrorMessage()).not.toBe('')
  })
  it('firstCharInUpperСase without error', () => {
    expect(validator?.validate('Test', ['firstCharInUpperСase'])).toBeTruthy()
    expect(validator?.getErrorMessage()).toBe('')
  })
  it('firstCharInUpperСase with error', () => {
    expect(validator?.validate('test', ['firstCharInUpperСase'])).toBeFalsy()
    expect(validator?.getErrorMessage()).not.toBe('')
  })
  it('startWith without error', () => {
    expect(validator?.validate('http://test', [{ startWith: 'http://' }])).toBeTruthy()
    expect(validator?.getErrorMessage()).toBe('')
  })
  it('startWith with error', () => {
    expect(validator?.validate('tehttp://st', [{ startWith: 'http://' }])).toBeFalsy()
    expect(validator?.getErrorMessage()).not.toBe('')
  })
  it('maxLength without error', () => {
    expect(validator?.validate('test', [{ maxLength: 4 }])).toBeTruthy()
    expect(validator?.getErrorMessage()).toBe('')
  })
  it('maxLength with error', () => {
    expect(validator?.validate('test test', [{ maxLength: 4 }])).toBeFalsy()
    expect(validator?.getErrorMessage()).not.toBe('')
  })
  it('pattern without error', () => {
    expect(validator?.validate('TeSt', [{ pattern: /TeSt/ }])).toBeTruthy()
    expect(validator?.getErrorMessage()).toBe('')
  })
  it('pattern with error', () => {
    expect(validator?.validate('test', [{ pattern: /TeSt/ }])).toBeFalsy()
    expect(validator?.getErrorMessage()).not.toBe('')
  })
})
