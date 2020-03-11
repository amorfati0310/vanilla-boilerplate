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
### vsCode Extension 

- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

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

- babel 
- scss 
- build (merge, prod, dev)