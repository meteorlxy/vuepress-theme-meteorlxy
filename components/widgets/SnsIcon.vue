<template>
  <span
    class="sns-icon"
    :title="title">
    <FontAwesomeIcon
      v-if="icon"
      :icon="icon"
      :size="size"
      :fixed-width="fixedWidth"
      v-bind="$attrs"/>
  </span>
</template>

<script>
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import faWeibo from '@fortawesome/fontawesome-free-brands/faWeibo'

const nameMap = {
  'github': {
    title: 'GitHub',
    icon: faGithub
  },
  'facebook': {
    title: 'Facebook',
    icon: faFacebook
  },
  'twitter': {
    title: 'Twitter',
    icon: faTwitter
  },
  'linkedin': {
    title: 'LinkedIn',
    icon: faLinkedin
  },
  'weibo': {
    title: 'WeiBo',
    icon: faWeibo
  },
  'zhihu': {
    title: 'ZhiHu',
    icon: null
  },
  'douban': {
    title: 'DouBan',
    icon: null
  }
}

export default {
  name: 'SnsIcon',
  props: {
    // Account of SNS
    account: {
      type: String,
      required: false
    },
    // Name of SNS
    name: {
      type: String,
      required: true
    },
    // Size of FontAwesome
    size: {
      type: String,
      required: false,
      default: 'lg'
    },
    // Fixed Width or not of FontAwesome
    fixedWidth: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  computed: {
    data () {
      return nameMap[this.name]
    },
    title () {
      return `${this.data.title}: ${this.account}`
    },
    icon () {
      return this.data.icon || false
    }
  }
}
</script>

<style lang="stylus">
@import '~@theme/styles/variables.styl'

.sns-link
  .sns-icon
    color $grayTextColor
    transition all 0.5s ease-out
    &:hover
      color $accentColor
</style>
