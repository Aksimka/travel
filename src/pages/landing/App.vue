<template>
  <div class="landing">
    <div class="landing-header-wrapper">
      <Header />
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import Header from './components/blocks/header.vue';

@Component({
  components: { Header },
})

export default class App extends Vue {}
</script>

<style>
body {
  margin: 0 !important;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Monsterrat', sans-serif;
}
a {
  color: #ffffff;
}
.landing {
  height: 5000px;
}
</style>
