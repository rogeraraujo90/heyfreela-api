/** @type
 * {import('ts-jest/dist/types').InitialOptionsTsJest}
 **/

const { pathsToModuleNameMapper } = require('ts-jest');
const {
  compilerOptions: { paths },
} = require('./tsconfig.json');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper(paths, {
    prefix: '<rootDir>',
  }),
  coveragePathIgnorePatterns: ['<rootDir>/src/infra/database/typeorm/index.ts'],
};
