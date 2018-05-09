<template>
  <footer class="footer">
    <p class="sns-links">
      <a v-for="(item, name) in sns"
        :key="name"
        class="sns-link"
        :href="item.link"
        target="_blank">
        <SnsIcon
          :name="name"
          :account="item.account"/>
      </a>
    </p>

    <p>
      <span>Powered by </span>

      <a href="https://vuepress.vuejs.org" target="_blank">Vuepress</a>
    </p>
  </footer>
</template>

<script>
import SnsIcon from '@theme/components/widgets/SnsIcon'
export default {
  name: 'TheFooter',
  components: {
    SnsIcon
  },
  computed: {
    sns () {
      return this.$site.themeConfig.personalInfo.sns || {}
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@theme/styles/variables.styl'

.footer
  color $grayTextColor
  padding-bottom 1.5rem
  text-align center
  border-top 1px solid $borderColor
</style>
