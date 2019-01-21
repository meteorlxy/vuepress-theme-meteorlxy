<template>
  <Component
    :is="is"
    :href="href"
    :title="title"
  >
    <Icon
      class="info-icon"
      :name="icon"
      :size="size"
      :title="title"
    />

    <span class="info-text">
      <slot />
    </span>
  </Component>
</template>

<script>
import Icon from './Icon.vue'
const typeIconMap = {
  'category': 'folder-open',
  'date': 'calendar',
  'email': 'mail',
  'location': 'location',
  'organization': 'team',
  'tag': 'tag',
  'tags': 'tags',
}

export default {
  name: 'IconInfo',

  components: {
    Icon,
  },

  props: {
    href: {
      type: String,
      required: false,
      default: null,
    },

    size: {
      type: String,
      required: false,
      default: '1em',
    },

    title: {
      type: String,
      required: false,
      default: null,
    },

    type: {
      type: String,
      required: true,
      validator: val => Object.keys(typeIconMap).includes(val),
    },
  },

  computed: {
    icon () {
      return typeIconMap[this.type]
    },

    is () {
      return this.href ? 'a' : 'span'
    },
  },
}
</script>
