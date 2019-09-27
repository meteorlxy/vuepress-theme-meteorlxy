---
layout: CustomPages
title: Reference - Custom Pages
aside: false
---

## Add more pages

You can add more pages.

First, create another directory, and put a `index.md` or `README.md` in it:

```bash {6-7}
root
├── .vuepress
│   └── config.js
├── _post
│   └── 2019-01-20-hello-world.md
└── custom-pages
    └── index.md
```

Then, add nav in your `.vuepress/config.js`:

```js {7}
module.exports = {
  // ...
  themeConfig: {
    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false },
      { text: 'Custom Pages', link: '/custom-pages/', exact: false },
    ],
  },
}
```

## Custom Layout

You can use custom layout for your pages.

Add you custom layout in `.vuepress/components/CustomLayout.vue`:

```vue
<!-- .vuepress/components/CustomLayout.vue -->

<template>
  <div class="custom-layout">

    <!-- .main-div is the block with white background -->
    <div class="main-div">
      This is a custom layout
    </div>

    <div class="main-div">
      <!-- <Content /> is to show the rendered markdown content of this page -->
      <Content class="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomLayout',
}
</script>
```

Set `layout` and other config in the frontmatter of your pages:

```yaml
# custom-pages/index.md

---
# Set the layout of this page
layout: CustomLayout
# Set the title of this page
title: Welcome to my custom page
# Show the aside info card or not (we hide it on this page)
aside: false
---

Contents here will be rendered in the `<Content />` component.
```
