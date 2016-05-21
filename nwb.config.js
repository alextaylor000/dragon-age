module.exports = {
  type: 'react-app',
  webpack: {
    extra: {
      externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      }
    }
  },
}
