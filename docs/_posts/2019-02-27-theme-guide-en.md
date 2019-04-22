---
top: 1
category: docs
tags:
  - en
date: 2019-02-27
title: Theme Guide
vssue-id: 10
---

Guide of `vuepress-theme-meteorlxy`.

![](https://img.shields.io/npm/v/vuepress-theme-meteorlxy/next.svg?style=flat)
![](https://img.shields.io/github/license/meteorlxy/vuepress-theme-meteorlxy.svg?style=flat)

<!-- more -->

::: tip
If you have any questions / ideas about this theme, feel free to open issues / PRs in the [Github Repo](https://github.com/meteorlxy/vuepress-theme-meteorlxy).

Give this theme a star if you like it :wink:
:::

<TOC />

## Getting Started

### Installation

Create a new project `my-blog` :

```sh
mkdir my-blog
cd my-blog
```

Install `vuepress` and `vuepress-theme-meteorlxy`, remember to add `next` tag to install the `1.x` version:

```sh
npm install vuepress@next vuepress-theme-meteorlxy@next
```

::: warning ATTENTION
Vuepress 1.x is at alpha stage now, which may have breaking changes. If you have problem when installing with `@next`, suggest to lock the version of `vuepress` according to the `peerDependencies` of this theme. For example:

```sh
npm install \
  vuepress@1.0.0-alpha.41 \
  vuepress-theme-meteorlxy@1.0.0-alpha.22
```
:::

Create `src/_posts` directory and the config file of Vuepress. The structure of your project looks like:

```sh
my-blog
├── src # Blog source files directory
│   ├── .vuepress # Vuepress directory
│   │   └── config.js # Vuepress config file
│   └── _posts # Posts directory
│       ├── xxx.md
│       ...
└── package.json
```

::: tip
Notice that `src/index.md` or `src/README.md` is not necessray. This theme will auto add homepage for you.
:::

Add `script` fields into `package.json` :

```json
{
  "scripts": {
    "dev": "vuepress dev src",
    "build": "vuepress build src --dest dist"
  }
}
```

### Config the theme

Config Vuepress and this theme in `src/.vuepress/config.js` :

<details>

<summary>Click to expand the sample config</summary>

```js
// .vuepress/config.js

module.exports = {
  // Title of your website
  title: 'My Blog',

  // Description of your website
  description: 'This is my blog',

  // Language of your website
  locales: {
    '/': {
      lang: 'en-US',
    },
  },

  // Theme to use
  theme: 'meteorlxy',

  // Theme config
  themeConfig: {
    // Language of this theme. See the [Theme Language] section below.
    lang: require('vuepress-theme-meteorlxy/lib/langs/en-US'),

    // Personal infomation (delete the fields if you don't have / don't want to display)
    personalInfo: {
      // Nickname
      nickname: 'meteorlxy',

      // Introduction of yourself
      description: 'Happy Coding<br/>Happy Life',

      // Email
      email: 'meteor.lxy@foxmail.com',

      // Your location
      location: 'Xi\'an City, China',

      // Your organization
      organization: 'Xi\'an Jiao Tong University',

      // Your avatar image
      // Set to external link
      avatar: 'https://www.meteorlxy.cn/assets/img/avatar.jpg',
      // Or put into `.vuepress/public` directory. E.g. `.vuepress/public/img/avatar.jpg`
      // avatar: '/img/avatar.jpg',

      // Accounts of SNS
      sns: {
        // Github account and link
        github: {
          account: 'meteorlxy',
          link: 'https://github.com/meteorlxy',
        },

        // Facebook account and link
        facebook: {
          account: 'meteorlxy.cn',
          link: 'https://www.facebook.com/meteorlxy.cn',
        },

        // LinkedIn account and link
        linkedin: {
          account: 'meteorlxy',
          link: 'http://www.linkedin.com/in/meteorlxy',
        },

        // Twitter account and link
        twitter: {
          account: 'meteorlxy_cn',
          link: 'https://twitter.com/meteorlxy_cn',
        },

        // Sina Weibo account and link
        weibo: {
          account: '@焦炭君_Meteor',
          link: 'https://weibo.com/u/2039655434',
        },

        // Zhihu account and link
        zhihu: {
          account: 'meteorlxy.cn',
          link: 'https://www.zhihu.com/people/meteorlxy.cn',
        },

        // Douban account and link
        douban: {
          account: '159342708',
          link: 'https://www.douban.com/people/159342708',
        },

        // Reddit account and link
        reddit: {
          account: 'meteorlxy',
          link: 'https://www.reddit.com/user/meteorlxy',
        },

        // Medium account and link
        medium: {
          account: 'meteorlxy.cn',
          link: 'https://medium.com/@meteorlxy.cn',
        },

        // Instagram account and link
        instagram: {
          account: 'meteorlxy.cn',
          link: 'https://www.instagram.com/meteorlxy.cn',
        },

        // GitLab account and link
        gitlab: {
          account: 'meteorlxy',
          link: 'https://gitlab.com/meteorlxy',
        },

        // Bitbucket account and link
        bitbucket: {
          account: 'meteorlxy',
          link: 'https://bitbucket.org/meteorlxy',
        },

        // Docker Hub account and link
        docker: {
          account: 'meteorlxy',
          link: 'https://hub.docker.com/u/meteorlxy',
        },
      },
    },

    // Header Config
    header: {
      // The background of the header. You can choose to use an image, or to use random pattern (geopattern)
      background: {
        // URL of the background image. If you set the URL, the random pattern will not be generated, and the `useGeo` will be ignored.
        url: '/assets/img/bg.jpg',

        // Use random pattern. If you set it to `false`, and you don't set the image URL, the background will be blank.
        useGeo: true,
      },

      // show title in the header or not
      showTitle: true,
    },

    // Show the last updated time of your posts
    lastUpdated: true,

    // The content of your navbar links
    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false },
    ],

    // Comments config. See the [Posts Comments] section below.
    comments: {
      owner: 'meteorlxy',
      repo: 'vuepress-theme-meteorlxy',
      clientId: 'MY_CLIENT_ID',
      clientSecret: 'MY_CLIENT_SECRET',
    },

    // Pagination config
    pagination: {
      perPage: 5,
    },

    // Default Pages (Optional, the default value of all pages is `true`)
    defaultPages: {
      // Allow theme to add Home page (url: /)
      home: true,
      // Allow theme to add Posts page (url: /posts/)
      posts: true,
    },
  },
}
```
</details>

### Write your posts

Create your first post:

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

This is my first post.

The content above `more` is the excerpt, which will be displayed in the posts list.

<!-- more -->

The content below `more` will only be displayed when viewing this post, and will not be displayed in the posts list.
```

Run the `script` to generate your blog website:

```sh
# develop
npm run dev
# build
npm run build
```

## Theme Language

> You can check the [Blogs that use this theme](./2019-02-01-demo-blogs.md) to see online demo of different languages.

### Introduce the language pack

To help users with different languages to use this theme, we provide some language packs to be introduced directly.

> You can check the [languages directory](https://github.com/meteorlxy/vuepress-theme-meteorlxy/tree/master/lib/langs) for all supported languages

```js
// .vuepress/config.js

module.exports = {
  themeConfig: {
    lang: require('vuepress-theme-meteorlxy/lib/langs/en-US'),
  },
}
```

::: tip
If the `lang` option is not set, theme will use `en-US` as the default language.
:::

### Translate to your own language

You can also translate the fields into your own language manually.

> PR welcome to help us support more languages!

```js
// .vuepress/config.js

module.exports = {
  themeConfig: {
    lang: {
      home: 'Home',
      posts: 'Posts',
      category: 'Category',
      categories: 'Categories',
      allCategories: 'All',
      tag: 'Tag',
      tags: 'Tags',
      createdAt: 'Created',
      updatedAt: 'Updated',
      prevPost: 'Previous Post',
      nextPost: 'Next Post',
    },
  },
}
```

### Override the language packs

If you don't like some translation of the language packs, or you want to use some other text.

```js
// .vuepress/config.js

module.exports = {
  themeConfig: {
    lang: Object.assign(require('vuepress-theme-meteorlxy/lib/langs/en-US'), {
      home: 'Welcome to my Homepage !',
      posts: 'Here is my articles',
    }),
  },
}
```

## Posts Comments

This theme use [Vssue](https://vssue.js.org) to enable comments for your posts.

### Config comments

Only those posts that located in the `_posts` directory will enable comments. Other pages don't have comments.

By default, we use GitHub to store comments. You can check [Vssue Docs](https://vssue.js.org/guide/github.html) for how to config these parameters.

```js
module.exports = {
  // Theme Config
  themeConfig: {
    // Comments Config
    comments: {
      platform: 'github', // Optional, default is 'github'. You can also choose 'gitlab', 'bitbucket'. Check Vssue docs for details.
      owner: 'meteorlxy',
      repo: 'vuepress-theme-meteorlxy',
      clientId: 'MY_CLIENT_ID',
      clientSecret: 'MY_CLIENT_SECRET',
      autoCreateIssue: process.env.NODE_ENV !== 'development', // Optional, this will not create issue autoly in development mode
    },
  },
}
```

Comments of your posts will be stored in the issue system of you GitHub repository. Vssue will auto create an issue for your post with the `title` of your post.

By default, Vssue will use the `$lang` property of Vuepress as the locale language.

::: tip
Why we choose to use the issue system for your comments?

- GitHub or other platforms is widely used by programmers, so they don't need to register a new account to leave a comment on your site.
- You can get full control of your blog, including the comments.
- The issue system of your blog repo is likely to be idle. Let's make use of it!
:::

### Config for a single post

If the title of your post is likely to be changed in the futrue, we suggest to add `vssue-title` into the frontmatter to set the title of the corresponding issue, which will avoid the problems if you change the title of your post:

```md {7}
---
category: hello
tags:
  - world
date: 2019-01-21
title: Hello, world!
vssue-title: The fixed issue title
---

This is my first post.
```

If you want to create issue manually, you should set `vssue-id` to the ID of the issue in the frontmatter:

```md {7}
---
category: hello
tags:
  - world
date: 2019-01-21
title: Hello, world!
vssue-id: 1
---

This is my first post.
```

If you want to disable comments for some post, set `vssue: false` in the frontmatter:

> You can check [Disable Comments](2019-01-20-disable-comments.md) to see the demo.

```md {7}
---
category: hello
tags:
  - world
date: 2019-01-21
title: Hello, world!
vssue: false
---

This is my first post.
```

::: tip
If you are familiar with Vssue, `vssue-title` is the prop `title` of Vssue component, and `vssue-id` is the prop `issue-id` of Vssue component.
:::

### Disable Comments

Of course, if you don't want comments on your blog, you can disable it totally:

```js
module.exports = {
  // Theme Config
  themeConfig: {
    // Comments Config
    comments: false,
  },
}
```

If you set `comments: false`, Vuepress will not introduce Vssue at all.

## References

### Style variables

Support `palette.styl` of Vuepress to customize style variables.

```stylus
// colors
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

// layout
$navbarHeight ?= 3.6rem
$bannerHeight ?= 12rem

// responsive breakpoints
$MQWide ?= 1440px
$MQNarrow ?= 1024px
$MQMobile ?= 768px
$MQMobileNarrow ?= 480px
```

### Frontmatter

#### Common frontmatter

These frontmatters work for custom pages and posts.

```yaml
---
# Title of current page/post, which will be displayed in the header banner
title: Welcome to vuepresss-theme-meteorlxy

# Set the layout of current page/post. Go to the [Custom Pages] for details
layout: CustomLayout

# Show the personal info card on this page or not
## Default: `true`
aside: true

# Use image as the background of the header in this page
# If set to an array, a random image will be chosen when entering this page
## Default `undefined`
header-image: /assets/img/header-image-01.jpg
header-image:
  - /assets/img/header-image-01.jpg
  - /assets/img/header-image-02.jpg
  - /assets/img/header-image-03.jpg

# Show title in the header or not
## Default `true`
header-title: true
---
```

#### Post frontmatter

These frontmatters only work for posts.

```yaml
---
# Set if to pin the post to the top
## Default `false`
top: true
top: 1
top: 2

# Set the category of current post
category: docs

# Set the tags of current post
tags:
  - zh
  - en

# Set the created date of current post
date: 2019-02-27

# Show the meta info of the post or not , i.e. Created, Updated, Previous Post, Next Post, etc.
## Default: `true`
meta: true

# Comments config, see the [Post Comments] section above
## Default: `true`
vssue: true
## Default: `undefined`
vssue-id: 1
## Default: `frontmatter.title`
vssue-title: Comments of this page
---
```
