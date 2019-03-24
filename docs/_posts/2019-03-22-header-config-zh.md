---
category: docs
tags:
  - zh
date: 2019-03-22
title: 标题栏的设置
lang: zh-CN
header-image:
  - /assets/img/header-image-01.jpg
  - /assets/img/header-image-02.jpg
  - /assets/img/header-image-03.jpg
header-title: true
vssue-id: 2
---

关于标题栏设置的详细教程

<!-- more -->

> 感谢 [@GalAster](https://github.com/GalAster) 帮助完成这篇文章。

![](/assets/img/header-introduce.png)

博客的标题栏分为这样几个部分：

<TOC />

## 博客的名称(theme-title)

整个博客的名称在 `.vuepress/config.js` 中设置。

```js {2}
module.exports = {
  title: 'vuepress-theme-meteorlxy',
}
```

## 导航栏页面(theme-nav)

导航栏同样在 `.vuepress/config.js` 中设置。

```js {4-7}
module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false },
      { text: 'Custom Pages', link: '/custom-pages/', exact: false },
      { text: 'Github', link: 'https://github.com/meteorlxy/vuepress-theme-meteorlxy' },
    ],
  }
}
```

- `link` 可以是内部的相对链接(`/`开头)，也可以是外部的完整链接。
- `exact` 的意义参考 [Vue-Router](https://router.vuejs.org/zh/api/#exact)。

## 页面小标题(header-title)

文章的标题在文章的导言部分设置。

```yaml {6,7}
---
category: demo
tags:
  - zh
date: 2019-01-20
title: 主题标题栏的设置
header-title: true
header-image:
  - /assets/img/header-image-01.jpg
  - /assets/img/header-image-02.jpg
  - /assets/img/header-image-03.jpg
---
```

你可以将 `header-title` 设置为 `false` 隐藏这个标题。

全局的默认设置在 `.vuepress/config.js` 中设定。

```js {4}
module.exports = {
  themeConfig: {
    header: {
      showTitle: true,
    },
  }
}
```

## 标题背景图(header-image)

默认的背景图在 `.vuepress/config.js` 中设定。

```js {5-9}
module.exports = {
  themeConfig: {
    header: {
      showTitle: true,
      background: {
        useGeo: true,
        // url: 'img/bg.jpg',
        // url: ['img/bg.jpg','img/bg2.jpg'],
      }
    },
  }
}
```

- `useGeo: true`：没有背景图，使用随机的图案填充。
- `url: 'img/bg.jpg'`：表示默认使用 bg.jpg 这一张图填充。
- `url: ['bg.jpg', 'bg2.jpg']`：表示随机选取列表中的一张图填充。

背景图也可以手动在文章中单独设置，并且会覆盖默认配置。

```yaml {8-11}
---
category: demo
tags:
  - zh
date: 2019-01-20
title: 主题标题栏的设置
header-title: true
header-image:
  - /assets/img/header-image-01.jpg
  - /assets/img/header-image-02.jpg
  - /assets/img/header-image-03.jpg
---
```

::: tip
如果是本地图片，默认需要上传至 `public` 文件夹下才会在构建的时候打包进去。

完整的路径名类似于 `.vuepress/public/assets/img/header-image-01.jpg`。
:::

如果感觉图片的高度不合适，那么可以在 `.vuepress/styles/palette.styl` 中调整：

```styl {1}
$bannerHeight ?= 12rem
```
