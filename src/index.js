import { getOptions } from "loader-utils";
import validateOptions from "schema-utils";

import schema from './options.json';

export default function withoutGlobalLoader (source) {
  const options = getOptions(this) || {}

  const { prefix = '', pattern } = options

  validateOptions(schema, options)

  let arr = source.split(' ')
  const reg = new RegExp(`${prefix}(\\S*)__`)

  arr = arr.map(item => {
    if (item.match(reg)) {
      return item.replace(pattern, '')
    }

    return item
  })

  this.callback(null, arr.join(' '))
}
