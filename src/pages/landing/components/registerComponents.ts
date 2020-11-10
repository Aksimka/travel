import link from './ui/link.vue';

export default function (vue: any) {
  const components = {
    install() {
      vue.component('ui-link', link);
    },
  };
  vue.use(components);
}
