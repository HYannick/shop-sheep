<template>
  <div>
    <div class="grid__layer">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <section class="heading__content">
      <main-nav class="heading__content-main-nav"></main-nav>
      <m-side-nav class="heading__content-side-nav"></m-side-nav>
      <div class="heading__content-carousel-wrapper">
        <m-carousel class="heading__content-carousel" :parallax="true" slideWidth="50%" :autoPlay="true"
                    :data="headData"></m-carousel>
        <div class="main-title" ref="title">
          <h4>MOU<br>VANCE</h4>
        </div>
      </div>
    </section>
    <div class="main__wrapper">
      <section class="featured__content">
        <m-featured
          :featuredData="featuredDataFirst"
          :reverse="false"
          title="Casual Spring"
          showcaseTitle="Casual Things :: 2018"
          backgroundColor="#913229"
          bgImg="/featured/featured-bg-2.jpg"></m-featured>
      </section>
      <section class="featured__content">
        <m-featured
          title="Maxx Mad"
          :reverse="true"
          backgroundColor="#c1e2dc"
          bgImg="/featured/featured-bg-1.jpg"></m-featured>
      </section>
      <section class="featured__content">
        <m-featured title="Maxx Mad" :reverse="false" bgImg="/featured/featured-6.jpg"
                    backgroundColor="#fbbed0"></m-featured>
      </section>
    </div>
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
    },
    data() {
      return {
        headData: [
          {
            title: 'I am Slide A',
            src: 'slide-0',
            id: 1
          },
          {
            title: 'I am Slide B',
            src: 'slide-1',
            id: 2
          },
          {
            title: 'I am Slide C',
            src: 'slide-2',
            id: 3
          },
          {
            title: 'I am Slide D',
            src: 'slide-3',
            id: 4
          },
          {
            title: 'I am Slide E',
            src: 'slide-4',
            id: 5
          }
        ],
        featuredDataFirst: [
          {
            title: 'Spring Breeze',
            src: 'featured-carousel/feat-1',
            price: '$13.99',
            id: 1
          },
          {
            title: 'Light Touch',
            src: 'featured-carousel/feat-2',
            price: '$30.99',
            id: 2
          },
          {
            title: 'Soft Feeling',
            src: 'featured-carousel/feat-3',
            price: '$28.99',
            id: 3
          },
          {
            title: 'Clozee',
            src: 'featured-carousel/feat-4',
            price: '$21.99',
            id: 4
          },
          {
            title: 'Reminder',
            src: 'featured-carousel/feat-2',
            price: '$25.99',
            id: 5
          },
          {
            title: 'Good Mood',
            src: 'featured-carousel/feat-1',
            price: '$23.99',
            id: 6
          },
        ]
      }
    }
  }
</script>

<style lang="scss">
  @import '~@/assets/css/abstracts/abstract';

  html {
    font-size: 62.5%;
  }

  .heading__content {
    display: grid;
    grid-template-columns: 1fr 4fr;
    height: 60rem;
    &-side-nav {
      flex: 0.5;
    }
    &-carousel-wrapper {
      flex: 2;
      background: $color--blue-1;
      position: relative;
      overflow: hidden;
      .main-title {
        position: absolute;
        top: 50%;
        left: 10rem;
        color: $color--lightest;
        font-size: 10rem;
        font-family: $font-family--2;
        transform: translateY(-50%);
      }

    }
  }

  .main__wrapper {
    overflow: hidden;
  }

  .featured__content {
    height: 80rem;
    display: grid;
    grid-template-columns: repeat(10,1fr);
    > div {
      grid-column: 1/11;
    }
  }

  .grid__layer {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: grid;
    z-index: -1;
    grid-template-columns: repeat(10, 1fr);
    & > div {
      border-right: 1px dashed $color--dark;
      opacity: 0.5;
      &:last-child {
        border-right: none;
      }
    }
  }
</style>
