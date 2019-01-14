# @wrote/ensure-path

[![npm version](https://badge.fury.io/js/%40wrote%2Fensure-path.svg)](https://npmjs.org/package/@wrote/ensure-path)

`@wrote/ensure-path` Creates All Directories On The Way To The Path.

```sh
yarn add -E @wrote/ensure-path
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
  * [`async ensurePath(path: string): string`](#async-ensurepathpath-string-string)
- [Copyright](#copyright)

## API

The package is available by importing its default function:

```js
import ensurePath from '@wrote/ensure-path'
```

### `async ensurePath(`<br/>&nbsp;&nbsp;`path: string,`<br/>`): string`

Makes sure that the path can be written to by recursively creating all necessary directories. Returns the same path as passed to the function.

```js
/* yarn example */
import { resolve } from 'path'
import ensurePath from '@wrote/ensure-path'

(async () => {
  const path = 'example/path/to/temp/file.data'
  await ensurePath(path)
  // path/to/temp is created in the cwd

  const absolutePath = resolve('example/path/to/temp/file.data')
  await ensurePath(absolutePath)
  // $(pwd)/path/to/temp/file.data is created
})()
```

## Copyright

(c) [Wrote][1] 2019

[1]: https://wrote.cc