<template>
  <component
    :is="is"
    class="info"
    :href="href"
    :title="title || text">
    <FontAwesomeIcon
      class="info-icon"
      :icon="icon"
      :size="size"
      :fixed-width="fixedWidth"
      v-bind="$attrs"/>

      <span
        class="info-text"
        :style="textStyle">{{ text }}</span>
  </component>
</template>

<script>
import faBriefcase from '@fortawesome/fontawesome-free-solid/faBriefcase'
import faCalendarAlt from '@fortawesome/fontawesome-free-regular/faCalendarAlt'
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope'
import faFolderOpen from '@fortawesome/fontawesome-free-regular/faFolderOpen'
import faMapMarkerAlt from '@fortawesome/fontawesome-free-solid/faMapMarkerAlt'
import faTag from '@fortawesome/fontawesome-free-solid/faTag'
import faTags from '@fortawesome/fontawesome-free-solid/faTags'

const typeIconMap = {
  'category': faFolderOpen,
  'date': faCalendarAlt,
  'email': faEnvelope,
  'location': faMapMarkerAlt,
  'organization': faBriefcase,
  'tag': faTag,
  'tags': faTags
}

export default {
  name: 'IconInfo',
  props: {
    fixedWidth: {
      type: Boolean,
      required: false,
      default: true
    },
    href: {
      type: [String, null],
      required: false,
      default: null
    },
    size: {
      type: String,
      required: false,
      default: '1x'
    },
    text: {
      type: String,
      required: true
    },
    title: {
      type: [String, null],
      required: false,
      default: null
    },
    type: {
      type: String,
      required: true,
      validator: val => Object.keys(typeIconMap).includes(val)
    }
  },
  computed: {
    icon () {
      return typeIconMap[this.type]
    },
    is () {
      return this.href ? 'a' : 'span'
    },
    textStyle () {
      return {
        'margin-left': this.fixedWidth ? '0.2rem' : '0.3rem'
      }
    }
  }
}
</script>

<style lang="stylus">
@import '~@theme/styles/variables.styl'

.info
  cursor default
  &:not(:first-child)
    margin-left 1rem
</style>
