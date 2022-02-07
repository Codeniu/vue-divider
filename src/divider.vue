<template>
  <div class="n-divider">
    <div v-if="$slots.default" :class="['n-divider-inner-text']">
      <slot />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.n-divider {
  width: 100%;
  min-width: 100%;

  line-height: 1;
  height: 1px;
  display: table;
  margin: 16px 0;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  text-align: center;
  background: transparent;

  &::before {
    position: relative;
    top: 50%;
    display: table-cell;
    width: 0;
    border-top: 1px solid #e8e8e8;
    transform: translateY(50%);
    content: '';
  }

  &::after {
    position: relative;
    top: 50%;
    display: table-cell;
    width: 100%;
    border-top: 1px solid #e8e8e8;
    transform: translateY(50%);
    content: '';
  }

  &-inner-text {
    display: inline-block;
    padding: 0 10px;
    border-left: 5px solid #1890ff;
  }
}
</style>
