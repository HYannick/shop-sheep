<template>
  <div class="carousel-view" :class="{'carousel-view__featured': isFeatured}" ref="carousel">
    <no-ssr>
      <flickity
        class="carousel"
        ref="flickity"
        :options="flickityOptions"
      >
        <div class="slide" v-for="slide in slides" :key="slide.id" :style="{width: slideWidth || '100%'}">
          <img v-if="!isFeatured" ref="img" :src="`/${slide.src}.jpg`"/>
          <div class="card-item" v-else>
            <img :src="`/${slide.src}.jpg`"/>
            <div class="card-item__description">
              <p class="card-item__description-title">{{slide.title}}</p>
              <p class="card-item__description-price">{{slide.price}}</p>
            </div>
          </div>
        </div>
      </flickity>
    </no-ssr>
    <!-- if you don't want to use the buttons Flickity provides -->
    <div class="carousel-controls">
      <button @click="previous()">Custom Previous Button</button>
      <button @click="next()">Custom Next Button</button>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['slideWidth', 'parallax', 'autoPlay', 'data', 'isFeatured'],
    data() {
      return {
        flickityOptions: {
          imagesLoaded: true,
          pageDots: true,
          wrapAround: true,
          selectedAttraction: 0.01,
          friction: 0.15,
          autoPlay: this.autoPlay,
          cellAlign: this.isFeatured ? 'left' : 'center'
        },
        slides: this.data
      }
    },

    methods: {
      initParallax() {
        if (this.parallax) {
          const flkty = this.$refs.flickity.flickity
          const imgs = this.$refs.img
          this.$refs.flickity.on('scroll', (e) => {
            flkty.slides.forEach((slide, i) => {
              const img = imgs[i];
              let x = 0;
              if (0 === i) {
                x = Math.abs(flkty.x) > flkty.slidesWidth ? ( flkty.slidesWidth + flkty.x + flkty.slides[flkty.slides.length - 1].outerWidth + slide.target ) : ( slide.target + flkty.x );
              } else if (i === flkty.slides.length - 1) {
                x = Math.abs(flkty.x) + flkty.slides[i].outerWidth < flkty.slidesWidth ? ( slide.target - flkty.slidesWidth + flkty.x - flkty.slides[i].outerWidth ) : ( slide.target + flkty.x );
              } else {
                x = slide.target + flkty.x;
              }
              img.style['transform'] = 'translateX(' + x * ( -1 / 3 ) + 'px)';
            });
          });
        }
      },
      next() {
        this.$refs.flickity.next();
        this.initParallax()
      },

      previous() {
        this.$refs.flickity.previous();
        this.initParallax()
      }
    }
  }
</script>
<style lang="scss">
  @import '~@/assets/css/abstracts/abstract';

  .carousel-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    position: relative;
    .carousel-controls {
      position: absolute;
      bottom: 10rem;
    }
    &__featured {
      .slide {
        &:before {
          background: transparent;
        }
      }
    }
  }

  .carousel {
    overflow: hidden;
    width: 100%;
    min-height: 25rem;
    height: 100%;
  }

  .flickity-slider {
    height: 100%;
  }

  .slide {
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: $color--blue-2;
      opacity: 0.6;
      z-index: 1;
      transition: opacity 0.3s;
    }
    &.is-selected {
      &:before {
        opacity: 0.2;
      }
    }
    img {
      opacity: 1;
      height: 100%;
    }
  }

  .card-item {
    width: 100%;
    position: relative;
    padding: 1rem;
    img {
      width: 100%;
    }
    &__description {
      position: absolute;
      bottom: 2rem;
      left: 2rem;
      &-title {
        font-size: 1.5rem;
        font-weight: bold;
        font-family: $font-family--2;
      }
      &-price {
        font-size: 1.4rem;
      }
    }
  }
</style>