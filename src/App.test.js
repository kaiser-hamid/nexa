import { expect, test } from "vitest";


test('addition', () => {
  expect(1 + 1).toBe(2);
});

test('asset true', () => {
  expect(true).toBeTruthy();
});

test('asset false', () => {
  expect(false).toBeFalsy();
}); 