# vue-divider [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/) [![NPM](https://img.shields.io/npm/l/@codeniu/vue-divider)](https://www.npmjs.com/package/@codeniu/vue-divider)

> vue-divider is a dependency-free, lightweight vue component. This is a study project, You will learn how to build a npm package from this project. You can also learn some webpack configurations.

## [Try the demo](https://codeniu.github.io/vue-divider/)

How to use?

``` bash
npm install @codeniu@vue-divider
```

Example

``` vue
<template>
  <niu-divider :title="title" />
</template>

<script>
  import niuDivider from '@codeniu/vue-divider';
  export default {
    components: { niuDivider },
    data () {
      return {
        title:'divider'
      }
    }
  }
</script>
```

Options 

|    Property    |    Description   |   type   |	default	|
| -----------------  | ---------------- | :--------: | :----------: |
| title       | txt you can set |String| '' |
