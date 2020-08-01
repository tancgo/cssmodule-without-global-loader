"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = withoutGlobalLoader;

var _loaderUtils = require("loader-utils");

var _schemaUtils = _interopRequireDefault(require("schema-utils"));

var _options = _interopRequireDefault(require("./options.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function withoutGlobalLoader(source) {
  var options = (0, _loaderUtils.getOptions)(this) || {};
  var _options$prefix = options.prefix,
      prefix = _options$prefix === void 0 ? '' : _options$prefix,
      pattern = options.pattern;
  (0, _schemaUtils["default"])(_options["default"], options);
  var arr = source.split(' ');
  var reg = new RegExp("".concat(prefix, "(\\S*)__"));
  arr = arr.map(function (item) {
    if (item.match(reg)) {
      return item.replace(pattern, '');
    }

    return item;
  });
  this.callback(null, arr.join(' '));
}