# @wrote/ensure-path

[![npm version](https://badge.fury.io/js/%40wrote%2Fensure-path.svg)](https://npmjs.org/package/@wrote/ensure-path)

`@wrote/ensure-path` Creates All Directories On The Way To The Path.

```sh
yarn add -E @wrote/ensure-path
```

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/0.svg?sanitize=true"></a></p>

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
  * [`async ensurePath(path: string): string`](#async-ensurepathpath-string-string)
  * [`ensurePathSync(path: string): string`](#ensurepathsyncpath-string-string)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/1.svg?sanitize=true"></a></p>

## API

The package is available by importing its default and named function:

```js
import ensurePath, { ensurePathSync } from '@wrote/ensure-path'
```

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/2.svg?sanitize=true"></a></p>

### `async ensurePath(`<br/>&nbsp;&nbsp;`path: string,`<br/>`): string`

Makes sure that the path can be written to by recursively creating all necessary directories. Returns the same path as passed to the function.

```js
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

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/3.svg?sanitize=true"></a></p>

### `ensurePathSync(`<br/>&nbsp;&nbsp;`path: string,`<br/>`): string`

Same as `ensurePath`, but performed synchronously.

```js
import { resolve } from 'path'
import { ensurePathSync } from '@wrote/ensure-path'

const path = 'example/path/to/temp/file.data'
ensurePathSync(path)
// path/to/temp is created in the cwd

const absolutePath = resolve('example/path/to/temp/file.data')
ensurePathSync(absolutePath)
// $(pwd)/path/to/temp/file.data is created
```

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/4.svg?sanitize=true"></a></p>

## Copyright

<table>
  <tr>
    <th>
      <a href="https://artd.eco">
        <img src="https://raw.githubusercontent.com/wrote/wrote/master/images/artdeco.png" alt="Art Deco">
      </a>
    </th>
    <th>© <a href="https://artd.eco">Art Deco</a> for <a href="https://wrote.cc">Wrote</a> 2019</th>
    <th>
      <a href="https://wrote.cc">
        <img src="https://avatars3.githubusercontent.com/u/40831417?s=100" width="100" alt="Wrote">
      </a>
    </th>
    <th>
      <a href="https://www.technation.sucks" title="Tech Nation Visa">
        <img src="https://raw.githubusercontent.com/artdecoweb/www.technation.sucks/master/anim.gif"
          alt="Tech Nation Visa">
      </a>
    </th>
    <th><a href="https://www.technation.sucks">Tech Nation Visa Sucks</a></th>
  </tr>
</table>

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/-1.svg?sanitize=true"></a></p>