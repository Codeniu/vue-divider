# 如何发布你的第一个 npm 包？

## npm 账号

### 注册

你需要一个 npm 账号, 在这[注册](https://link.juejin.cn/?target=https%3A%2F%2Fwww.npmjs.com%2Fsignup)。

### 登录

打开终端后输入：

    npm login

根据提示输入**username**、**password** 和 **email**。

注意如果你使设置了其他的 npm 源，你需要将其更改为 npm 本身的源。此外发布也需要切换到 npm 默认的源。

查看源：

    npm config get registry

设置源：

    npm config set registry http://registry.npmjs.org 

## 创建项目

`mkdir vue-divider`

### 初始化

` npm init `

### webpack 配置

webpack.config.js

```js
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'vue-divider.min.js',
    library: 'NiuDivider',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
}
```

## 发布

在终端中输入

    npm publish --access=public

\--access=public: Scoped packages 会被自动发布为私有包, 这个参数告诉 npm 我们想让每个人都可以使用这个模块。

发布成功后你会收到一封邮件，像这样的。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d66325bbd874482facee71d5127d9a01\~tplv-k3u1fbpfcp-watermark.image?)

> 看到没，npm 爱你呦

好了至此你的第一个npm包就已经发布了


## webpack 之 module

### vue-loader

```shell
yarn add vue-loader -D
```

它是基于 `webpack` 的一个的 `loader` 插件，解析和转换 `.vue` 文件，提取出其中的逻辑代  码 `script`、样式代码 `style`、以及 `HTML` 模版 `template`，再分别把它们交给对应的 `loader` 去处理如 `style-loader` 、 `less-loader` 等等，核心的作用，就是 `提取` 。

安装完包后配置 webpack.config.js 文件：

```js
module:{
    rules:[
        {
            test: /\.vue$/,
            use: ['vue-loader'],
        },
    ]
}
```

### vue-template-compiler

```js
// vue 2.x
yarn add vue-template-compiler -D

//vue 3.x
yarn add @vue/compiler-sfc -D
```

将 .vue 文件的 template 编译成 AST （抽象语法树）。

`Vue 2.x` 时代，需要 `vue-template-compiler` 插件处理， `Vue 3.x` 则变成 `@vue/compiler-sfc`。

### bable-loader

```js
yarn add @babel/core @babel/preset-env bable-loader -D
```

*   @babel/core： `babel` 的核心库。

*   @babel/preset-env：它取代了 `es2015 es2016 es2017` ，通过配置浏览器版本的形式，将编译的主动权，交给了插件。

*   babel-loader： `webpack` 的 `loader` 插件，用于编译代码，转化成浏览器读得懂的代码。

安装完上述插件之后，我们在 `webpack.config.js` 下添加如下代码

```js
module: {
 rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/, // 不编译node_modules下的文件
      loader: 'babel-loader'
    },
  ]
}
```

编译的时候，需要读取配置，最新的 `babel` 配置文件需要在根目录下添加 `babel.config.js` 文件：

```js
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          // browsers: ["last 2 versions"], // 最近 2 个版本的浏览器
          browsers: ["last 1 chrome version"],
        },
      },
    ],
  ],
};
```

### cross-env

配置多环境

安装 cross-env

```js
yarn add cross-env -D
```

在 package.json 添加脚本

```js
// 旧
"scripts": {
    "dev": "webpack serve --progress --config ./webpack.config.js",
    "build": "webpack --config ./webpack.config.js"
},

// 新
"scripts": {
    "dev": "cross-env NODE_ENV=development webpack server --open --hot --content-base='./demo/'",
    "build": "cross-env NODE_ENV=production webpack --progress --hide-modules"
},
```

## 参考文章

* [\[译\] 创建并发布一个小而美的 npm 包，没你想的那么难！ - 掘金 (juejin.cn)](https://juejin.cn/post/6844903749199069197)

* [Vue 3 和 Webpack 5 来了，手动搭建的知识该更新了 - 掘金 (juejin.cn)](https://juejin.cn/post/6921161482663100423#comment)

* <https://github.com/PanJiaChen/vue-countTo>
