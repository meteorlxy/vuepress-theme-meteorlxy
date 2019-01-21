<template>
  <div id="app">
    <TheHeader />

    <TheMain :layout="$layout" />

    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import TheMain from '../components/TheMain.vue'
import TheFooter from '../components/TheFooter.vue'

export default {
  name: 'Layout',

  components: {
    TheHeader,
    TheMain,
    TheFooter,
  },

  computed: {
    $layout () {
      const defaultLayout = 'Home'
      const layout = this.$page.frontmatter.layout || defaultLayout
      return layout.toLowerCase()
    },
  },
}
</script>

<style lang="stylus" src="@theme/styles"/>
