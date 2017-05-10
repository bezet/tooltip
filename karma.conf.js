module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'chai'],
    basePath: '',
    files: [
      'src/*.js',
      'test/*.spec.js'
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    // browsers: ['Chrome', 'Firefox', 'IE'],
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  })
}
