<template>
  <div class="shelf-footer" v-show="isEditMode">
    <div class="shelf-footer-tab-wrapper" v-for="item in tabs"
    :key="item.index" @click="onTabClick(item)">
      <div class="shelf-footer-tab" :class="{'is-Selected': isSelected}">
        <div class="icon-private tab-icon" v-if="item.index === 1 &&
         !isPrivate"></div>
        <div class="icon-private-see tab-icon" v-if="item.index === 1 &&
          isPrivate"></div>
        <div class="icon-download tab-icon" v-if="item.index === 2"></div>
        <div class="icon-move tab-icon" v-if="item.index === 3"></div>
        <div class="icon-shelf tab-icon" v-if="item.index === 4"></div>
        <div class="tab-text">{{label(item)}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { storeShelfMixin } from '../../utils/mixin'
  import { saveBookShelf } from '../../utils/localStorage'

  export default {
    mixins: [storeShelfMixin],
    data() {
      return {
        popupMenu: null
      }
    },
    computed: {
      isPrivate() {
        if (!this.isSelected) {
          return false
        } else {
          return this.shelfSelected.every(item => item.private)
        }
      },
      isSelected() {
        return this.shelfSelected && this.shelfSelected.length > 0
      },
      tabs() {
        return [
          {
            label1: this.$t('shelf.private'),
            label2: this.$t('shelf.noPrivate'),
            index: 1
          },
          {
            label1: this.$t('shelf.download'),
            label2: this.$t('shelf.delete'),
            index: 2
          },
          {
            label1: this.$t('shelf.move'),
            index: 3
          },
          {
            label1: this.$t('shelf.remove'),
            index: 4
          }
        ]
      }
    },
    methods: {
      setPrivate() {
        let isPrivate
        if (this.isPrivate) {
          isPrivate = false
        } else {
          isPrivate = true
        }
        this.shelfSelected.forEach(book => {
          book.private = isPrivate
        })
        this.hidePopup()
        this.setIsEditMode(false)
        saveBookShelf(this.shelfList)
        if (isPrivate) {
          this.simpleToast(this.$t('shelf.setPrivateSuccess'))
        } else {
          this.simpleToast(this.$t('shelf.closePrivateSuccess'))
        }
      },
      hidePopup() {
        this.popupMenu.hide()
      },
      showPrivate() {
        this.popupMenu = this.popup({
          title: this.$t('shelf.setPrivateTitle'),
          btn: [{
            text: this.$t('shelf.open'),
            click: () => {
              this.setPrivate()
            }
          }, {
            text: this.$t('shelf.cancel'),
            click: () => {
              this.hidePopup()
            }
          }]
        }).show()
      },
      onTabClick(item) {
        if (!this.isSelected) {
          return
        }
        switch (item.index) {
          case 1:
            this.showPrivate()
            break
          case 2:
            break
          case 3:
            break
          case 4:
            break
          default:
            break
        }
      },
      label(item) {
        switch (item.index) {
          case 1:
            return this.isPrivate ? item.label2 : item.label1
          default:
            return item.label1
        }
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../assets/styles/global";
  .shelf-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 120;
    display: flex;
    width: 100%;
    height: px2rem(48);
    background: white;
    box-shadow: 0 px2rem(-2) px2rem(4) 0 rgba(0, 0, 0, .1);
    .shelf-footer-tab-wrapper {
      flex: 1;
      width: 25%;
      height: 100%;
      .shelf-footer-tab {
        width: 100%;
        height: 100%;
        @include columnCenter;
        opacity: .5;
        &.is-Selected {
          opacity: 1
        }
        .tab-icon {
          font-size: px2rem(20);
          color: #666;
        }
        .tab-text {
          margin-top: px2rem(5);
          font-size: px2rem(12);
          color: #666;
        }
      }
    }
  }
</style>
