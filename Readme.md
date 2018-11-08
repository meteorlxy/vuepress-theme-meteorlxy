> This branch is for `vuepress 0.x`.

> For `vuepress 1.x-alpha`, see the [next](https://github.com/meteorlxy/vuepress-theme-meteorlxy/tree/next) branch.

# Vuepress Theme - Meteorlxy

Meteorlxy theme for [Vuepress](https://vuepress.vuejs.org)

See demo on [my homepage](https://www.meteorlxy.cn)

## Installation

```sh
# For vuepress 0.x
yarn add vuepress-theme-meteorlxy
# or
npm install vuepress-theme-meteorlxy

# For vuepress 1.x
yarn add vuepress-theme-meteorlxy@next
# or
npm install vuepress-theme-meteorlxy@next
```

## Extra Config

As Vuepress doesn't allow themes to access Vuepress's config by now, you have to add extra config in `.vupress/config.js` of your project.

Here's the sample config of my own homepage:

```js
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
  theme: 'meteorlxy',
  themeConfig: {
    personalInfo: {
      nickname: 'meteorlxy',
      description: 'Happy Coding<br/>Happy Life',
      email: 'meteor.lxy@foxmail.com',
      location: 'Xi\'an City, China',
      organization: 'Xi\'an Jiao Tong University',
      avator: '/assets/img/avator.jpg',
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
    // headerBackground priority: url > useGeo
    headerBackground: {
      // url: '/assets/img/bg.jpg',
      useGeo: true
    },
    lastUpdated: true,
    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false  },
      { text: 'About', link: '/about/', exact: false  }, 
    ]
  },
  markdown: {
    toc: {
      includeLevel: [2, 3, 4]
    }
  },
  chainWebpack: (config, isServer) => {
    if (isServer === false) {
      config.node.set('Buffer', false)

      config.optimization.splitChunks({
        maxInitialRequests: 5,
        cacheGroups: {
          vue: {
            test: /[\\/]node_modules[\\/](vue|vue-router)[\\/]/,
            name: 'vendor.vue',
            chunks: 'all'
          },
          commons: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            name: 'vendor.commons',
            chunks: 'all'
          }
        }
      })
    }
  }
}
```

## TODOS

- [ ] Comments Support
- [ ] SEO
- [ ] General enhancement
