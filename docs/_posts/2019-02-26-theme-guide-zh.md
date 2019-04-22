---
top: 2
category: docs
tags:
  - zh
date: 2019-02-26
title: 主题使用指南
lang: zh-CN
vssue-id: 2
---

`vuepress-theme-meteorlxy` 主题使用指南

![](https://img.shields.io/npm/v/vuepress-theme-meteorlxy/next.svg?style=flat)
![](https://img.shields.io/github/license/meteorlxy/vuepress-theme-meteorlxy.svg?style=flat)

<!-- more -->

::: tip
如果你在使用这个主题时遇到问题，或者有什么好主意，可以在 [Github 仓库](https://github.com/meteorlxy/vuepress-theme-meteorlxy) 发表 Issue 或者 PR 。

觉得这个主题还不错的话，给一个 Star 支持一下吧 :wink:
:::

<TOC />

## 开始使用

### 安装主题

创建一个新的项目 `my-blog` ：

```sh
mkdir my-blog
cd my-blog
```

安装 `vuepress` 和 `vuepress-theme-meteorlxy`，注意添加 `next` 标签安装 `1.x` 版本：

```sh
npm install vuepress@next vuepress-theme-meteorlxy@next
```

::: warning 注意
现在 Vuepress 1.x 还处于 Alpha 阶段，经常会发生改动，如果直接安装 `@next` 后使用主题出现问题的话，建议按照本主题的 `peerDependencies` 要求锁定对应的 `vuepress` 版本号。例如：

```sh
npm install \
  vuepress@1.0.0-alpha.41 \
  vuepress-theme-meteorlxy@1.0.0-alpha.22
```
:::

创建 `src/_posts` 文件夹和 Vuepress 配置文件，项目结构大致为：

```sh
my-blog
├── src # Blog 源文件目录
│   ├── .vuepress # Vuepress 目录
│   │   └── config.js # Vuepress 配置文件
│   └── _posts # 博客文件夹
│       ├── xxx.md
│       ...
└── package.json
```

::: tip
注意，`src/index.md` 或 `src/README.md` 不是必须的，本主题会自动为你加上首页。
:::

在 `package.json` 加入 `script` 字段：

```json
{
  "scripts": {
    "dev": "vuepress dev src",
    "build": "vuepress build src --dest dist"
  }
}
```

### 配置主题

在 `src/.vuepress/config.js` 中配置 Vuepress 和主题：

<details>

<summary>点击展开配置示例</summary>

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
  theme: 'meteorlxy',

  // 主题配置
  themeConfig: {
    // 主题语言，参考下方 [主题语言] 章节
    lang: require('vuepress-theme-meteorlxy/lib/langs/zh-CN'),

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
      // 设置为外部链接
      avatar: 'https://www.meteorlxy.cn/assets/img/avatar.jpg',
      // 或者放置在 .vuepress/public 文件夹，例如 .vuepress/public/img/avatar.jpg
      // avatar: '/img/avatar.jpg',
      

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

        // Reddit 帐号和链接
        reddit: {
          account: 'meteorlxy',
          link: 'https://www.reddit.com/user/meteorlxy',
        },

        // Medium 帐号和链接
        medium: {
          account: 'meteorlxy.cn',
          link: 'https://medium.com/@meteorlxy.cn',
        },

        // Instagram 帐号和链接
        instagram: {
          account: 'meteorlxy.cn',
          link: 'https://www.instagram.com/meteorlxy.cn',
        },

        // GitLab 帐号和链接
        gitlab: {
          account: 'meteorlxy',
          link: 'https://gitlab.com/meteorlxy',
        },

        // Bitbucket 帐号和链接
        bitbucket: {
          account: 'meteorlxy',
          link: 'https://bitbucket.org/meteorlxy',
        },

        // Docker Hub 帐号和链接
        docker: {
          account: 'meteorlxy',
          link: 'https://hub.docker.com/u/meteorlxy',
        },
      },
    },

    // 上方 header 的相关设置
    header: {
      // header 的背景，可以使用图片，或者随机变化的图案（geopattern）
      background: {
        // 使用图片的 URL，如果设置了图片 URL，则不会生成随机变化的图案，下面的 useGeo 将失效
        url: '/assets/img/bg.jpg',

        // 使用随机变化的图案，如果设置为 false，且没有设置图片 URL，将显示为空白背景
        useGeo: true,
      },

      // 是否在 header 显示标题
      showTitle: true,
    },

    // 是否显示文章的最近更新时间
    lastUpdated: true,

    // 顶部导航栏内容
    nav: [
      { text: '首页', link: '/', exact: true },
      { text: '文章', link: '/posts/', exact: false },
    ],

    // 评论配置，参考下方 [页面评论] 章节
    comments: {
      owner: 'meteorlxy',
      repo: 'vuepress-theme-meteorlxy',
      clientId: 'MY_CLIENT_ID',
      clientSecret: 'MY_CLIENT_SECRET',
    },

    // 分页配置
    pagination: {
      perPage: 5,
    },

    // 默认页面（可选，默认全为 true）
    defaultPages: {
      // 是否允许主题自动添加 Home 页面 (url: /)
      home: true,
      // 是否允许主题自动添加 Posts 页面 (url: /posts/)
      posts: true,
    },
  },
}
```
</details>

### 开始写博客

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

运行相应 `script` 生成你的博客网站：

```sh
# 开发
npm run dev
# 构建
npm run build
```

## 主题语言

你可以前往 [Blogs that use this theme](./2019-02-01-demo-blogs.md) 来看看使用不同语言的效果。

### 引入预设的语言包

为了让多语言的用户使用本主题，我们提供了一些语言包，你可以直接引入它们。

> 你可以前往 [语言包目录](https://github.com/meteorlxy/vuepress-theme-meteorlxy/tree/master/lib/langs) 查看目前支持的语言

```js
// .vuepress/config.js

module.exports = {
  themeConfig: {
    lang: require('vuepress-theme-meteorlxy/lib/langs/zh-CN'),
  },
}
```

::: tip
如果没有设置 `lang` 选项，主题将会使用 `en-US` 作为默认语言。
:::

### 翻译成你自己的语言

如果默认提供了语言包不能满足你的要求，你可以手动翻译对应字段。

> 欢迎提交 PR，帮助我们的主题支持更多语言！

```js
// .vuepress/config.js

module.exports = {
  themeConfig: {
    lang: {
      home: '首页',
      posts: '文章',
      category: '分类',
      categories: '分类',
      allCategories: '全部',
      tag: '标签',
      tags: '标签',
      createdAt: '发布时间',
      updatedAt: '最后修改',
      prevPost: '上一篇',
      nextPost: '下一篇',
    },
  },
}
```

### 覆盖语言包的某些翻译

如果你觉得默认语言包的某些翻译不合你意，或者你想使用更有个性的文字。

```js
// .vuepress/config.js

module.exports = {
  themeConfig: {
    lang: Object.assign(require('vuepress-theme-meteorlxy/lib/langs/zh-CN'), {
      home: '欢迎来到我的首页！',
      posts: '这是我写的文章哦',
    }),
  }
}
```

## 页面评论

本主题通过 [Vssue](https://vssue.js.org/zh/) 启用页面评论功能。

### 配置评论功能

只有在 `_posts` 文件夹下的博文才能启用评论，其他页面没有评论。

默认使用 Github 平台来存储评论，可以查看 [Vssue 官方文档](https://vssue.js.org/zh/guide/github.html) 了解如何配置各个参数。

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
      autoCreateIssue: process.env.NODE_ENV !== 'development', // 可选，这样设置可以在开发环境下不自动创建 Issue
    },
  },
}
```

配置完成后，博客评论将储存在你的 Github 仓库的 Issue 系统中，每篇博文会自动创建一个 Issue，默认使用博文的标题 `title` 作为 Issue 的标题。

Vssue 默认根据 Vuepress 的 `$lang` 参数来确定使用的语言。

::: tip
为什么选择用 Issue 系统来存储评论呢？

- 程序员们都在用 GitHub 或其他代码托管平台，所以他们不需要为了给你的博客留言而注册一个新的帐号。
- 这样你就可以完全控制你的博客，包括评论系统。
- 你的 Blog 仓库的 Issue 系统基本处于闲置状态，正好可以利用起来！
:::

### 针对每篇博文单独配置

如果你博文的标题可能会有变动，建议你在 frontmatter 中加入一条 `vssue-title` 来作为 Issue 固定的标题，避免因为后续改动博文标题而引发问题：

```md {7}
---
category: hello
tags:
  - world
date: 2019-01-21
title: Hello, world!
vssue-title: 固定的 Issue 标题
---

这是第一篇博文。
```

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

如果你想要关闭某篇博文下的评论，在 frontmatter 中设置 `vssue: false` 即可：

> 你可以前往 [Disable Comments](2019-01-20-disable-comments.md) 查看禁用某一篇文章评论的效果。

```md {7}
---
category: hello
tags:
  - world
date: 2019-01-21
title: Hello, world!
vssue: false
---

这是第一篇博文。
```

::: tip
如果你熟悉 Vssue，那么 `vssue-title` 对应的就是 Vssue 组件的 prop `title`，`vssue-id` 对应的就是 Vssue 组件的 prop `issue-id`。
:::

### 禁用评论功能

当然，如果你不想让你的博客拥有评论功能，你可以完全禁用它：

```js
module.exports = {
  // 主题配置
  themeConfig: {
    // 评论配置
    comments: false,
  },
}
```

设置 `comments: false` 后，Vuepress 就不会引入 Vssue 相关的代码了。

## 配置参考

### 样式变量

支持通过 Vuepress 的 `palette.styl` 功能自定义样式变量。

```stylus
// 颜色
$textColor ?= #2c3e50
$accentColor ?= #1e90ff
$grayTextColor ?= #666
$lightTextColor ?= #999
$borderColor ?= #eaecef
$codeBgColor ?= #282c34
$arrowBgColor ?= #ccc
$navbarColor ?= #fff
$headerColor ?= #fff
$headerTitleColor ?= #fff
$nprogressColor ?= $accentColor

// 布局
$navbarHeight ?= 3.6rem
$bannerHeight ?= 12rem

// 响应式 breakpoints
$MQWide ?= 1440px
$MQNarrow ?= 1024px
$MQMobile ?= 768px
$MQMobileNarrow ?= 480px
```

### Frontmatter

#### 通用 Frontmatter

这些 Frontmatters 可以在自定义页面和文章中使用。

```yaml
---
# 当前页面/文章的标题，会显示在顶部的 banner 中
title: Welcome to vuepresss-theme-meteorlxy

# 当前页面/文章的 layout，前往 [Custom Pages] 查看详细用法
layout: CustomLayout

# 是否在当前页面显示个人信息卡片
## 默认： `true`
aside: true

# 使用图片作为当前页面的 Header 背景
# 如果传入数组，则每次进入该页面时随机选取一个图片显示
## 默认： `undefined`
header-image: /assets/img/header-image-01.jpg
header-image:
  - /assets/img/header-image-01.jpg
  - /assets/img/header-image-02.jpg
  - /assets/img/header-image-03.jpg

# 是否在 Header 显示标题
## 默认： `true`
header-title: true
---
```

#### 文章 Frontmatter

这些 Frontmatters 只能在文章中使用。

```yaml
---
# 设置是否置顶当前文章
## 默认： `false`
top: true
top: 1
top: 2

# 设置当前文章的分类
category: docs

# 设置当前文章的标签
tags:
  - zh
  - en

# 设置当前文章的发布时间
date: 2019-02-27

# 设置是否显示当前文章的额外信息，即 发布时间、修改时间、上一篇、下一篇 等。
## 默认： `true`
meta: true

# 评论设置，查看上方的 [页面评论] 章节
## 默认： `true`
vssue: true
## 默认： `undefined`
vssue-id: 1
## 默认： `frontmatter.title`
vssue-title: Comments of this page
---
```
