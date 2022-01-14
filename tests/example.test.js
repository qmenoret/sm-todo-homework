import { isValid } from "../pages/api/save"

const validTodos = `?`
const validTodos2 = `?`
const invalidTodos = `?`
const invalidTodos2 = `?`

test('validate todos before save', () => {
  expect(isValid(validTodos)).toBe(true);
  expect(isValid(validTodos2)).toBe(true);
});

test('invalidate todos before save', () => {
  expect(isValid(invalidTodos)).toBe(false);
  expect(isValid(invalidTodos2)).toBe(false);
});