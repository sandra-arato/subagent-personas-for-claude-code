// Unit Test for Roo Configurations

const assert = require("assert")

describe("Configuration Tests", () => {
  it("should load the configuration file", () => {
    const config = require("../../config/roo-settings.json")
    assert.ok(config, "Configuration file should be loaded")
  })
})
