const path = require('path')

module.exports = {
  title: 'vuepress-theme-meteorlxy',

  description: 'meteorlxy\'s homepage',

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
        facebook: {
          account: 'meteorlxy.cn',
          link: 'https://www.facebook.com/meteorlxy.cn',
        },
        github: {
          account: 'meteorlxy',
          link: 'https://github.com/meteorlxy',
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
    ],
  },
}
