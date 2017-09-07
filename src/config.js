require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3001,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT || 3001,
  app: {
    title: 'React Redux Example',
    description: 'Lesgo',
    head: {
      titleTemplate: 'React Redux Example | %s',
      meta: [
        { name: 'description', content: 'Modern practices all in one' },
        { charset: 'utf-8' }
      ]
    }
  }
}, environment);
