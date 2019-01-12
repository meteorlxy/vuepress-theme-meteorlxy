<template>
  <span
    v-if="icon"
    class="sns-icon"
    :title="title"
  >
    <FontAwesomeIcon
      :icon="icon"
      :size="size"
      :fixed-width="fixedWidth"
      v-bind="$attrs"
    />
  </span>
</template>

<script>
import {
  faGithub,
  faFacebook,
  faTwitter,
  faLinkedin,
  faWeibo,
  faZhihu,
} from '@fortawesome/free-brands-svg-icons'

const nameMap = {
  'github': {
    title: 'GitHub',
    icon: faGithub,
  },
  'facebook': {
    title: 'Facebook',
    icon: faFacebook,
  },
  'twitter': {
    title: 'Twitter',
    icon: faTwitter,
  },
  'linkedin': {
    title: 'LinkedIn',
    icon: faLinkedin,
  },
  'weibo': {
    title: 'WeiBo',
    icon: faWeibo,
  },
  'zhihu': {
    title: 'ZhiHu',
    icon: faZhihu,
  },
  'douban': {
    title: 'DouBan',
    icon: null,
  },
}

export default {
  name: 'IconSns',

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
      default: 'lg',
    },

    // Fixed Width or not of FontAwesome
    fixedWidth: {
      type: Boolean,
      required: false,
      default: true,
    },
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
    },
  },
}
</script>

<style lang="stylus">
@require '~@theme/styles/variables'

.sns-link
  .sns-icon
    color $grayTextColor
    transition all 0.5s ease-out
    &:hover
      color $accentColor
</style>
