## API

The package is available by importing its default and named function:

```js
import ensurePath, { ensurePathSync } from '@wrote/ensure-path'
```

%~%

```### async ensurePath => string
[
  ["path", "string"]
]
```

Makes sure that the path can be written to by recursively creating all necessary directories. Returns the same path as passed to the function.

%EXAMPLE: example, ../src => @wrote/ensure-path%

%~%

```### ensurePathSync => string
[
  ["path", "string"]
]
```

Same as `ensurePath`, but performed synchronously.

%EXAMPLE: example/sync, ../src => @wrote/ensure-path%

%~%