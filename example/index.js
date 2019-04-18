/* yarn example */
import { resolve } from 'path'
import ensurePath from '../src'

(async () => {
  const path = 'example/path/to/temp/file.data'
  await ensurePath(path)
  // path/to/temp is created in the cwd

  const absolutePath = resolve('example/path/to/temp/file.data')
  await ensurePath(absolutePath)
  // $(pwd)/path/to/temp/file.data is created
})()
