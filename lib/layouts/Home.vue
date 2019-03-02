<template>
  <div class="home">
    <PostsList class="main-div" />
  </div>
</template>

<script>
import PostsList from '../components/PostsList.vue'

export default {
  name: 'Home',

  components: {
    PostsList,
  },
}
</script>
