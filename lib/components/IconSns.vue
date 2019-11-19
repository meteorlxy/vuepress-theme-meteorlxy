<script>
import Icon from '@theme/components/Icon.vue'

const nameMap = {
  github: {
    title: 'GitHub',
  },
  gitlab: {
    title: 'GitLab',
  },
  bitbucket: {
    title: 'Bitbucket',
  },
  docker: {
    title: 'Docker Hub',
  },
  facebook: {
    title: 'Facebook',
  },
  twitter: {
    title: 'Twitter',
  },
  linkedin: {
    title: 'LinkedIn',
  },
  weibo: {
    title: '新浪微博',
  },
  zhihu: {
    title: '知乎',
  },
  douban: {
    title: '豆瓣',
  },
  reddit: {
    title: 'Reddit',
  },
  medium: {
    title: 'Medium',
  },
  instagram: {
    title: 'Instagram',
  },
  csdn: {
    title: 'CSDN',
  },
  juejin: {
    title: '掘金',
  },
}

export default {
  name: 'IconSns',

  functional: true,

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

  render (h, { props: { account, name, size } }) {
    const title = `${nameMap[name].title}: ${account}`
    return (
      <span
        class="sns-icon"
        title={title}
      >
        <Icon
          name={name}
          size={size}
          title={title}
        />
      </span>
    )
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
