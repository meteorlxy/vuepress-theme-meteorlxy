<template>
  <div id="app">
    <TheHeader/>

    <TheMain :layout="$layout"/>

    <TheFooter/>
  </div>
</template>

<script>
import nprogressMixin from '@theme/mixins/nprogress'
import TheHeader from '@theme/components/TheHeader'
import TheMain from '@theme/components/TheMain'
import TheFooter from '@theme/components/TheFooter'
export default {
  name: 'Layout',

  components: {
    TheHeader,
    TheMain,
    TheFooter
  },

  mixins: [
    nprogressMixin
  ],

  computed: {
    $layout () {
      const defaultLayout = 'post'
      const layout = this.$page.frontmatter.layout || defaultLayout
      return layout.toLowerCase()
    },

    $title () {
      const isHome = this.$layout === 'home'
      return isHome ? this.$siteTitle : this.$page.frontmatter.title + ' | ' + this.$siteTitle
    }
  }
}
</script>

<style lang="stylus" src="@theme/styles/theme.styl"/>
