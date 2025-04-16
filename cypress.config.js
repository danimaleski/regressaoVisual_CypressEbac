const { defineConfig } = require("cypress");
const { tabNavigation, setDebuggingPort } = require("./cypress/support/utils/tabNavigation");
require('dotenv').config()
const getCompareSnapshotsPlugin = require("cypress-lens/dist/plugin");

module.exports = defineConfig({
  screenshotsFolder: "./cypress/snapshots/actual/cypress/e2e",
  trashAssetsBeforeRuns: true,
  video: false,  
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    setupNodeEvents(on, config) {

      //require('cypress-html-reporter/GenerateReport')(on, config)
      getCompareSnapshotsPlugin(on, config)

      //on('before:browser:launch', (browser = {}, launchOptions) => {
        //if (browser.name === 'chrome') {
          //const debuggingPort = launchOptions.args.find(
            //(arg) => arg.slice(0, 23) === '--remote-debugging-port',
          //);
          //setDebuggingPort(debuggingPort.split('='));
        //}
        //return launchOptions;
      //});

      //on('task', {
        //tabNavigation
      //});

    },
    env: {
      // MY_ENV: "dev",
      MY_ENV: process.env.MY_ENV,
      ebacStoreVersion: "v1",
      failSilently: false,
      SNAPSHOT_BASE_DIRECTORY: "./cypress/snapshots/base/cypress/e2e",
      SNAPSHOT_DIFF_DIRECTORY: "./cypress/snapshots/diff/cypress/e2e"
    },
    reporter: 'cypress-lens'
  },
   //reporter: 'mochawesome',
   //reporterOptions: {
      //reportFilename: "[name]-result",
      //html: false or true caso queira gerar os relatórios html e json para cada arquivo de teste
   //}
});
