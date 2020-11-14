<template>
  <div
    class="container"
    :style="`${computeWidth()}`"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ui-container',
  props: {
    fluid: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    computeWidth() {
      if (this.fluid) {
        return 'width: 100%;';
      }
      return 'width: 1200px;';
    },
  },
};
</script>

<style scoped lang="scss">

</style>
