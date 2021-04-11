const should = require('should');

const zapier = require('zapier-platform-core');

const App = require('../index');
const appTester = zapier.createAppTester(App);


describe('basic authentication', () => {
  zapier.tools.env.inject();

  it('should authenticate', (done) => {
    const bundle = {
      authData: {
        api_key: process.env.TEST_API_KEY,
      }
    };

    appTester(App.authentication.test, bundle)
      .then((response) => {
        should.exist(response.data.user);
        done();
      })
      .catch(done);
  });

});
