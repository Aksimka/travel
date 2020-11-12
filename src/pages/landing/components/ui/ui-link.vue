<template>
  <span class="ui-link">
    <a
      :href="href"
      v-bind="{ ...$attrs }"
      :style="`border-bottom: ${borderStyle};`"
    >
      <slot></slot>
    </a>
  </span>
</template>

<script>
export default {
  name: 'ui-link',
  props: {
    href: {
      type: String,
      default: '#',
    },
    borderStyle: {
      type: String,
      default: '1px solid #ffffff',
    },
  },
};
</script>

<style scoped lang="scss">
.ui-link {
  padding-bottom: 8px;
  a {
    color: #ffffff;
    text-decoration: none;
    padding-bottom: 0;
  }
}
</style>
