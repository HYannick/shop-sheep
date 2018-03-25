<template>
  <div>
    <ul class="side__nav">
      <li class="side__nav-item" v-for="(item, i) in navList" :key="i">
        <nuxt-link :to="item.url">
          <svg><use :xlink:href="item.icon"></use></svg>
          <span>{{item.title}}</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
  import NuxtLink from "../.nuxt/components/nuxt-link";
  import '~/assets/svg/clothes/024-jeans.svg'
  import '~/assets/svg/clothes/012-dress-2.svg'
  import '~/assets/svg/clothes/011-dress-3.svg'
  import '~/assets/svg/clothes/015-dress.svg'
  import '~/assets/svg/clothes/007-skirt-1.svg'
  import '~/assets/svg/clothes/014-dress-1.svg'
  import '~/assets/svg/clothes/018-watch.svg'
  import '~/assets/svg/clothes/039-shirt-1.svg'
  export default {
    components: {NuxtLink},
    data() {
      return {
        navList: [
          {title: 'Outdoor', url: 'outdoor', icon: '#024-jeans'},
          {title: 'Formal', url: 'formal', icon: '#012-dress-2'},
          {title: 'Casual', url: 'casual', icon: '#011-dress-3'},
          {title: 'Cocktail', url: 'cocktail', icon: '#015-dress'},
          {title: 'Active', url: 'active', icon: '#007-skirt-1'},
          {title: 'Clubbing', url: 'clubbing', icon: '#014-dress-1'},
          {title: 'Accessories', url: 'accessories', icon: '#018-watch'},
          {title: 'More?', url: 'more', icon: '#039-shirt-1'}
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '~@/assets/css/abstracts/abstract';
  .side__nav {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 10rem 5rem 2rem;
    > li {
      flex-basis: 50%;
      margin-bottom: 3rem;
      a {
        display: flex;
        align-items:center;
        justify-content: center;
        flex-direction: column;
        span {
          color: $color--blue-2;
          font-size: 1.2rem;
        }
        svg {
          width: 4rem;
          height: 4rem;
          margin-bottom: 1rem;
          stroke: $color--blue-2;
          fill: $color--blue-2;
        }
      }
    }
  }
</style>