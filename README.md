# cssmodule-without-global-loader

A loader for webpack that allows writing global css without `:global {}`.

## Getting Started

To begin, you'll need to install `cssmodule-without-global-loader`:

```console
$ npm install cssmodule-without-global-loader --save-dev
```

Then add the loader to your `webpack` config. For example:

**webpack.config.js**

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.module\.less$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'cssmodule-without-global-loader',
            options: {
              prefix: 'ant-',
              pattern: /__.{5}/g
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]__[hash:base64:5]'
              }
            }
          }
      },
    ],
  },
};
```

**Before use**

```less
:global {
  ant-input: {
  }
}
```

**After use**

```less
ant-input: {
}
```

And run `webpack` via your preferred method.

## Options

|   Name    |    Type    | Required | Description                                                               |
| :-------: | :--------: | :------: | :------------------------------------------------------------------------ |
| `prefix`  | `{string}` |   yes    | the third party css prefix, such as `ant-` for antd, `el-` for element-ui |
| `pattern` | `{object}` |   yes    | the RegExp depends on `localIdentName` of css-loader                      |

### ``
