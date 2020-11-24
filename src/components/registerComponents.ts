import iconWrapper from './ui/icon-wrapper.vue';

// grid
import uiContainer from './ui/grid/ui-container.vue';
import uiRow from './ui/grid/ui-row.vue';
import uiCol from './ui/grid/ui-col.vue';

export default function (vue: any) {
  const components = {
    install() {
      vue.component('icon-wrapper', iconWrapper);
      vue.component('ui-container', uiContainer);
      vue.component('ui-row', uiRow);
      vue.component('ui-col', uiCol);
    },
  };
  vue.use(components);
}
