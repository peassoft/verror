# @peassoft/verror

JavaScript error class extended with:

- custom `name` property;
- optional `info` object.


## Installation

```bash
$ npm install @peassoft/verror
```


## Usage example

```javascript
import VError from '@peassoft/verror';

const originalError = new Error('foo');

const err = new VError(
  {
    name: 'MyCustomError,
    cause: originalError,
    info: {
      anyField1: 'bar',
      anyField2: 1,
    },
  },
  'error message',
);
```


## API Reference

### `constructor(opts, message)`

- `opts` - Options bucket:

  - `opts.name: string` - Custom error name.

  - `opts.cause?: Error` - _Optional_. An `Error` object that caused the constructed Error.

  - `opts.info?: Record<string, unknown>` - _Optional_. A bucket for any additional information describing the context of the constructed error.

- `message: string` - Error message.
