const path = require('path')

module.exports = {
  title: 'vuepress-theme-meteorlxy',

  description: 'Vuepress theme of meteorlxy\'s blog',

  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },

  theme: path.resolve(__dirname, '../../lib'),

  themeConfig: {
    personalInfo: {
      nickname: 'meteorlxy',
      description: 'Happy Coding<br/>Happy Life',
      email: 'meteor.lxy@foxmail.com',
      location: 'Xi\'an City, China',
      organization: 'Xi\'an Jiao Tong University',

      avator: 'https://www.meteorlxy.cn/assets/img/avator.jpg',

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
      },
    },

    headerBackground: {
      // url: '/assets/img/bg.jpg',

      useGeo: true,
    },

    lastUpdated: true,

    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false },
      { text: 'More Pages', link: '/more-pages/', exact: false },
    ],

    comments: {
      owner: 'meteorlxy',
      repo: 'vssue-test',
      clientId: '9fb56bc9476389533577',
      clientSecret: '00d917a5f2496051f20827ce3e2673bc3dc2cd7b',
    },
  },
}
