const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);


setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'http://localhost:8080/v1',
      defaultHeaders: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    },
    JSONResponse: {}
  },
  include: {
    I: './steps_file.js'
  },
  name: 'platform-science-challenge'
}
