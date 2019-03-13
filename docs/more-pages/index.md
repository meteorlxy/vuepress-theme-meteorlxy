You can add more pages.

First, create another directory, and put a `index.md` or `readme.md` in it:

```bash {6-7}
root
├── .vuepress
│   └── config.js
├── _post
│   └── 2019-01-20-hello-world.md
└── more-pages
    └── index.md
```

Then, add nav in your `.vuepress/config.js`:

```js {7}
module.exports = {
  // ...
  themeConfig: {
    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false },
      { text: 'More Pages', link: '/more-pages/', exact: false },
    ],
  },
}
```
