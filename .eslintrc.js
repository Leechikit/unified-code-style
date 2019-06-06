module.exports = {
  // 此项是用来告诉eslint找当前配置文件不能往父级查找
  root: true,
  // 此项指定环境的全局变量，下面的配置指定为浏览器环境
  env: {
    browser: true
  },
  // 此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  rules: {
    'no-debugger': 'error', // 禁止使用 debugger
    'no-console': 'off', // 允许使用 console
    quotes: ['error', 'single'], // 必须使用单引号，禁止使用双引号
    semi: 'off', // 结尾必须没有分号
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }] // vue模板不检查闭合标签
  }
}
