<template>
  <header
    class="header"
    :style="headerStyle"
  >
    <TheHeaderNavbar />

    <TransitionFadeSlide>
      <TheHeaderBanner :key="$route.path">
        <slot>
          <h1>
            {{ $page.frontmatter.title || $page.title || $site.title || '' }}
          </h1>
        </slot>
      </TheHeaderBanner>
    </TransitionFadeSlide>
  </header>
</template>

<script>
import TransitionFadeSlide from './TransitionFadeSlide.vue'
import TheHeaderNavbar from './TheHeaderNavbar.vue'
import TheHeaderBanner from './TheHeaderBanner.vue'
import GeoPattern from 'geopattern'

const generators = [
  'octogons',
  'overlappingCircles',
  'plusSigns',
  'xes',
  // 'sineWaves',
  'hexagons',
  'overlappingRings',
  // 'plaid',
  'triangles',
  // 'squares',
  'concentricCircles',
  'diamonds',
  'tessellation',
  // 'nestedSquares',
  'mosaicSquares',
  'chevrons',
]

export default {
  name: 'TheHeader',

  components: {
    TransitionFadeSlide,
    TheHeaderNavbar,
    TheHeaderBanner,
  },

  computed: {
    background () {
      return this.$site.themeConfig.headerBackground || {}
    },

    headerStyle () {
      return this.background.url ? {
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'background-attachment': 'scroll',
        'background-image': `url(${this.background.url})`,
      } : !this.$ssrContext ? {
        // avoid prerendering the geopattern in build stage
        // or the html files will be 14KB larger
        'background-image': this.gpImg(),
      } : {}
    },
  },

  methods: {
    // in computed, geopattern will always be computed
    // in methods, geopattern won't be called with useGeo = false
    gpImg () {
      return this.background.useGeo
        ? GeoPattern.generate(this.gpString(), {
          // color: '#9fe0f6',
          generator: this.gpGenerator(),
        }).toDataUrl()
        : null
    },

    gpString () {
      return ((this.$page && this.$page.title) || '') + (new Date()).toString()
    },

    gpGenerator () {
      return generators[Math.floor(Math.random() * generators.length)]
    },
  },
}
</script>

<style lang="stylus" scoped>
@require '~@theme/styles/variables'

.header
  background-color $headerColor
  transition all 0.5s ease-in-out
</style>
