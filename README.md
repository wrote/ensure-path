# @wrote/ensure-path

%NPM: @wrote/ensure-path%

`@wrote/ensure-path` is a Node.js package that creates all directories on the way to the path.

```sh
yarn add -E @wrote/ensure-path
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
  * [`async ensurePath(path: string): string`](#async-ensurepathpath-string-string)

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

---

(c) [Art Deco Code][1] 2018

[1]: https://artdeco.bz
