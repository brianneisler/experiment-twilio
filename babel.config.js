module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: 3,
        targets: {
          node: '14'
        },
        useBuiltIns: 'usage'
      }
    ]
  ]
}
