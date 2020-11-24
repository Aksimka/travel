<template>
  <span class="icon-text-snippet">
    <span class="icon-text-snippet__icon">
      <icon-wrapper width="40px" height="40px" icon-color="#ffffff">
        <slot name="icon"></slot>
      </icon-wrapper>
    </span>
    <span class="icon-text-snippet__text">
      <slot></slot>
    </span>
  </span>
</template>

<script>
import IconWrapper from '@/components/ui/icon-wrapper.vue';

export default {
  name: 'icon-text-snippet',
  components: { IconWrapper },
};
</script>

<style scoped lang="scss">
.icon-text-snippet {
  display: flex;
  align-items: center;
  &__text {
    color: #ffffff;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    letter-spacing: 1px;
    font-weight: 300;
    margin-left: 8px;
  }
}
</style>
