const path = require('path')

module.exports = {
  title: 'vuepress-theme-meteorlxy',

  description: 'Vuepress theme of meteorlxy\'s blog',

  locales: {
    '/': {
      lang: 'en-US',
    },
  },

  evergreen: true,

  plugins: [
    ['@vuepress/google-analytics', {
      ga: 'UA-132770851-2',
    }],
  ],

  chainWebpack: (config, isServer) => {
    if (isServer === false) {
      config.optimization.splitChunks({
        maxInitialRequests: 5,
        cacheGroups: {
          vue: {
            test: /[\\/]node_modules[\\/](vue|vue-router|vssue)[\\/]/,
            name: 'vendor.vue',
            chunks: 'all',
          },
          commons: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            name: 'vendor.commons',
            chunks: 'all',
          },
        },
      })
    }
  },

  theme: path.resolve(__dirname, '../../lib'),

  themeConfig: {
    lang: 'en-US',

    personalInfo: {
      nickname: 'meteorlxy',
      description: 'Happy Coding<br/>Happy Life',
      email: 'meteor.lxy@foxmail.com',
      location: 'Shenzhen, China',
      organization: 'Tencent',

      avatar: 'https://www.meteorlxy.cn/assets/img/avatar.jpg',

      sns: {
        github: {
          account: 'meteorlxy',
          link: 'https://github.com/meteorlxy',
        },
        facebook: {
          account: 'meteorlxy.cn',
          link: 'https://www.facebook.com/meteorlxy.cn',
        },
        linkedin: {
          account: 'meteorlxy',
          link: 'http://www.linkedin.com/in/meteorlxy',
        },
        twitter: {
          account: 'meteorlxy_cn',
          link: 'https://twitter.com/meteorlxy_cn',
        },
        weibo: {
          account: '@焦炭君_Meteor',
          link: 'https://weibo.com/u/2039655434',
        },
        zhihu: {
          account: 'meteorlxy.cn',
          link: 'https://www.zhihu.com/people/meteorlxy.cn',
        },
        douban: {
          account: '159342708',
          link: 'https://www.douban.com/people/159342708',
        },
        reddit: {
          account: 'meteorlxy',
          link: 'https://www.reddit.com/user/meteorlxy',
        },
        medium: {
          account: 'meteorlxy.cn',
          link: 'https://medium.com/@meteorlxy.cn',
        },
        instagram: {
          account: 'meteorlxy.cn',
          link: 'https://www.instagram.com/meteorlxy.cn',
        },
        gitlab: {
          account: 'meteorlxy',
          link: 'https://gitlab.com/meteorlxy',
        },
        bitbucket: {
          account: 'meteorlxy',
          link: 'https://bitbucket.org/meteorlxy',
        },
        docker: {
          account: 'meteorlxy',
          link: 'https://hub.docker.com/u/meteorlxy',
        },
        csdn: {
          account: '',
          link: 'https://www.csdn.net/',
        },
        juejin: {
          account: 'meteorlxy',
          link: 'https://juejin.im/user/5c6fa9dde51d453fcb7baf09',
        },
      },
    },

    header: {
      background: {
        // url: '/assets/img/header-image-01.jpg',
        useGeo: true,
      },
      showTitle: true,
    },

    footer: {
      poweredBy: true,
      poweredByTheme: true,
      custom: 'Copyright 2018-present <a href="https://github.com/meteorlxy" target="_blank">meteorlxy</a> | MIT License',
    },

    infoCard: {
      headerBackground: {
        // url: '/assets/img/header-image-01.jpg',
        useGeo: true,
      },
    },

    lastUpdated: true,

    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false },
      { text: 'Custom Pages', link: '/custom-pages/', exact: false },
      { text: 'Changelog', link: 'https://github.com/meteorlxy/vuepress-theme-meteorlxy/blob/master/CHANGELOG.md' },
      { text: 'Github', link: 'https://github.com/meteorlxy/vuepress-theme-meteorlxy' },
    ],

    // Enable smooth scrolling or not
    smoothScroll: false,

    // Configs for vuepress-plugin-zooming
    zooming: {
      // @see https://vuepress.github.io/en/plugins/zooming
    },

    comments: {
      owner: 'meteorlxy',
      repo: 'vuepress-theme-meteorlxy',
      clientId: 'cbda894952ba70c00666',
      clientSecret: '1ade785ca693bf3092be5e5338720d5ee43672b7',
      autoCreateIssue: false,
    },

    pagination: {
      perPage: 5,
    },
  },
}
