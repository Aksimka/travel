import link from './ui/ui-link.vue';
import iconTextSnippet from './ui/icon-text-snippet.vue';

export default function (vue: any) {
  const components = {
    install() {
      vue.component('ui-link', link);
      vue.component('icon-text-snippet', iconTextSnippet);
    },
  };
  vue.use(components);
}
