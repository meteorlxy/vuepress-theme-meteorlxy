<template>
  <div class="page">
    <Content
      :key="$page.path"
      class="page-content markdown-body"
    />
  </div>
</template>

<script>
export default {
  name: 'Page',
}
</script>
