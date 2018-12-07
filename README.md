## Usage
* Install dependencies with `yarn install`
  * https://yarnpkg.com/en/docs/install
* Run with `yarn dev`
* Build with `yarn build`
* Adjust image compression settings at `tasks/compress.js` under task: `'build:image'`

## Changelog
### 1.1 
  * Add readme.md
  * Enforce yarn as package manager for new installs
  * Added new plugins for reliable image compression:
    * imagemin-mozjpeg
    * imagemin-pngout
    * imagemin-giflossy
### 1.0
  * Initial commit