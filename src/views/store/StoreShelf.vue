<template>
    <div class="store-shelf">
      <shelf-title :title="$t('shelf.title')"></shelf-title>
      <scroll class="store-shelf-scroll-wrapper"
      :top="0"
      :bottom="scrollBottom"
      @onScroll="onscroll"
      ref="scroll">
        <shelf-search></shelf-search>
        <shelf-list :data="shelfList"></shelf-list>
      </scroll>
      <shelf-footer></shelf-footer>
    </div>
</template>

<script>
  import ShelfTitle from '../../components/shelf/ShelfTitle'
  import { storeShelfMixin } from '../../utils/mixin'
  import Scroll from '../../components/common/Scroll'
  import ShelfSearch from '../../components/shelf/ShelfSearch'
  import ShelfList from '../../components/shelf/ShelfList'
  import ShelfFooter from '../../components/shelf/ShelfFooter'

  export default {
     mixins: [storeShelfMixin],
     components: {
      ShelfTitle,
       Scroll,
       ShelfSearch,
       ShelfList,
       ShelfFooter
  },
    methods: {
      onscroll(offsetY) {
        this.setOffsetY(offsetY)
      }
    },
    data() {
      return {
        scrollBottom: 0
      }
    },
    watch: {
      isEditMode(isEditMode) {
        this.scrollBottom = isEditMode ? 48 : 0
        this.$nextTick(() => {
          this.$refs.scroll.refresh()
        })
      }
    },
    mounted() {
       this.getShelfList()
      this.setShelfCategory([])
      this.setCurrentType(1)
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
