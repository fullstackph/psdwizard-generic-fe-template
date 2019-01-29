## Usage
* Install dependencies with `yarn install` or `npm install`
  * https://yarnpkg.com/en/docs/install
  * https://www.npmjs.com/get-npm
* Run with `yarn dev`or `npm run dev`
* Build with `yarn build` or `npm run build`

## Changelog
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