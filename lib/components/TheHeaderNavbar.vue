<template>
  <div>
    <nav
      class="navbar"
      :class="navbarClass"
    >
      <div class="container">
        <RouterLink :to="$localePath">
          <span
            v-if="$siteTitle"
            class="navbar-site-name"
          >
            {{ $siteTitle }}
          </span>
        </RouterLink>

        <div class="navbar-links">
          <template v-for="nav of $site.themeConfig.nav">
            <RouterLink
              v-if="!isExternal(nav.link)"
              :key="nav.text"
              :to="nav.link"
              class="navbar-link"
              :exact="nav.exact || false"
            >
              {{ nav.text }}
            </RouterLink>

            <a
              v-else
              :key="nav.text"
              :href="nav.link"
              class="navbar-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ nav.text }}
            </a>
          </template>
        </div>
      </div>
    </nav>

    <div
      v-show="fixed"
      class="navbar-holder"
    />
  </div>
</template>

<script>
import throttle from 'lodash.throttle'

export default {
  name: 'TheHeaderNavbar',

  data () {
    return {
      fixed: false,
    }
  },

  computed: {
    navbarClass () {
      return {
        'fixed': this.fixed,
      }
    },
  },

  mounted () {
    window.addEventListener('scroll', throttle(() => {
      this.fixed = window.scrollY !== 0
    }), 100)
  },

  methods: {
    isExternal (link) {
      return /^(https?:|mailto:|tel:)/.test(link)
    },
  },
}
</script>

<style lang="stylus" scoped>
@require '~@theme/styles/variables'

.navbar-holder
  position relative
  height $navbarHeight
.navbar
  position relative
  z-index 20
  top 0
  left 0
  right 0
  box-sizing border-box
  height $navbarHeight
  line-height $navbarHeight - 1.4rem
  padding 0.7rem 1.5rem
  border-bottom 1px solid $borderColor
  color $textColor
  background-color alpha($navbarColor, 0.8)
  transition all 0.5s ease-out
  overflow hidden
  &.fixed
    position fixed
    background-color $navbarColor
  .navbar-site-name
    position relative
    font-size 1.2rem
    font-weight 600
    color $accentColor
  .navbar-links
    float right
    margin 0
    padding 0
    line-height $navbarHeight - 1.4rem
    list-style none
    .navbar-link
      display inline-block
      height 100%
      padding 0 0.25rem
      margin-left 1rem
      margin-bottom -10px
      border-bottom 2px solid transparent
      color $textColor
      transition all 0.3s
      &:hover
      &.router-link-active
        border-bottom 2px solid $accentColor

</style>
