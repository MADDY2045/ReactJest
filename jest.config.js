/**
 * @file Jest configuration.
 */
//setting up jest config
module.exports = {
  rootDir: 'src/test',
  testRegex: '/src/test/.*test\\.js$',
  setupFiles: ['<rootDir>/setup.js'],
};
