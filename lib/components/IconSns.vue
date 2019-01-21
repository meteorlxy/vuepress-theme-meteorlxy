<template>
  <span
    class="sns-icon"
    :title="title"
  >
    <Icon
      :name="name"
      :size="size"
      :title="title"
    />
  </span>
</template>

<script>
import Icon from './Icon.vue'

const nameMap = {
  'github': {
    title: 'GitHub',
  },
  'facebook': {
    title: 'Facebook',
  },
  'twitter': {
    title: 'Twitter',
  },
  'linkedin': {
    title: 'LinkedIn',
  },
  'weibo': {
    title: '新浪微博',
  },
  'zhihu': {
    title: '知乎',
  },
  'douban': {
    title: '豆瓣',
  },
}

export default {
  name: 'IconSns',

  components: {
    Icon,
  },

  props: {
    // Account of SNS
    account: {
      type: String,
      required: false,
      default: '',
    },

    // Name of SNS
    name: {
      type: String,
      required: true,
    },

    // Size of FontAwesome
    size: {
      type: String,
      required: false,
      default: '25px',
    },
  },

  computed: {
    title () {
      return `${nameMap[this.name].title}: ${this.account}`
    },
  },
}
</script>

<style lang="stylus">
@require '~@theme/styles/variables'

.sns-link
  margin 0 0.1em
  .sns-icon
    color $grayTextColor
    transition all 0.5s ease-out
    &:hover
      color $accentColor
      .icon
        fill $accentColor
        transition all 0.5s ease-out
</style>
