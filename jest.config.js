/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.hbs$": "handlebars-jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!@foo)"],
  moduleNameMapper: {
    "^.+\\.(css|less|scss|sass|png|svg)$": "babel-jest",
  },
};
