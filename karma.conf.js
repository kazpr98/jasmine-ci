const { config } = require("karma");

module.exports = function (config) {
  config.set({
    frameworks: ["jasmine", "jasmine-matchers"],
    files: ["./custom-matcher.js", "*.js", "*.spec.js"],
    plugins: [
      "karma-jasmine",
      "karma-jasmine-matchers",
      "karma-chrome-launcher",
      "karma-coverage"
    ],
    reporters: ["dots", "coverage"],
    color: true,
    singleRun: true,
    browsers: ["ChromeHeadless"],
    coverageReporter: {
      dir: "coverage/",
      reporters: [{ type: "html", subdir: "html" }]
    },
    preprocessors: {
      "*.js": ["coverage"]
    }
  });
};
