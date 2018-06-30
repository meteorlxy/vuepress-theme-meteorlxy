<template>
  <div>
    <TheHeader>
      <h1>{{ getMsg() }}</h1>
    </TheHeader>

    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from '@theme/components/TheHeader'
import TheFooter from '@theme/components/TheFooter'
const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a 404 Not Found.`,
  `Looks like we've got some broken links.`
]
export default {
  name: 'NotFound',
  components: {
    TheHeader,
    TheFooter
  },
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>
