<template>
  <div class="search-block">
    <div class="search-block-section"></div>
    <div class="search-block-section"></div>
    <div class="search-block-section"></div>
    <div class="search-block-section"></div>
    <div class="search-block-section"></div>
    <div class="search-block-section"></div>
    <div class="search-block__action"></div>
  </div>
</template>

<script>
export default {
  name: 'search',
};
</script>

<style scoped lang="scss">
.search-block {
  background-color: red;
  display: flex;
  .search-block-section {
    height: 114px;
  }
}
</style>
