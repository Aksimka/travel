<template>
  <div class="header">
    <div class="header__layout"></div>
    <div class="header-content">
      <div class="header-content__main-title">
        Are you ready for <ui-link>Bangok</ui-link> and <ui-link>Pattaya</ui-link>?
      </div>
      <div class="header-content__second-title">
        With discounts up to 150 € per room; 2 nights in Bangok, 3 days in Pattaya for only 449 €!
      </div>
      <div class="header-content-snippets">
        <div class="header-content-snippet-wrapper" v-for="(i, index) in textSnippets" :key="index">
          <icon-text-snippet>
            <template v-slot:icon>
              <component :is="i.icon"/>
            </template>
            <ui-link v-if="i.link" border-style="1px solid rgba(255,255,255,0.4)">
              {{ i.text }}
            </ui-link>
            <span v-else>{{ i.text }}</span>
          </icon-text-snippet>
        </div>
      </div>
    </div>
    <ui-container>
      <div class="header-search-block-wrapper">
        <search />
      </div>
    </ui-container>
  </div>
</template>

<script>
import IconTextSnippet from '@/pages/landing/components/ui/icon-text-snippet.vue';
import search from '@/pages/landing/components/blocks/search.vue';
import iconPinmap from '../icons/icon-pinmap.vue';
import iconClock from '../icons/icon-clock.vue';
import iconCloud from '../icons/icon-cloud.vue';
import iconPlane from '../icons/icon-plane.vue';
import iconBed from '../icons/icon-bed.vue';
import iconCar from '../icons/icon-car.vue';

export default {
  components: {
    IconTextSnippet,
    iconPinmap,
    iconClock,
    iconCloud,
    iconPlane,
    iconBed,
    iconCar,
    search,
  },
  data: () => ({
    textSnippets: [
      {
        icon: 'icon-pinmap',
        text: 'Bangok & Pattaya - TH',
      },
      {
        icon: 'icon-clock',
        text: '23:15, GMT+7',
      },
      {
        icon: 'icon-cloud',
        text: 'Sunny, 28°c',
      },
      {
        icon: 'icon-plane',
        text: '+78 Flights',
        link: '#',
      },
      {
        icon: 'icon-bed',
        text: '+615 Hotels',
        link: '#',
      },
      {
        icon: 'icon-car',
        text: '+41 Cars',
        link: '#',
      },
    ],
  }),
};
</script>

<style scoped lang="scss">
.header {
  background-image: url("../../assets/images/header-image.jpg");
  background-size: cover;
  position: relative;
  &__layout {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #292929, rgba(67, 63, 63, 0.2));
    opacity: .9;
  }
  .header-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding-top: 290px;
    &__main-title {
      font-size: 56px;
      font-weight: 600;
      color: #ffffff;
      letter-spacing: 1px;
    }
    &__second-title {
      font-size: 20px;
      color: #ffffff;
      margin-top: 52px;
      letter-spacing: 1px;
      font-weight: 400;
    }
    .header-content-snippets {
      margin-top: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      width: 68%;
      max-width: 1315px;
    }
  }
  .header-search-block-wrapper {
    position: relative;
    margin-top: 350px;
    padding-bottom: 50px;
  }
}

@media screen and (max-width: 1264px) {
  .header {
    .header-content {
      display: block !important;
      padding-top: 200px;
      &__main-title {
        margin-left: 50px;
      }
      &__second-title {
        margin-left: 50px;
        padding-right: 30px;
      }
      .header-content-snippets {
        margin: 50px auto 0 auto;
        .header-content-snippet-wrapper {
          width: 220px;
          margin-top: 24px;
        }
      }
    }
    .header-search-block-wrapper {
      margin-top: 220px;
    }
  }
}

@media screen and (max-width: 960px) {
  .header-content-snippets {
    width: 85% !important;
  }
}

@media screen and (max-width: 768px) {
  .header-search-block-wrapper {
    margin-top: 100px !important;
  }
}
</style>
