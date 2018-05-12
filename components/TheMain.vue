<template>
  <TransitionFadeSlide>
    <div
      class="container clearfix"
      :class="containerClass"
      :key="showAside">
      <main class="main">
        <TransitionFadeSlide>
          <component
            :is="layout"
            :key="$page.path"/>
        </TransitionFadeSlide>
      </main>

      <aside class="aside">
        <InfoCard class="main-div"/>
      </aside>
    </div>
  </TransitionFadeSlide>
</template>

<script>
import TransitionFadeSlide from '@theme/components/transitions/TransitionFadeSlide'
import InfoCard from '@theme/components/InfoCard'
import Home from '@theme/layouts/Home'
import Posts from '@theme/layouts/Posts'
import Post from '@theme/layouts/Post'
import Page from '@theme/layouts/Page'
export default {
  name: 'TheMain',
  components: {
    TransitionFadeSlide,
    InfoCard,
    Home,
    Posts,
    Post,
    Page
  },
  props: {
    layout: {
      type: String,
      required: true
    }
  },
  computed: {
    showAside () {
      if (this.$page.frontmatter.hasOwnProperty('aside')) {
        return this.$page.frontmatter.aside
      }
      return true
    },
    containerClass () {
      return {
        'show-aside': this.showAside
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@theme/styles/variables.styl'
.container
  position relative
  margin 1rem auto
  @media (max-width: $MQMobile - 1)
    margin 0.5rem auto
  &:not(.show-aside)
    .main
      width 100%
    .aside
      display none
  &.show-aside
    @media (min-width $MQWide)
      .main
        width 75%
      .aside
        width 25%
    @media (max-width: $MQWide - 1px) and (min-width: $MQMobile)
      .main
        width 70%
      .aside
        width 30%
    @media (min-width $MQMobile)
      .main
        float left
      .aside
        float left
        padding-left 1rem
    @media (max-width: $MQMobile - 1)
      .main
        width 100%
      .aside
        display none
</style>
