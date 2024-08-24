const config = {
    singleQuote: true,
    semi: false,
    trailingComma: 'all',
    printWidth: 100,
    arrowParens: 'avoid',
    plugins: [
      require.resolve('prettier-plugin-organize-imports'),
    ],
  }

  module.exports = config
