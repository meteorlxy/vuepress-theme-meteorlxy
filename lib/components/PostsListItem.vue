<template>
  <div class="posts-list-item">
    <RouterLink
      :to="post.path"
      class="post-link"
    >
      <h3 class="post-title">
        {{ post.title }}
      </h3>
    </RouterLink>

    <p class="post-info-list">
      <span
        v-if="post.top"
        class="post-info-item"
      >
        <IconInfo
          type="top"
          :title="$themeConfig.lang.top"
        >
          {{ $themeConfig.lang.top }}
        </IconInfo>
      </span>

      <span
        v-if="post.createdAt"
        class="post-info-item"
      >
        <IconInfo
          type="date"
          :title="post.createdAt"
        >
          {{ post.createdAt }}
        </IconInfo>
      </span>

      <span
        v-if="post.category"
        class="post-info-item"
      >
        <RouterLink :to="$categories.getItemByName(post.category).path">
          <IconInfo
            type="category"
            :title="post.category"
          >
            {{ post.category }}
          </IconInfo>
        </RouterLink>
      </span>

      <span
        v-if="post.tags.length"
        class="post-info-item"
      >
        <IconInfo type="tags">
          <RouterLink
            v-for="(tag, i) in post.tags"
            :key="tag"
            :to="$tags.getItemByName(tag).path"
            :title="tag"
          >
            {{ `${tag}${i === post.tags.length - 1 ? '' : ', '}` }}
          </RouterLink>
        </IconInfo>
      </span>
    </p>

    <p
      class="post-excerpt content"
      v-html="post.excerpt || post.frontmatter.description || ''"
    />
  </div>
</template>

<script>
import IconInfo from './IconInfo.vue'

export default {
  name: 'PostsListItem',

  components: {
    IconInfo,
  },

  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="stylus">
@require '~@theme/styles/variables'

.posts-list-item
  padding 0 0.5rem
  &:not(:first-child)
    border-top 1px solid $borderColor
  .post-title
    color $textColor
    transition all 0.2s
  .post-info-list
    color $lightTextColor
    .post-info-item
      cursor default
      &:not(:first-child)
        margin-left 0.5em
      a
        color $lightTextColor
        font-weight normal
      .icon
        fill $lightTextColor
  .post-excerpt
    color $grayTextColor
    text-align justify
    padding 0
  .post-link
    &:hover
      text-decoration none
      .post-title
        color $accentColor
</style>
