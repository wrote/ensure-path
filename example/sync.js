import { resolve } from 'path'
import { ensurePathSync } from '../src'

const path = 'example/path/to/temp/file.data'
ensurePathSync(path)
// path/to/temp is created in the cwd

const absolutePath = resolve('example/path/to/temp/file.data')
ensurePathSync(absolutePath)
// $(pwd)/path/to/temp/file.data is created