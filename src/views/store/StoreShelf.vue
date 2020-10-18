<template>
    <div class="store-shelf">
      <shelf-title></shelf-title>
      <scroll class="store-shelf-scroll-wrapper"
      :top="0"
      @onScroll="onscroll">
        <shelf-search></shelf-search>
        <shelf-list></shelf-list>
      </scroll>
    </div>
</template>

<script>
  import ShelfTitle from '../../components/shelf/ShelfTitle'
  import { storeShelfMixin } from '../../utils/mixin'
  import Scroll from '../../components/common/Scroll'
  import ShelfSearch from '../../components/shelf/ShelfSearch'
  import { shelf } from '../../api/store'
  import ShelfList from '../../components/shelf/ShelfList'

  export default {
     mixins: [storeShelfMixin],
     components: {
      ShelfTitle,
       Scroll,
       ShelfSearch,
       ShelfList
  },
    methods: {
      onscroll(offsetY) {
        this.setOffsetY(offsetY)
      },
       getShelfList() {
        shelf().then(response => {
          if (response.status === 200 && response.data && response.data.bookList) {
            this.setShelfList(response.data.bookList)
          }
})
       }
    },
    mounted() {
       this.getShelfList()
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
