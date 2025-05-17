// Integration Test for Roo Examples

const assert = require("assert")

describe("Example Tests", () => {
  it("should execute basic example without errors", () => {
    const result = require("../../examples/basic-usage/example1.js")
    assert.ok(result, "Basic example should execute successfully")
  })

  it("should execute advanced example without errors", () => {
    const result = require("../../examples/advanced-usage/example2.js")
    assert.ok(result, "Advanced example should execute successfully")
  })
})
