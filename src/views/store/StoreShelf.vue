<template>
    <div class="store-shelf">
      <shelf-title></shelf-title>
      <scroll class="store-shelf-scroll-wrapper">
        <shelf-search></shelf-search>
      </scroll>
    </div>
</template>

<script>
  import ShelfTitle from '../../components/shelf/ShelfTitle'
  import { storeShelfMixin } from '../../utils/mixin'
  import Scroll from '../../components/common/Scroll'
  import ShelfSearch from '../../components/shelf/ShelfSearch'

  export default {
     mixins: [storeShelfMixin],
     components: {
      ShelfTitle,
       Scroll,
       ShelfSearch
  }
      }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../assets/styles/global";
  .store-shelf{
    position: relative;
    z-index: 100;
    width: 100%;
    height: 100%;
    background: white;
    .store-shelf-scroll-wrapper {
      position: absolute;
      z-index: 101;
      top: 0;
      left: 0;
    }
  }
</style>
