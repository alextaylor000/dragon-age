module.exports = {
  type: 'react-app',
  webpack: {
    extra: {
      resolve: {
        modulesDirectories: [
          `node_modules`,
          `src`
        ],
        extensions: [``,`,js`]
      },
      externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      }
    }
  },
}
