const should = require('should');

const zapier = require('zapier-platform-core');

const App = require('../index');
const appTester = zapier.createAppTester(App);

describe('contact trigger', () => {
  it('should create an issue', (done) => {
    const bundle = {
        authData: {
            api_key: process.env.TEST_API_KEY,
          },
      inputData: {
        name: 'TestData',
      }
    };
    appTester(App.creates.create_contact.operation.perform, bundle)
      .then((response) => {
        done();
      })
      .catch(done);
  });
});
