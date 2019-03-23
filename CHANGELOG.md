# [1.0.0-alpha.31](https://github.com/meteorlxy/vuepress-theme-meteorlxy/compare/v1.0.0-alpha.30...v1.0.0-alpha.31) (2019-03-23)


### Features

* add top frontmatter ([b982324](https://github.com/meteorlxy/vuepress-theme-meteorlxy/commit/b982324))



# [1.0.0-alpha.30](https://github.com/meteorlxy/vuepress-theme-meteorlxy/compare/v1.0.0-alpha.29...v1.0.0-alpha.30) (2019-03-20)


### Features

* set config for theme plugins ([bd3fc95](https://github.com/meteorlxy/vuepress-theme-meteorlxy/commit/bd3fc95))



# [1.0.0-alpha.29](https://github.com/meteorlxy/vuepress-theme-meteorlxy/compare/v1.0.0-alpha.28...v1.0.0-alpha.29) (2019-03-20)


### Features

* more header configs (close [#26](https://github.com/meteorlxy/vuepress-theme-meteorlxy/issues/26)) ([a515120](https://github.com/meteorlxy/vuepress-theme-meteorlxy/commit/a515120))

### Breaking Changes

Before:

```js
themeConfig: {
  headerBackground: {
    url: '/assets/img/bg.jpg',
    useGeo: true,
  },
}
```

After:

```js
themeConfig: {
  header: {
    background: {
      url: '/assets/img/bg.jpg',
      useGeo: true,
    },
    // new
    showTitle: true,
  },
}
```



# [1.0.0-alpha.28](https://github.com/meteorlxy/vuepress-theme-meteorlxy/compare/v1.0.0-alpha.27...v1.0.0-alpha.28) (2019-03-17)


### Bug Fixes

* add missing main-div in page layout ([897c18c](https://github.com/meteorlxy/vuepress-theme-meteorlxy/commit/897c18c))



# [1.0.0-alpha.27](https://github.com/meteorlxy/vuepress-theme-meteorlxy/compare/v1.0.0-alpha.26...v1.0.0-alpha.27) (2019-03-16)


### Bug Fixes

* break word when content overflow (close [#7](https://github.com/meteorlxy/vuepress-theme-meteorlxy/issues/7)) ([809e211](https://github.com/meteorlxy/vuepress-theme-meteorlxy/commit/809e211))


### Features

* add config for default pages ([f9fbebd](https://github.com/meteorlxy/vuepress-theme-meteorlxy/commit/f9fbebd))
* support meta config in frontmatter ([5b0eeff](https://github.com/meteorlxy/vuepress-theme-meteorlxy/commit/5b0eeff))



# [1.0.0-alpha.26](https://github.com/meteorlxy/vuepress-theme-meteorlxy/compare/v1.0.0-alpha.25...v1.0.0-alpha.26) (2019-03-16)


### Bug Fixes

* workaround for medium-zoom ([859b4fd](https://github.com/meteorlxy/vuepress-theme-meteorlxy/commit/859b4fd))


### Features

* **$search:** add posts filter in category and tag pages ([#18](https://github.com/meteorlxy/vuepress-theme-meteorlxy/issues/18)) ([79258eb](https://github.com/meteorlxy/vuepress-theme-meteorlxy/commit/79258eb))



# [1.0.0-alpha.25](https://github.com/meteorlxy/vuepress-theme-meteorlxy/compare/v1.0.0-alpha.24...v1.0.0-alpha.25) (2019-03-14)


### Features

* support posts search ([#15](https://github.com/meteorlxy/vuepress-theme-meteorlxy/issues/15)) ([f997e7a](https://github.com/meteorlxy/vuepress-theme-meteorlxy/commit/f997e7a))



# [1.0.0-alpha.24](https://github.com/meteorlxy/vuepress-theme-meteorlxy/compare/v1.0.0-alpha.23...v1.0.0-alpha.24) (2019-03-12)


### Bug Fixes

* duplicated id of containers ([721d998](https://github.com/meteorlxy/vuepress-theme-meteorlxy/commit/721d998))


### Performance Improvements

* **$style:** better width of container ([3eb1da0](https://github.com/meteorlxy/vuepress-theme-meteorlxy/commit/3eb1da0))



# [1.0.0-alpha.23](https://github.com/meteorlxy/vuepress-theme-meteorlxy/compare/v1.0.0-alpha.22...v1.0.0-alpha.23) (2019-03-04)


### Features

* allow use components as layout (close [#16](https://github.com/meteorlxy/vuepress-theme-meteorlxy/issues/16)) ([7eb7e7f](https://github.com/meteorlxy/vuepress-theme-meteorlxy/commit/7eb7e7f))



# [1.0.0-alpha.22](https://github.com/meteorlxy/vuepress-theme-meteorlxy/compare/v1.0.0-alpha.21...v1.0.0-alpha.22) (2019-03-03)


### Bug Fixes

* not found page ([71eea33](https://github.com/meteorlxy/vuepress-theme-meteorlxy/commit/71eea33))



# [1.0.0-alpha.21](https://github.com/meteorlxy/vuepress-theme-meteorlxy/compare/v1.0.0-alpha.20...v1.0.0-alpha.21) (2019-03-02)


### Bug Fixes

* be compatible with evergreen ([55225d4](https://github.com/meteorlxy/vuepress-theme-meteorlxy/commit/55225d4))



# [1.0.0-alpha.20](https://github.com/meteorlxy/vuepress-theme-meteorlxy/compare/v1.0.0-alpha.19...v1.0.0-alpha.20) (2019-03-02)



# [1.0.0-alpha.19](https://github.com/meteorlxy/vuepress-theme-meteorlxy/compare/v1.0.0-alpha.18...v1.0.0-alpha.19) (2019-03-01)


### Bug Fixes

* make the plugin work when lang is not set ([96f0393](https://github.com/meteorlxy/vuepress-theme-meteorlxy/commit/96f0393))



# [1.0.0-alpha.18](https://github.com/meteorlxy/vuepress-theme-meteorlxy/compare/v1.0.0-alpha.17...v1.0.0-alpha.18) (2019-02-28)


### Bug Fixes

* **$i18n:** add omitted translation ([#12](https://github.com/meteorlxy/vuepress-theme-meteorlxy/issues/12)) ([ee64722](https://github.com/meteorlxy/vuepress-theme-meteorlxy/commit/ee64722))


### Features

* add more sns icons ([dd59de7](https://github.com/meteorlxy/vuepress-theme-meteorlxy/commit/dd59de7))



# [1.0.0-alpha.17](https://github.com/meteorlxy/vuepress-theme-meteorlxy/compare/v1.0.0-alpha.16...v1.0.0-alpha.17) (2019-02-27)


### Bug Fixes

* remove extra class name ([bec9a3c](https://github.com/meteorlxy/vuepress-theme-meteorlxy/commit/bec9a3c))



# [1.0.0-alpha.16](https://github.com/meteorlxy/vuepress-theme-meteorlxy/compare/v1.0.0-alpha.15...v1.0.0-alpha.16) (2019-02-27)


### Features

* **$i18n:** add language pt-BR ([#11](https://github.com/meteorlxy/vuepress-theme-meteorlxy/issues/11)) ([c72d9a0](https://github.com/meteorlxy/vuepress-theme-meteorlxy/commit/c72d9a0))



# [1.0.0-alpha.15](https://github.com/meteorlxy/vuepress-theme-meteorlxy/compare/v1.0.0-alpha.14...v1.0.0-alpha.15) (2019-02-27)


### Bug Fixes

* remove extra navbar background ([6c8381e](https://github.com/meteorlxy/vuepress-theme-meteorlxy/commit/6c8381e))


### Features

* support i18n ([6b86226](https://github.com/meteorlxy/vuepress-theme-meteorlxy/commit/6b86226))



# [1.0.0-alpha.14](https://github.com/meteorlxy/vuepress-theme-meteorlxy/compare/v1.0.0-alpha.13...v1.0.0-alpha.14) (2019-02-27)


### Bug Fixes

* **$styles:** add overflow hidden on main-div ([9ade682](https://github.com/meteorlxy/vuepress-theme-meteorlxy/commit/9ade682))


### Features

* make the navbar responsive (close [#5](https://github.com/meteorlxy/vuepress-theme-meteorlxy/issues/5)) ([ff6fc50](https://github.com/meteorlxy/vuepress-theme-meteorlxy/commit/ff6fc50))



# [1.0.0-alpha.13](https://github.com/meteorlxy/vuepress-theme-meteorlxy/compare/v1.0.0-alpha.12...v1.0.0-alpha.13) (2019-02-25)


### Features

* allow disable comments ([3f82a98](https://github.com/meteorlxy/vuepress-theme-meteorlxy/commit/3f82a98))



# [1.0.0-alpha.12](https://github.com/meteorlxy/vuepress-theme-meteorlxy/compare/v1.0.0-alpha.11...v1.0.0-alpha.12) (2019-02-25)


### Features

* add vuepress-plugin-smooth-scroll ([c55043e](https://github.com/meteorlxy/vuepress-theme-meteorlxy/commit/c55043e))



# [1.0.0-alpha.11](https://github.com/meteorlxy/vuepress-theme-meteorlxy/compare/v1.0.0-alpha.10...v1.0.0-alpha.11) (2019-01-31)


### Bug Fixes

* **$styles:** add offset for anchors ([40420c1](https://github.com/meteorlxy/vuepress-theme-meteorlxy/commit/40420c1))


### Features

* add post nav card ([bc6169b](https://github.com/meteorlxy/vuepress-theme-meteorlxy/commit/bc6169b))



# [1.0.0-alpha.10](https://github.com/meteorlxy/vuepress-theme-meteorlxy/compare/v1.0.0-alpha.9...v1.0.0-alpha.10) (2019-01-30)


### Bug Fixes

* add html ext to permalink ([127316c](https://github.com/meteorlxy/vuepress-theme-meteorlxy/commit/127316c))



# [1.0.0-alpha.9](https://github.com/meteorlxy/vuepress-theme-meteorlxy/compare/v1.0.0-alpha.8...v1.0.0-alpha.9) (2019-01-30)


### Features

* use medium-zoom plugin ([ee838fd](https://github.com/meteorlxy/vuepress-theme-meteorlxy/commit/ee838fd))



# [1.0.0-alpha.8](https://github.com/meteorlxy/vuepress-theme-meteorlxy/compare/v1.0.0-alpha.7...v1.0.0-alpha.8) (2019-01-30)


### Features

* support external link in navbar ([4fede9c](https://github.com/meteorlxy/vuepress-theme-meteorlxy/commit/4fede9c))



# [1.0.0-alpha.7](https://github.com/meteorlxy/vuepress-theme-meteorlxy/compare/v1.0.0-alpha.6...v1.0.0-alpha.7) (2019-01-30)


### Bug Fixes

* excerpt should be wrapped in content (fix [#4](https://github.com/meteorlxy/vuepress-theme-meteorlxy/issues/4)) ([a3c463d](https://github.com/meteorlxy/vuepress-theme-meteorlxy/commit/a3c463d))



# [1.0.0-alpha.6](https://github.com/meteorlxy/vuepress-theme-meteorlxy/compare/v1.0.0-alpha.4...v1.0.0-alpha.6) (2019-01-29)


### Features

* add post meta at the end of a post ([08c1c88](https://github.com/meteorlxy/vuepress-theme-meteorlxy/commit/08c1c88))



# [1.0.0-alpha.4](https://github.com/meteorlxy/vuepress-theme-meteorlxy/compare/v1.0.0-alpha.3...v1.0.0-alpha.4) (2018-11-12)



# [1.0.0-alpha.3](https://github.com/meteorlxy/vuepress-theme-meteorlxy/compare/v1.0.0-alpha.2...v1.0.0-alpha.3) (2018-11-08)



# [1.0.0-alpha.2](https://github.com/meteorlxy/vuepress-theme-meteorlxy/compare/v0.2.6...v1.0.0-alpha.2) (2018-11-08)
