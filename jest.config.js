module.exports = {
  verbose: true,
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testEnvironment: 'node',
  setupFiles: ['<rootDir>/jest/global.js'],
};
