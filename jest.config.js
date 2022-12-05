module.exports = {
  preset: "ts-jest",
  verbose: true,
  clearMocks: true,
  testEnvironment: "jsdom",
  roots: ["<rootDir>"],
  modulePaths: ["<rootDir>"],
  testPathIgnorePatterns: ["</node_modules/"],
  transform: {
    "\\.js$": "<rootDir>/node_modules/babel-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
