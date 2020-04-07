## Prerequisites
* [Install `yarn` package manager](https://yarnpkg.com/lang/en/docs/install/)

## Usage
* Install dependencies with `yarn install`
* Run localhost environment with `yarn dev`
* Build production files with `yarn build`
* Deploy to `gh-pages` with `yarn deploy`

## Changelog
### 1.3.0
  * add support to ES6
### 1.2.2
  * fix error where building without going through yarn dev fails
  * added `.prettierrc`
### 1.2.1
  * add sample for multi-page bundles, add dependency only as needed
### 1.2.0
  * encourage yarn as package manager
  * optimize bundling of js files, fix their dependency connections
  * remove image compression from bundling
  * add prebuild for `dist` cleaning prior build
  * add `yarn deploy` command for `gh-pages`
  * add swiper demo, add modal demo
  * clean console logs
### 1.1.3
  * remove package locks from `.gitignore`
### 1.1.2
  * `process.env.PWD` replaced with `..` in `index.js` path
### 1.1.1
  * use `imagemin-pngquant` for pngs
  * rollback to working versions of `imagemin-pngquant(5.0.1)` and `pngquant-bin(3.1.1)`
### 1.1.0
  * add `readme.md`
  * added new plugins for reliable image compression:
    * `imagemin-mozjpeg`
    * `imagemin-pngout`
    * `imagemin-giflossy`
### 1.0.0
  * initial commit