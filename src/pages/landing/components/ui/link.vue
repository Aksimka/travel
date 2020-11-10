<template>
  <span class="link">
    <a :href="href" v-bind="{ ...$attrs }"><slot></slot></a>
  </span>
</template>

<script>
export default {
  name: 'link',
  props: {
    href: {
      type: String,
      default: '#',
    },
  },
};
</script>

<style scoped lang="scss">
.link {
  padding-bottom: 8px;
  a {
    color: #ffffff;
    text-decoration: none;
    padding-bottom: 0;
    border-bottom: 1px solid #ffffff;
  }
}
</style>
