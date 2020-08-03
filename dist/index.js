"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withoutGlobalLoader;

var _loaderUtils = require("loader-utils");

var _schemaUtils = _interopRequireDefault(require("schema-utils"));

var _options = _interopRequireDefault(require("./options.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function withoutGlobalLoader(source) {
  const options = (0, _loaderUtils.getOptions)(this) || {};
  const {
    prefix = '',
    pattern
  } = options;
  (0, _schemaUtils.default)(_options.default, options);
  let arr = source.split(' ');
  const reg = new RegExp(`${prefix}(\\S*)__`);
  arr = arr.map(item => {
    if (item.match(reg)) {
      return item.replace(pattern, '');
    }

    return item;
  });
  this.callback(null, arr.join(' '));
}