# 代码风格统一化

解决同一项目多人开发，每个人的代码风格不一致的问题。
编码后保存自动格式化，提交代码时进行 eslint 校验，验证通过后才能正常提交，确保代码风格一致并正确。

## 构建新项目

### 使用 vue-cli 构建

```
vue create project-name
```

windows 用户使用以下命令

```
winpty vue.cmd create project-name
```

构建过程选择

- ? Please pick a preset: `Manually select features`
- ? Check the features needed for your project: 必选`Linter / Formatter`
- ? Pick a linter / formatter config: `ESLint + Prettier`
- ? Pick additional lint features: 必选`Lint and fix on commit`
- ? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? `In dedicated config files`

### 安装构建

安装 eslint 相关包

```
npm install --save-dev eslint babel-eslint eslint-plugin-vue
// or
yarn add --dev eslint babel-eslint eslint-plugin-vue
```

安装 perttier 相关包

```
npm install --save-dev eslint-plugin-prettier eslint-config-prettier
// or
yarn add --dev eslint-plugin-prettier eslint-config-prettier
```

安装 git hook 相关包

```
npm install --save-dev lint-staged
// or
yarn add --dev lint-staged
```

## 项目配置文件

在根目录增加 `.prettierrc.js` 文件，并添加以下配置

```

module.exports = {
printWidth: 80, // 一行最大字符量，超过换行
tabWidth: 2, // tab 缩进大小,默认为 2
useTabs: false, // 使用 tab 缩进，默认 false
singleQuote: true, // 使用单引号, 默认 false(在 jsx 中配置无效, 默认都是双引号)
semi: false, // 不使用分号, 默认 true
trailingComma: 'none', // 无尾逗号,默认 none,可选 none|es5|all
bracketSpacing: true, // 对象中的空格 默认 true
jsxBracketSameLine: true, // JSX 标签闭合位置 默认 false
arrowParens: 'avoid' // 箭头函数参数括号能省略括号的时候就省略 默认 avoid 可选 avoid| always
}

```

修改 `.eslintrc.js` 文件为以下配置

```

module.exports = {
// 此项是用来告诉 eslint 找当前配置文件不能往父级查找
root: true,
// 此项指定环境的全局变量，下面的配置指定为浏览器环境
env: {
browser: true
},
// 此项是用来指定 eslint 解析器的，解析器必须符合规则，babel-eslint 解析器是对 babel 解析器的包装使其与 ESLint 解析
parserOptions: {
parser: 'babel-eslint'
},
extends: ['plugin:vue/essential', '@vue/prettier'],
rules: {
'no-debugger': 'error', // 禁止使用 debugger
'no-console': 'off', // 允许使用 console
quotes: ['error', 'single'], // 必须使用单引号，禁止使用双引号
semi: 'off', // 结尾必须没有分号
'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }] // vue 模板不检查闭合标签
}
}

```

在 `package.json` 文件增加或修改以下配置

```
"gitHooks": {
  "pre-commit": "lint-staged"
},
"lint-staged": {
  // 检验文件
  "src/*.{js,vue,css,scss,json}": [
    "vue-cli-service lint",
    "git add"
  ]
}
```

## 安装编辑器插件

vscode 编辑器中，文件 -> 首选项 -> 扩展

搜索安装 ESlint、 Prettier 和 Vetur

## 修改编辑器配置

vscode 编辑器中，文件 -> 首选项 -> 设置 -> 输入 eslint -> 点击在 settings.json 中编辑

修改 `settings.json` 文件为以下配置

```

{
"search.location": "sidebar",
"editor.renderWhitespace": "all",
"editor.tabSize": 2,
// 每次保存的时候自动格式化
"editor.formatOnSave": true,
"[javascript]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[json]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
},
// vue 模板格式化依赖 默认为 none
"vetur.format.defaultFormatter.html": "prettier",
// 规则应用文件范围
"eslint.validate": [
"javascript",
"html",
{
"language": "javascript",
"autoFix": true
},
{
"language": "html",
"autoFix": true
},
{
"language": "vue",
"autoFix": true
}
]
}

```

```

```
