/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: 'ts-jest',
  testEnvironment: "node",
  testMatch: ['**/src/**/*.spec.ts', '**/?(*.)+(spec|test).ts'],
  testEnvironment: "node",
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["/node_modules/"],
  resetMocks: false,
  collectCoverage: true
};
