<template>
  <div class="page">
    <Content
      :key="$page.path"
      class="page-content"
    />
  </div>
</template>

<script>
export default {
  name: 'Page',
}
</script>
