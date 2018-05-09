<template>
  <div class="banner">
    <div class="container">
      <div class="center">
        <slot>
          <template v-if="$page">
            <h1>{{ $page.title || '' }}</h1>

            <p v-if="date">
              {{ date }}
            </p>
          </template>

          <h1 v-else>{{ $site.title || '' }}</h1>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'TheHeaderBanner',
  computed: {
    date () {
      const date = this.$page.frontmatter.date || ''
      // return moment(date).format('dddd')
      return ''
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@theme/styles/variables.styl'

.banner
  cursor default
  height $bannerHeight
  border-bottom 1px solid $borderColor
  color #fff
  .container
    height 100%
    display flex
    align-items center
    justify-content center
    .center
      z-index 19
      text-align center
      transition all 0.2s ease-in-out
      &:hover
        transform scale(1.2)

</style>

