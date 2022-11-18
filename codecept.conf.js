const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);


setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    REST: {
      endpoint: ' https://pokeapi.co/api/v2'
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'platform-science-challenge'
}
