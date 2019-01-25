---
category: 文档
tags:
  - 使用指南
date: 2019-01-21
title: 使用指南
vssue-id: 2
---

`vuepress-theme-meteorlxy` 主题使用指南

<!-- more -->

[[toc]]

## 开始使用

创建一个新的项目 `my-blog` ：

```bash
mkdir my-blog
cd my-blog
```

安装 `vuepress` 和 `vuepress-theme-meteorlxy`，注意添加 `next` 标签安装 `1.x` 版本：

```bash
npm install vuepress@next vuepress-theme-meteorlxy@next
```

创建 `_posts` 文件夹和 Vuepress 配置文件，项目结构大致为：

```bash
my-blog
├── .vuepress # Vuepress 目录
│   └── config.js # Vuepress 配置文件
├── _posts # 博客文件夹
│   ├── xxx.md
│   ...
└── package.json
```

在 `.vuepress/config.js` 中配置 Vuepress 和主题：

```js
// .vuepress/config.js

module.exports = {
  // 网站 Title
  title: 'My Blog',

  // 网站描述
  description: 'This is my blog',

  // 网站语言
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },

  // 使用的主题
  theme: 'vuepress-theme-meteorlxy',

  // 主题配置
  themeConfig: {
    // 个人信息（没有或不想设置的，删掉对应字段即可）
    personalInfo: {
      // 昵称
      nickname: 'meteorlxy',

      // 个人简介
      description: 'Happy Coding<br/>Happy Life',

      // 电子邮箱
      email: 'meteor.lxy@foxmail.com',

      // 所在地
      location: 'Xi\'an City, China',

      // 组织
      organization: 'Xi\'an Jiao Tong University',

      // 头像
      avatar: 'https://www.meteorlxy.cn/assets/img/avatar.jpg',

      // 社交平台帐号信息
      sns: {
        // Github 帐号和链接
        github: {
          account: 'meteorlxy',
          link: 'https://github.com/meteorlxy',
        },

        // Facebook 帐号和链接
        facebook: {
          account: 'meteorlxy.cn',
          link: 'https://www.facebook.com/meteorlxy.cn',
        },

        // LinkedIn 帐号和链接
        linkedin: {
          account: 'meteorlxy',
          link: 'http://www.linkedin.com/in/meteorlxy',
        },

        // Twitter 帐号和链接
        twitter: {
          account: 'meteorlxy_cn',
          link: 'https://twitter.com/meteorlxy_cn',
        },

        // 新浪微博 帐号和链接
        weibo: {
          account: '@焦炭君_Meteor',
          link: 'https://weibo.com/u/2039655434',
        },

        // 知乎 帐号和链接
        zhihu: {
          account: 'meteorlxy.cn',
          link: 'https://www.zhihu.com/people/meteorlxy.cn',
        },

        // 豆瓣 帐号和链接
        douban: {
          account: '159342708',
          link: 'https://www.douban.com/people/159342708',
        },
      },
    },

    // 上方 header 的背景，可以使用图片，或者随机变化的图案
    headerBackground: {
      // 使用图片的 URL，如果设置了图片 URL，则不会生成随机变化的图案，下面的 useGeo 将失效
      url: '/assets/img/bg.jpg',

      // 使用随机变化的图案，如果设置为 false，且没有设置图片 URL，将显示为纯色背景
      useGeo: true,
    },

    // 是否显示文章的最近更新时间
    lastUpdated: true,

    // 顶部导航栏内容
    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false },
    ],

    // 评论配置，参考下方 [页面评论] 章节
    comments: {
      owner: 'meteorlxy',
      repo: 'vuepress-theme-meteorlxy',
      clientId: 'MY_CLIENT_ID',
      clientSecret: 'MY_CLIENT_SECRET',
    },
  },
}
```

创建你的第一篇博文：

```md
<!-- _posts/2019-01-21-hello-world.md -->

---
category: hello
tags:
  - world
date: 2019-01-21
title: Hello, world!
vssue-title: Hello, world!
---

这是第一篇博文。

more 上面的内容是摘要，将显示在目录中。

<!-- more -->

more 下面的内容只有浏览这篇文章时才会完全展示，不会显示在目录中。
```

## 页面评论

本主题通过 [Vssue](https://vssue.js.org) 启用页面评论功能，只有在 `_posts` 文件夹下的博文才会启用评论，其他页面没有评论。

默认使用 Github 平台来存储评论，查看 [Vssue 官方文档](https://vssue.js.org/zh/guide/github.html) 了解如何设置 `owner`、`repo`、`clientId`、`clientSecret`。

```js
module.exports = {
  // 主题配置
  themeConfig: {
    // 评论配置
    comments: {
      platform: 'github', // 可选，默认使用 'github'，还可以选择 'gitlab', 'bitbucket'。详情参考 Vssue 文档
      owner: 'meteorlxy',
      repo: 'vuepress-theme-meteorlxy',
      clientId: 'MY_CLIENT_ID',
      clientSecret: 'MY_CLIENT_SECRET',
    },
  },
}

```

博客评论将储存在你的 Github 仓库的 Issue 系统中，每篇博文会自动创建一个 Issue，默认使用博文的标题 `title` 作为 Issue 的标题。如果你博文的标题可能会有变动，建议你在 frontmatter 中加入一条 `vssue-title` 来作为 Issue 固定的标题，避免因为后续改动博文标题引发问题。

如果你想要手动创建 Issue，那么你需要在 frontmatter 中设置 `vssue-id`，来对应 Issue 的 ID：

```md {7}
---
category: hello
tags:
  - world
date: 2019-01-21
title: Hello, world!
vssue-id: 1
---

这是第一篇博文。
```

如果你想要禁用某篇博文的评论，在 frontmatter 中设置 `vssue: false` 即可。

::: tip
如果你熟悉 Vssue，那么 `vssue-title` 对应的就是 Vssue 组件的 prop `title`，`vssue-id` 对应的就是 Vssue 组件的 prop `issue-id`。
:::
