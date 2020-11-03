<template>
  <div class="header">
    <div class="header__layout"></div>
  </div>
</template>

<script>

</script>

<style scoped lang="scss">
.header {
  height: 900px;
  background-image: url("./../assets/images/header-image.jpg");
  background-size: cover;
  position: relative;
  &__layout {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #000000, rgba(225, 225, 225, 0.05));
    opacity: .6;
  }
}
</style>
