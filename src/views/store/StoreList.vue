<template>
  <div class="book-list-wrapper">
    <detail-title :title="title"
                  :showShelf="true"
                  @back="back"
                  ref="title"></detail-title>
    <scroll class="book-list-scroll-wrapper"
            :top="42"
            @onScroll="onScroll"
            ref="scroll">
      <featured :data="value" :titleText="titleText ? titleText : getCategoryText(key)" :btnText="''" v-for="(value, key, index) in list"
                :key="index"></featured>
    </scroll>
  </div>
</template>

<script>
  import DetailTitle from '../../components/detail/DetaiTitle'
  import Scroll from '../../components/common/Scroll'
  import Featured from '../../components/home/Featured'
  import { realPx } from '../../utils/utils'
  import { list } from '../../api/store'
  import { categoryList, categoryText } from '../../utils/store'

  export default {
    components: {
      DetailTitle,
      Scroll,
      Featured
    },
    computed: {
      title() {
        if (this.list) {
          return this.total && this.$t('home.allBook').replace('$1', this.totalNumber)
        } else {
          return null
        }
      },
      totalNumber() {
        let num = 0
        Object.keys(this.list).forEach(key => {
          num += this.list[key].length
        })
        return num
      }
    },
    data() {
      return {
        list: null,
        total: null
      }
    },
    methods: {
      getCategoryText(key) {
        return `${categoryText(categoryList[key], this)}(${this.list[key].length})`
      },
      back() {
        this.$router.go(-1)
      },
      onScroll(offsetY) {
        if (offsetY > realPx(42)) {
          this.$refs.title.showShadow()
        } else {
          this.$refs.title.hideShadow()
        }
      },
      // 根据category或者keyword搜索
      getList() {
        list().then(response => {
          this.list = response.data.data
          this.total = response.data.total
          const category = this.$route.query.category // 接收router-link传的参数。$route为当前router跳转对象里面可以获取name、path、query、params等
          const keyword = this.$route.query.keyword
          if (category) {
            const key = Object.keys(this.list).filter(item => item === category)[0]
            const data = this.list[key]
            this.list = {} // 新建一个对象数组list用来存获取的值，接下来会展示
            this.list[key] = data
          } else if (keyword) {
            Object.keys(this.list).filter(key => {
              this.list[key] = this.list[key].filter(book => book.fileName.indexOf(keyword) >= 0)
              return this.list[key].length > 0 // 如果大一0才返回
            })
          }
        })
      }
    },
    created() {
      this.getList()
      this.titleText = this.$route.query.categoryText
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../assets/styles/global";

  .book-list-wrapper {
    width: 100%;
    height: 100%;
    background: white;
  }
</style>
