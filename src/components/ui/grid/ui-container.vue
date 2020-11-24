<template>
  <div
    class="container"
    :class="{fluid}"
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
  mounted() {
    console.log(this);
  },
};
</script>

<style scoped lang="scss">
.container {
  margin: 0 auto;
  width: 1900px;
}
.container.fluid {
  width: 100%;
}

@media screen and (min-width: 1900px) and (max-width: 2072px){
  .container {
    width: 1800px;
  }
}
@media screen and (min-width: 1650px) and (max-width: 1900px){
  .container {
    width: 1500px;
  }
}
@media screen and (min-width: 1400px) and (max-width: 1650px){
  .container {
    width: 1225px;
  }
}

@media screen and (min-width: 1200px) and (max-width: 1400px){
  .container {
    width: 1100px;
  }
}
@media screen and (min-width: 992px) and (max-width: 1200px){
  .container {
    width: 850px;
  }
}
@media screen and (min-width: 768px) and (max-width: 992px){
  .container {
    width: 730px;
  }
}
@media screen and (min-width: 576px) and (max-width: 768px){
  .container {
    width: 550px;
  }
}
@media screen and (max-width: 576px){
  .container {
    width: 100%;
  }
}
</style>
