## eslint 🐭

```sh
npm install eslint --save-dev
npx eslint --init
```

- [airbnb_js_style_guide](https://github.com/airbnb/javascript)
- [airbnb_extends](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)


대표적으로 많이 쓰이는 airbnb extends로 설정을 하겠습니다 <br>
위에 참고 링크 살펴보며 
```sh
npx install-peerdeps --dev eslint-config-airbnb
``` 
```js
// .eslintrc.js
 extends: ['airbnb'],
```

- [vsCode_eslint_setting](https://github.com/microsoft/vscode-eslint)

## prettier 🐰

```sh
npm i -D prettier 
// prettier 적용하면 eslint 와 중복되는 룰이 생기게 됩니다.
// eslint-config-prettier 를 통해서 prettier 중복 룰을 eslint에서 제거합니다.
npm i -D eslint-config-prettier

```
 
```js
// .eslintrc.js
 extends: ['airbnb', 'eslint-config-prettier'],
```
### vsCode Extension 

- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

```json
// vscode settiongs.json (project)
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.alwaysShowStatus": true,
  "eslint.workingDirectories": [{ "mode": "auto" }],
  "eslint.lintTask.options": "./eslintrc.js",
  "prettier.requireConfig": true,
}

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
npm i webpack webpack-cli webpack-dev-server -D
```
- entry
- output
- loader
  - sass( +css-loader, style-loader)   
  - babel( (babel-loader-> babel.config.js )
  -  assets -> urlloader, fileloader

- plugins 
  - HtmlWebpackPlugin
  - CleanWebpackPlugin
  - MiniCssExtractPlugin
  ...  등등

설정에 맞게 설치합니다.



