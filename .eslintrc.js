module.exports = {
  root: true,
  env: {
    browser: true
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  rules: {
    'no-debugger': 'error', // 禁止使用 debugger
    'no-console': 'off', // 允许使用 console
    quotes: ['error', 'single'], // 必须使用单引号，禁止使用双引号
    semi: 'off', // 结尾必须没有分号
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }] // vue模板不检查闭合标签
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
