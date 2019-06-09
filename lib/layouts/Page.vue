<template>
  <div class="page">
    <div class="main-div">
      <Content
        :key="$page.path"
        class="page-content content"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page',
}
</script>
