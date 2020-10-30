/* eslint-disable @typescript-eslint/no-var-requires */
const percyHealthCheck = require("@percy/cypress/task");

module.exports = (on, config) => {
  on("task", percyHealthCheck);
  return config;
};
