> This branch is for vuepress's next version `1.x`.

> As vuepress `1.x` is on `alpha` stage, this branch is not stable.

# Vuepress Theme - Meteorlxy

Meteorlxy theme for [Vuepress](https://vuepress.vuejs.org)

See demo on [my homepage](https://www.meteorlxy.cn)

## Theme Config

Sample config:

```js
// .vupress/config.js

module.exports = {
  title: 'Meteorlxy',

  description: 'meteorlxy\'s homepage',

  head: [
    ['link', { rel: 'icon', href: '/assets/img/avator.jpg' }],
  ],

  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },

  // use this theme
  theme: 'meteorlxy',

  // set theme config
  themeConfig: {
    personalInfo: {
      // your personal info to display in the info card
      nickname: 'meteorlxy',
      description: 'Happy Coding<br/>Happy Life',
      email: 'meteor.lxy@foxmail.com',
      location: 'Xi\'an City, China',
      organization: 'Xi\'an Jiao Tong University',

      // your avator image to display in the info card (related to the .vuepress/public directory)
      avator: '/assets/img/avator.jpg',

      // your sns accounts to display in the page footer and the bottom of info card
      sns: {
        facebook: {
          account: 'meteorlxy.cn',
          link: 'https://www.facebook.com/meteorlxy.cn'
        },
        github: {
          account: 'meteorlxy',
          link: 'https://github.com/meteorlxy'
        },
        linkedin: {
          account: 'meteorlxy',
          link: 'http://www.linkedin.com/in/meteorlxy'
        },
        twitter: {
          account: 'meteorlxy_cn',
          link: 'https://twitter.com/meteorlxy_cn'
        },
        weibo: {
          account: '@焦炭君_Meteor',
          link: 'https://weibo.com/u/2039655434'
        }
      }
    },

    // background of the header
    headerBackground: {
      // set url for image background (related to the .vuepress/public directory)
      // url: '/assets/img/bg.jpg',

      // use geopattern to generate background randomly
      useGeo: true
    },

    // use the official last-update plugin
    lastUpdated: true,

    // for the navbar
    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false  },
      { text: 'About', link: '/about/', exact: false  }, 
    ]
  },
}
```

## TODOS

- [ ] Comments Support
- [ ] SEO
- [ ] General enhancement
