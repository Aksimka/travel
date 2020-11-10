<template>
  <div class="header">
    <div class="header__layout"></div>
    <div class="header-content">
      <div class="header-content__main-title">
        Are you ready for <ui-link>Bangok</ui-link> and <ui-link>Pattaya</ui-link>?
      </div>
      <div class="header-content__second-title"></div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped lang="scss">
.header {
  height: 900px;
  background-image: url("../../assets/images/header-image.jpg");
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
  .header-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding-top: 270px;
    &__main-title {
      font-size: 48px;
      font-weight: 600;
      color: #ffffff;
      letter-spacing: 3px;
    }
  }
}
</style>
