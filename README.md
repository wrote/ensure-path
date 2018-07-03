# @wrote/ensure-path

[![npm version](https://badge.fury.io/js/@wrote/ensure-path.svg)](https://npmjs.org/package/@wrote/ensure-path)

`@wrote/ensure-path` is a new Node.js npm package. Create all directories on the way to the path.

```sh
yarn add -E @wrote/ensure-path
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
  * [`wroteEnsurePath(arg1: string, arg2?: boolean)`](#mynewpackagearg1-stringarg2-boolean-void)

## API

The package is available by importing its default function:

```js
import wroteEnsurePath from '@wrote/ensure-path'
```

### `wroteEnsurePath(`<br/>&nbsp;&nbsp;`arg1: string,`<br/>&nbsp;&nbsp;`arg2?: boolean,`<br/>`): void`

Call this function to get the result you want.

```js
/* yarn example */
import wroteEnsurePath from '@wrote/ensure-path'

(async () => {
  await wroteEnsurePath()
})()
```

---

(c) [Art Deco Code][1] 2018

[1]: https://artdeco.bz
