import { test, expect } from 'vitest';

import VError from './index.js';

const nameStub = 'CustomName';
const originalErr = new Error('foo');
const infoStub = { a: 1, b: 'bar' };
const messageStub = 'error_message';

test('construct with all options', () => {
  const err = new VError(
    {
      name: nameStub,
      cause: originalErr,
      info: infoStub,
    },
    messageStub,
  );

  expect(err.name).toBe(nameStub);
  expect(err.message).toBe(messageStub);
  expect(err.cause).toBe(originalErr);
  expect(err.info).toEqual(infoStub);
});
