<template>
  <div>
    <TheHeader>
      <h1>404 Not Found</h1>
    </TheHeader>

    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'

export default {
  name: 'NotFound',

  components: {
    TheHeader,
    TheFooter,
  },
}
</script>
