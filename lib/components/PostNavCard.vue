<template>
  <div
    v-if="showContents || showComments"
    class="post-nav-card"
    :style="style"
  >
    <div
      v-if="showContents"
      class="post-nav-contents"
    >
      <Icon name="book" />

      <span>{{ $themeConfig.lang.toc }}</span>

      <TOC class="post-nav-toc" />
    </div>

    <div
      v-if="showComments"
      class="post-nav-comments"
    >
      <Icon name="comment" />

      <RouterLink to="#post-comments">
        {{ $themeConfig.lang.comments }}
      </RouterLink>
    </div>
  </div>
</template>

<script>
import throttle from 'lodash.throttle'
import debounce from 'lodash.debounce'
import Icon from './Icon.vue'

export default {
  name: 'PostNavCard',

  components: {
    Icon,
  },

  data () {
    return {
      fixed: false,
      width: 0,
      scrollListener: throttle(() => {
        this.fixed = this.infoCardDom.getBoundingClientRect().bottom < this.navbarHeight
      }, 100),
      resizeListener: debounce(() => {
        this.width = this.getWidth()
      }, 100),
    }
  },

  computed: {
    style () {
      return {
        'position': this.fixed ? 'fixed' : 'relative',
        'top': this.fixed ? `${this.navbarHeight}px` : 0,
        'width': `${this.width}px`,
      }
    },

    infoCardDom () {
      return document.querySelector('#app .info-card')
    },

    navbarHeight () {
      return document.querySelector('.navbar').clientHeight
    },

    showContents () {
      return this.$page.headers && this.$page.headers.filter(h => h.level === 2).length > 0
    },

    showComments () {
      return this.$themeConfig.comments !== false && this.$frontmatter['vssue'] !== false && (
        this.$frontmatter['vssue-id'] || this.$frontmatter['vssue-title'] || this.$frontmatter['title']
      )
    },
  },

  mounted () {
    this.width = this.getWidth()

    window.addEventListener('scroll', this.scrollListener)
    window.addEventListener('resize', this.resizeListener)
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.scrollListener)
    window.removeEventListener('resize', this.resizeListener)
  },

  methods: {
    getWidth () {
      return this.infoCardDom.clientWidth
    },
  },
}
</script>

<style lang="stylus">
@require '~@theme/styles/variables'

.post-nav-card
  padding 1rem
  color $grayTextColor
  word-break break-all
  line-height 160%
  .icon
    fill $grayTextColor
  .post-nav-toc > ul
      word-break normal
      margin 0.5rem 0
      padding-left 2rem
      ul
        padding-left 0.8rem
  .post-nav-comments a
    color $grayTextColor
    &:hover
      text-decoration underline
</style>
