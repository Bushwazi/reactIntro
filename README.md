# React Intro

## Reworked files for ["Build Realtime Apps | React Js, Golang &amp; RethinkDB"](https://www.udemy.com/realtime-apps-with-reactjs-golang-rethinkdb/learn/v4/overview) Udemy Class

* The course files were date and after following the videos, I was getting an error on compile
* To address the fixes, I walked through WebPack's current documentation, add all the same modules as their most recent version
* Moved all the source files into /src
* Updated repo to use prop-types because it was moved out of React
* __To view the output__, you need to run `$ build` from the __dist directory__
* OR, when using `$ webpack-dev-server` follow the directions and click into the dist folder

### This assumes you have global installs of the following:
_some of these could be wrong and from other projects..._

1. [serve](https://www.npmjs.com/package/serve)
2. [webpack](https://webpack.js.org/)
3. [webpack-cli](https://webpack.js.org/api/cli/)
4. [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server)
5. [babel](https://babeljs.io/)