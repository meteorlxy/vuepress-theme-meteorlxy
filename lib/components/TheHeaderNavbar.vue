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

        <div
          class="navbar-toggler"
          @click="showNavLinks = !showNavLinks"
        >
          <Icon
            name="menu"
            size="1.2em"
          />
        </div>

        <div
          class="navbar-links"
          :class="{
            'show': showNavLinks,
          }"
        >
          <template v-for="nav of $themeConfig.nav">
            <RouterLink
              v-if="!isExternal(nav.link)"
              :key="nav.text"
              :to="nav.link"
              class="navbar-link"
              :exact="nav.exact || false"
              @click.native="showNavLinks = false"
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
import Icon from './Icon.vue'

export default {
  name: 'TheHeaderNavbar',

  components: {
    Icon,
  },

  data () {
    return {
      fixed: false,
      showNavLinks: false,
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

$gutter = 0.7rem
$lineHeight = $navbarHeight - ($gutter * 2)

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
  line-height $lineHeight
  padding $gutter $gutter * 2
  border-bottom 1px solid $borderColor
  color $textColor
  background-color alpha($navbarColor, 0.8)
  transition all 0.5s ease-out
  overflow hidden
  &.fixed
    position fixed
    background-color $navbarColor
    @media (max-width $MQMobile - 1px)
      .navbar-links
        background-color $navbarColor
  .navbar-site-name
    position relative
    font-size 1.2rem
    font-weight 600
    color $accentColor
  .navbar-toggler
    float right
    cursor pointer
    box-sizing border-box
    width $lineHeight
    border-radius 50%
    border solid 2px transparent
    text-align center
    z-index 100
    .icon
      fill $accentColor
    @media (max-width $MQMobile - 1px)
      display inline
    @media (min-width $MQMobile)
      display none
  .navbar-links
    @media (max-width $MQMobile - 1px)
      &.show
        display block
      display none
      position fixed
      top $navbarHeight
      right 0
      text-align center
      padding $gutter 2rem
      border 1px solid $borderColor
      border-top none
      background-color alpha($navbarColor, 0.8)
      z-index 100
      transition all 0.5s ease-out
    @media (min-width $MQMobile)
      float right
      margin 0
      padding 0
      line-height $lineHeight
      list-style none
  .navbar-link
    color $textColor
    transition all 0.3s
    border-bottom 2px solid transparent
    &:hover
    &.router-link-active
      border-bottom 2px solid $accentColor
    @media (max-width $MQMobile - 1px)
      display block
    @media (min-width $MQMobile)
      display inline-block
      height 100%
      padding 0 0.25rem
      margin-left 1rem
      margin-bottom -10px
</style>
