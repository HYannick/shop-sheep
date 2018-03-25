<template>
  <div>
    <section class="heading__content">
      <main-nav class="heading__content-main-nav"></main-nav>
      <m-side-nav class="heading__content-side-nav"></m-side-nav>
      <div class="heading__content-carousel-wrapper">
        <m-carousel class="heading__content-carousel"></m-carousel>
      </div>
    </section>
    <section class="featured__content">
      <m-featured title="Casual Spring" position="right" background="#fea6b2"></m-featured>
    </section>
    <section class="featured__content">
      <m-featured title="Maxx Mad" position="left" background="#ecd9d1"></m-featured>
    </section>
    <section class="featured__content">
      <m-featured title="Maxx Mad" position="left" background="#1e1e1e"></m-featured>
    </section>
  </div>
</template>

<script>
  import MainNav from '~/components/Nav.vue'
  import MCarousel from '~/components/Carousel.vue'
  import MFeatured from '~/components/Featured.vue'
  import MSideNav from '~/components/SideNav.vue'

  export default {
    components: {
      MainNav,
      MCarousel,
      MSideNav,
      MFeatured
    }
  }
</script>

<style lang="scss">
  @import '~@/assets/css/abstracts/abstract';

  html {
    font-size: 62.5%;
  }

  .heading__content {
    display: flex;
    height: 60rem;
    &-side-nav {
      flex: 0.8;
      background: $color--grey-1;
    }
    &-carousel-wrapper {
      flex: 2;
      background: $color--blue-1;
    }
  }

  .featured__content {
    height: 90vh;
  }
</style>
