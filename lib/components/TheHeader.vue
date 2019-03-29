<template>
  <header
    class="header"
    :style="style"
  >
    <TheHeaderNavbar />

    <TransitionFadeSlide>
      <TheHeaderBanner :key="$route.path">
        <slot>
          <h1 v-if="showTitle">
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
    showTitle () {
      return this.$frontmatter['header-title'] !== false && this.$themeConfig.header['showTitle'] !== false
    },

    backgroundConfig () {
      return this.$themeConfig.header.background || {}
    },

    backgroundImg () {
      // frontmatter > themeConfig
      return this.$frontmatter['header-image'] || this.backgroundConfig['url'] || null
    },

    style () {
      // use image
      if (this.backgroundImg) {
        let url = this.backgroundImg

        // randomly select an image if an array is provided
        if (Array.isArray(url)) {
          url = this.randomArr(url)
        }

        return {
          'background-size': 'cover',
          'background-repeat': 'no-repeat',
          'background-position': 'center',
          'background-attachment': 'scroll',
          'background-image': `url(${url})`,
        }
      }

      // use geopattern
      // avoid prerendering the geopattern in build stage or the html files will be 14KB larger
      if (!this.$ssrContext) {
        return {
          'background-image': this.gpImg(),
        }
      }

      return {}
    },
  },

  methods: {
    // in computed, geopattern will always be computed
    // in methods, geopattern won't be called with useGeo = false
    gpImg () {
      return this.backgroundConfig.useGeo !== false
        ? GeoPattern.generate(this.gpString(), {
          // color: '#9fe0f6',
          generator: this.randomArr(generators),
        }).toDataUrl()
        : null
    },

    gpString () {
      return ((this.$page && this.$page.title) || '') + (new Date()).toString()
    },

    randomArr (arr) {
      return arr[Math.floor(Math.random() * arr.length)]
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
