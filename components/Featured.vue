<template>
  <div class="featured-panel">
      Featured
  </div>
</template>
<script>
  export default {
    data() {
      return {
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

    methods: {
    }
  }
</script>
<style lang="scss">
  @import '~@/assets/css/abstracts/abstract';

  .featured-panel {

  }
</style>