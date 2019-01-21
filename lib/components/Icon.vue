<template functional>
  <svg
    class="icon"
    :style="{
      'fill': props.color ? props.color : false,
      'font-size': props.size ? props.size : false,
    }"
  >
    <title v-text="props.title || props.name" />

    <use :xlink:href="`#icon-${props.name}`" />
  </svg>
</template>

<script>
export default {
  name: 'Icon',

  props: {
    color: {
      type: String,
      required: false,
      default: null,
    },

    name: {
      type: String,
      required: true,
    },

    size: {
      type: String,
      required: false,
      default: null,
    },

    title: {
      type: String,
      required: false,
      default: null,
    },
  },
}
</script>

<style>
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: #666;
  overflow: hidden;
}
</style>
