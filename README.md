## Usage
* Install dependencies with `yarn install` or `npm install`
  * https://yarnpkg.com/en/docs/install
  * https://www.npmjs.com/get-npm
* Run with `yarn dev`or `npm run dev`
* Build with `yarn build` or `npm run build`

## Changelog
### 1.1.1.1
  * process.env.PWD replaced with '..' in index.js path
### 1.1.1
  * Use imagemin-pngquant for pngs
  * Rollback to working versions of imagemin-pngquant(5.0.1) and pngquant-bin(3.1.1)
### 1.1 
  * Add readme.md
  * Added new plugins for reliable image compression:
    * imagemin-mozjpeg
    * imagemin-pngout
    * imagemin-giflossy
### 1.0
  * Initial commit