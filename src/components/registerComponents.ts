import iconWrapper from './ui/icon-wrapper.vue';

export default function (vue: any) {
  const components = {
    install() {
      vue.component('icon-wrapper', iconWrapper);
    },
  };
  vue.use(components);
}
