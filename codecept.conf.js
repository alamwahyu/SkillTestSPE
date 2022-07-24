const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    FileSystem: {},
    Puppeteer: {
      url: 'https://portalbeta.bni-ecollection.com',
      show: true,
      windowSize: '1560x900',
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {
    reporterOptions: {
      reportDir:"output"
    }
  },
  name: 'project1',
  plugins: {
    allure: {
      enabled : false
    },
    stepByStepReport: {
      enabled: false,
      deleteSuccessful: false
    }
  }
}