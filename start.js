// eslint-disable-next-line import/no-extraneous-dependencies
require('@babel/register')({
  presets: ['airbnb'],
});

module.exports = require('./index.js');
