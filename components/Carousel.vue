<template>
  <div class="carousel-view" ref="carousel">
    <no-ssr>
      <flickity
        class="carousel"
        ref="flickity"
        :options="flickityOptions"
      >
        <div class="slide" v-for="slide in slides" :key="slide.id">
          <img ref="img" :src="`/${slide.src}.jpg`"/>
        </div>
      </flickity>
    </no-ssr>
    <div class="main-title" ref="title">
      <h4>MOU<br>VANCE</h4>
    </div>
    <!-- if you don't want to use the buttons Flickity provides -->
    <div class="carousel-controls">
      <button @click="previous()">Custom Previous Button</button>
      <button @click="next()">Custom Next Button</button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        flickityOptions: {
          imagesLoaded: true,
          pageDots: true,
          wrapAround: true,
          selectedAttraction: 0.01,
          friction: 0.15
        },
        slides: [
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
        ]
      }
    },

    mounted() {
    },
    methods: {
      next() {
        this.$refs.flickity.next();
        const flkty = this.$refs.flickity.flickity
        const imgs = this.$refs.img
        this.$refs.flickity.on('scroll', (e) => {
          flkty.slides.forEach(( slide, i )  => {
            const img = imgs[i];
            let x = 0;
            if( 0 === i ) {
              x = Math.abs( flkty.x ) > flkty.slidesWidth ? ( flkty.slidesWidth + flkty.x + flkty.slides[flkty.slides.length - 1 ].outerWidth + slide.target ) : ( slide.target + flkty.x );
            } else if( i === flkty.slides.length - 1 ) {
              x = Math.abs( flkty.x ) + flkty.slides[i].outerWidth < flkty.slidesWidth ? ( slide.target - flkty.slidesWidth + flkty.x - flkty.slides[i].outerWidth ) : ( slide.target + flkty.x );
            } else {
              x = slide.target + flkty.x;
            }
            img.style['transform'] = 'translateX(' + x * ( -1 / 3 ) + 'px)';
          });
        });
      },

      previous() {
        this.$refs.flickity.previous();
      },

      parallaxIt(e) {
        console.log('event', e)
      }
    }
  }
</script>
<style lang="scss">
  @import '~@/assets/css/abstracts/abstract';

  .main-title {
    position: absolute;
    top: 50%;
    left: 10rem;
    color: $color--lightest;
    font-size: 10rem;
    font-family: $font-family--2;
    transform: translateY(-50%);
  }

  .carousel-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    position: relative;
    .carousel-controls {
      position: absolute;
      bottom: 0;
    }
  }

  .carousel {
    overflow: hidden;
    width: 100%;
    min-height: 25rem;
    height: 100%;
  }

  .slide {
    width: 50%;
    height: 60rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top:0;
      left:0;
      right: 0;
      bottom: 0;
      background: $color--blue-2;
      opacity: 0.6;
      z-index: 1;
      transition: opacity 0.3s;
    }
    &.is-selected{
      &:before{
        opacity: 0.2;
      }
    }
    img {
      opacity: 1;
      height: 100%;
    }
  }
</style>