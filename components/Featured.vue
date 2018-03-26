<template>
  <div class="featured-panel" :style="{backgroundColor, 'flexDirection': reverse ? 'row-reverse': 'row'}">
    <div class="featured-panel__background" :style="{'flexDirection': reverse ? 'row-reverse': 'row'}">
      <div class="img-wrapper">
        <div class="separator" :style="{
          right: reverse ? 'calc(100% - 10rem)' : 0,
          transform: reverse ? 'rotate(180deg)' : 'none',
          background: `-moz-linear-gradient(left, rgba(255, 255, 255, 0) 0%, ${backgroundColor} 100%)`,
          background: `-webkit-linear-gradient(left, rgba(255, 255, 255, 0) 0%,  ${backgroundColor}  100%)`,
          background: `linear-gradient(to right, rgba(255, 255, 255, 0) 0%,  ${backgroundColor}  100%)`
      }"></div>
        <img :src="bgImg"/>
      </div>

    </div>
    <div class="featured-panel__heading">
      <h2 class="featured-panel__title">
        {{ title }}
      </h2>
    </div>
    <div class="featured-panel__items" :class="{'featured-panel__items-reversed': reverse}">
      <div class="featured-panel__items-header">
        <h3>{{showcaseTitle}}</h3>
        <ul class="featured-panel__items-header-options">
          <li><a href="#0">
            <svg>
              <use xlink:href="#heart-icon"></use>
            </svg>
          </a></li>
          <li><a href="#0">
            <svg>
              <use xlink:href="#cart-icon"></use>
            </svg>
          </a></li>
          <li><a href="#0">
            <svg>
              <use xlink:href="#comments-icon"></use>
            </svg>
          </a></li>
        </ul>
      </div>
      <m-carousel :data="featuredData" slideWidth="33.33336%" :isFeatured="true"></m-carousel>
    </div>
  </div>
</template>
<script>
  import MCarousel from '~/components/Carousel.vue'
  import '~/assets/svg/heart-icon.svg'
  import '~/assets/svg/cart-icon.svg'
  import '~/assets/svg/comments-icon.svg'

  export default {
    props: ['bgImg', 'backgroundColor', 'title', 'reverse', 'featuredData', 'showcaseTitle'],
    components: {
      MCarousel
    },
    data() {
      return {}
    },

    methods: {}
  }
</script>
<style lang="scss">
  @import '~@/assets/css/abstracts/abstract';

  .featured-panel {
    height: 100%;
    display: grid;
    grid-template-rows: repeat(8, 10rem);
    grid-template-columns: repeat(10, 1fr);
    position: relative;
    &__heading {
      position: relative;
      grid-row: 5/7;
      grid-column: 1/4;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__background {
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      opacity: 0.7;
      display: flex;
      .img-wrapper {
        display: flex;
        width: 50%;
        position: relative;
        align-items: flex-start;
        justify-content: center;
        .separator {
          position: absolute;
          width: 10rem;
          top: 0;
          right: 0;
          height: 100%;
        }
        img {
          width: 100%;
        }
      }
    }
    &__title {
      font-family: $font-family--2;
      font-size: 6rem;
      text-transform: uppercase;
      max-width: 25rem;
      z-index: 9;
      color: $color--lightest;
    }
    &__items {
      grid-column: 5/10;
      grid-row: 4/9;
      background: white;
      display: flex;
      flex-direction: column;
      transform: translateY(2rem);
      z-index: 1;
      &.featured-panel__items-reversed {
        grid-column: 1/6;
        grid-row: 4/9;
      }
      &-header {
        padding: 2rem 2rem 0;
        display: flex;
        align-items: center;
        > * {
          flex: 1;
        }
        h3 {
          font-family: $font-family--2;
          font-size: 2.5rem;
          color: $color--blue-2;
        }
        &-options {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          > li {
            margin-left: 2rem;
          }
          svg {
            width: 1.5rem;
            height: 1.5rem;
            fill: $color--blue-2;
            fillstroke: $color--blue-2;
          }
        }
      }
    }
  }
</style>