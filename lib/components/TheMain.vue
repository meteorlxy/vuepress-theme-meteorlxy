<template>
  <TransitionFadeSlide>
    <div
      class="container clearfix"
      :class="containerClass"
      :key="showAside"
    >
      <main class="main">
        <TransitionFadeSlide>
          <component :is="layout" />
        </TransitionFadeSlide>
      </main>

      <aside class="aside">
        <InfoCard class="main-div" />
      </aside>
    </div>
  </TransitionFadeSlide>
</template>

<script>
import TransitionFadeSlide from './TransitionFadeSlide.vue'
import InfoCard from './InfoCard.vue'
import Home from './layouts/Home.vue'
import Posts from './layouts/Posts.vue'
import Post from './layouts/Post.vue'
import Page from './layouts/Page.vue'
import Tags from './layouts/Tags.vue'
import Categories from './layouts/Categories.vue'
import Tag from './layouts/Tag.vue'
import Category from './layouts/Category.vue'

export default {
  name: 'TheMain',

  components: {
    TransitionFadeSlide,
    InfoCard,
    /* eslint-disable vue/no-unused-components */
    Home,
    Posts,
    Post,
    Page,
    Tags,
    Categories,
    Tag,
    Category,
    /* eslint-enable vue/no-unused-components */
  },

  props: {
    layout: {
      type: String,
      required: true,
    },
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
        'show-aside': this.showAside,
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
@require '~@theme/styles/variables'

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
