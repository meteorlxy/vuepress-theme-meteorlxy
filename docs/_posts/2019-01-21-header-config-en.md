---
category: demo
tags:
  - en
date: 2019-01-21
title: Header Config
header-image:
  - /assets/img/header-image-01.jpg
  - /assets/img/header-image-02.jpg
  - /assets/img/header-image-03.jpg
header-title: false
vssue-id: 10
---

<!-- more -->

![](/assets/img/header-introduce.png)

The header bar of the blog can be divided into following sections:

- [theme-title](/posts/2019/03/23/header-config-cn.html#theme-title)
- [theme-nav](/posts/2019/03/23/header-config-cn.html#theme-navigation)
- [header-title](/posts/2019/03/23/header-config-cn.html#header-title)
- [header-image](/posts/2019/03/23/header-config-cn.html#header-image)

## Theme Title

The name of the entire blog is set in `.vuepress/config.js`.

```js {2}
module.exports = {
  title: 'vuepress-theme-meteorlxy',
}
```

## Theme Navigation

The navigation bar is also set in `.vuepress/config.js`.

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

- `exact` means ?
- `link` can be an internal relative link (starting with `/`) or a full external link.

## Header Title

The title of the article can be set in front of the article.

```yaml {6,7}
---
category: demo
tags:
  - en
date: 2019-01-21
title: Header Config
header-title: true
header-image:
  - /assets/img/header-image-01.jpg
  - /assets/img/header-image-02.jpg
  - /assets/img/header-image-03.jpg
---
```

You can hide the title by setting `header-title` to `false`

The default settings are set in `.vuepress/config.js`.

```js {4}
module.exports = {
  themeConfig: {
    header: {
      showTitle: true,
    },
  }
}
```

## Header Image

The default background image is set in `.vuepress/config.js`.

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

- `useGeo: true`: no background image, filled with random patterns.
- `url: 'img/bg.jpg'`: to use bg.jpg by default.
- `url: ['bg.jpg', 'bg2.jpg']`: fill in using the random pick list.


The background image can also be set manually in the article manually and will override the default configuration.

```yaml {8-11}
---
category: demo
tags:
  - cn
date: 2019-03-23
title: Header Config
header-title: true
header-image:
  - /assets/img/header-image-01.jpg
  - /assets/img/header-image-02.jpg
  - /assets/img/header-image-03.jpg
---
```

::: tip
If it is a local image, it should be uploaded to the `public` folder by default, and then it will be packaged in the build.

The full path is similar to `.vuepress/public/assets/img/header-image-01.jpg`
:::

If you feel that the heights of the image is not appropriate, you can adjust it in `.vuepress/styles/palette.styl`:

```styl {1}
$bannerHeight ?= 12rem
```
