import iconWrapper from './ui/icon-wrapper.vue';
import uiContainer from './ui/ui-container.vue';

export default function (vue: any) {
  const components = {
    install() {
      vue.component('icon-wrapper', iconWrapper);
      vue.component('ui-container', uiContainer);
    },
  };
  vue.use(components);
}
