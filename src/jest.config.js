module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest", // transform JS/TS
  },
  transformIgnorePatterns: [
    "node_modules/(?!(axios)/)" // 👈 transform axios even if it's in node_modules
  ],
};
