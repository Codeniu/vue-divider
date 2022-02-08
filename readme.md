# vue-divider [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/) [![NPM](https://img.shields.io/npm/l/@codeniu/vue-divider)](https://www.npmjs.com/package/@codeniu/vue-divider) [![npm](https://img.shields.io/npm/v/@codeniu/vue-divider.svg)](https://www.npmjs.com/package/@codeniu/vue-divider)

> vue-divider is a dependency-free, lightweight vue component. This is a study project, You will learn how to build a npm package from this project. You can also learn some webpack configurations.

## [Try the demo](https://codeniu.github.io/vue-divider/demo/)

How to use?

``` bash
npm install @codeniu@vue-divider
```

Example

``` vue
<template>
  <div>
    <niu-divider />
    <niu-divider>This is a divider</niu-divider>
  </div>
</template>

<script>
  import niuDivider from '@codeniu/vue-divider';
  export default {
    components: { niuDivider },
    data () {
      return { }
    }
  }
</script>
```

[查看npm包的发布教程](https://github.com/Codeniu/vue-divider/blob/main/docs/How-to-publish-your-first-npm-package.md)
