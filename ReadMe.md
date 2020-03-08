<h1 align="center">Vanila Front Config👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="localhost:8080" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="MIT" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> BoilerPlate

### 필요한 것들은 ??? 🐱

node version manager

- [nvm](https://github.com/nvm-sh/nvm)

- [eslint](https://eslint.org/docs/user-guide/getting-started)
- prettier
- lint-staged-husky
- webpack
-- babel
-- scss
-- .env

### nvm ✨

```sh
nvm install v12.16.1
```

개발 당시 lts version

## eslint 🐭

```sh
npm install eslint --save-dev
npx eslint --init
```

- [airbnb_js_style_guide](https://github.com/airbnb/javascript)
- [airbnb_extends](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
- [vsCode_eslint_setting](https://github.com/microsoft/vscode-eslint)

## prettier 🐰

```sh
npm i -D prettier 
npm i -D eslint-config-prettier
```

```js
// .eslintrc.js
 extends: ['airbnb', 'eslint-config-prettier'],
```

## Husky & lint-staged 🐷

```sh
npm i -D husky
npm i -D lint-staged
```

```js
"lint-staged": {
    "*.js": [
      "eslint --cache --fix",
      "npm run prettier"
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
```
## webpack 🐵
```
npm i webpack webpack-cli -D
```




## Reference

- [facebook_docusaurus](https://github.com/facebook/docusaurus)
- [webpack](https://joshua1988.github.io/webpack-guide/webpack/what-is-webpack.html#%EC%9B%B9%ED%8C%A9%EC%9D%B4%EB%9E%80)

## Show your support

## 📝 License

This project is [MIT](MIT) licensed.
