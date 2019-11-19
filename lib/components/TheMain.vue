<template>
  <TransitionFadeSlide>
    <div
      :key="showAside"
      class="container clearfix"
      :class="containerClass"
    >
      <main class="main">
        <TransitionFadeSlide>
          <component
            :is="layout"
            :key="$page.path"
          />
        </TransitionFadeSlide>
      </main>

      <aside class="aside">
        <InfoCard class="main-div" />

        <PostNavCard
          v-if="$page.type === 'post'"
          class="main-div"
        />
      </aside>
    </div>
  </TransitionFadeSlide>
</template>

<script>
import TransitionFadeSlide from '@theme/components/TransitionFadeSlide.vue'
import PostNavCard from '@theme/components/PostNavCard.vue'
import InfoCard from '@theme/components/InfoCard.vue'

export default {
  name: 'TheMain',

  components: {
    TransitionFadeSlide,
    InfoCard,
    PostNavCard,
  },

  computed: {
    layout () {
      const layout = this.$page.frontmatter.layout
      if (layout && (this.$vuepress.getLayoutAsyncComponent(layout) || this.$vuepress.getVueComponent(layout))) {
        return layout
      }

      if (!this.$page.path) {
        return 'NotFound'
      }

      return 'Home'
    },

    showAside () {
      if ('aside' in this.$page.frontmatter) {
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
  .aside
    position relative
  @media (max-width $MQMobile - 1px)
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
    @media (max-width $MQWide - 1px) and (min-width $MQMobile)
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
    @media (max-width $MQMobile - 1px)
      .main
        width 100%
      .aside
        display none
</style>
