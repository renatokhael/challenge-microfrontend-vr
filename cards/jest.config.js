module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^./api/(.*)$": "<rootDir>/src/api/$1",
  },
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
  },
};
