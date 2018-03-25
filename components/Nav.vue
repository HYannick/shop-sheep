<template>
  <div class="main__nav">
    <div class="main__nav-logo">
      <a href="#0">M</a>
    </div>
    <div class="main__nav-menu">
      <ul class="main__nav-menu-left">
        <li>
          <a href="#0" class="menu-icon"><span class="menu-icon__bar"></span> Menu</a>
        </li>
        <li>
          <a href="#0" class="gender__icon">
            <svg>
              <use xlink:href="#man-icon"></use>
            </svg>
          </a>
        </li>
        <li>
          <a href="#0" class="gender__icon">
            <svg>
              <use xlink:href="#woman-icon"></use>
            </svg>
          </a>
        </li>
      </ul>
      <ul class="main__nav-menu-right">
        <li>
          <a href="#0" class="menu-search">
            <svg>
              <use xlink:href="#search-icon"></use>
            </svg>
          </a>
        </li>
        <li>
          <a href="#0" class="menu-cart">
            <svg>
              <use xlink:href="#cart-icon"></use>
            </svg>
            <span class="menu-cart-checkout">$ 2,170</span>
          </a>
        </li>
        <li>
          <a href="#0" class="menu-profile">
            <img src="/avatarpl.jpg"/>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import '~/assets/svg/man-icon.svg'
  import '~/assets/svg/woman-icon.svg'
  import '~/assets/svg/cart-icon.svg'
  import '~/assets/svg/search-icon.svg'

  export default {}
</script>
<style lang="scss">
  @import '~@/assets/css/abstracts/abstract';

  .main__nav {
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 999;
    width: 100%;
    padding: 1rem;
    &-menu-right {
      padding-right: 2rem;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex: 1;
      & > li {
        margin-left: 2rem;
      }
      .menu-profile {
        display: block;
        width: 5rem;
        height: 5rem;
        overflow: hidden;
        border-radius: 50%;
        img {
          width: 100%;
        }
      }
      .menu-cart {
        color:  $color--lightest;
        span {
          margin-left: 2rem;
          font-size: 1.2rem;
        }
      }
      .menu-cart, .menu-search {
        display: flex;
        align-items: center;
        svg {
          width: 1.5rem;
          height: 1.5rem;
          fill: $color--lightest;
        }
      }
    }
    &-menu-left {
      display: flex;
      align-items: center;
      padding-left: 2rem;
      flex: 1;
      > li {
        margin-right: 1rem;
        .gender__icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 4.5rem;
          height: 4.5rem;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          z-index: 1;
          &:before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 4.5rem;
            height: 4.5rem;
            opacity: 0;
            transform: scale(0.2) translate(-50%, -50%);
            transform-origin: 0 0;
            transition: 0.3s ease;
            background:  $color--lightest;
            z-index: -1;
          }
          svg {
            width: 3rem;
            height: 3rem;
            fill:  $color--lightest;
            stroke:  $color--lightest;
            transition: 0.3s ease;
          }

          &:hover {
            &:before {
              opacity: 1;
              border-radius: 50%;
              transform: scale(1) translate(-50%, -50%);
            }
            svg {
              fill: $color--blue-2;
              stroke: $color--blue-2;
            }
          }
        }

      }
    }
    &-logo {
      flex: 0.8;
      a {
        padding-left: 2rem;
        color: $color--blue-2;
        font-weight: bold;
        font-size: 3rem;
        font-family: 'Anurati', monospace, sans-serif;
      }
    }
    &-menu {
      flex: 2;
      display: flex;
      align-items: center;
    }
    .menu-icon {
      display: flex;
      height: 2.5rem;
      align-items: center;
      justify-content: center;
      transition: 0.3s;
      overflow: hidden;
      color:  $color--lightest;
      font-size: 1.5rem;
      &:hover {
        border-radius: 50%;
      }
      span {
        width: 2.5rem;
        height: 0.2rem;
        margin-right: 1rem;
        background:  $color--lightest;
        position: relative;
        &:before, &:after {
          content: '';
          width: 100%;
          height: 0.2rem;
          left: 0;
          background:  $color--lightest;
          position: absolute;
          transition: 0.3s ease;
        }
        &:before {
          top: -1rem;
        }
        &:after {
          bottom: -1rem;
        }
      }
    }
  }
</style>