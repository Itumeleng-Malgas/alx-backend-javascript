const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./0-calcul");

describe("calculateNumber()", function() {

    it('checking no rounding off', function() {
      const result = calculateNumber(1, 1);
      assert.strictEqual(result, 2);
    });
    it('checking rounding off up', function() {
      const result = calculateNumber(1.7, 2.5);
      assert.strictEqual(result, 5);
    });
    it('checking rounding negative', function() {
      const result = calculateNumber(-1.5, -2.8);
      assert.strictEqual(result, -4);
    });
    it('checing rouding off down', function() {
      const result = calculateNumber(1.4, 2.2);
      assert.strictEqual(result, 3);
    });
    it('checking zeros as inputs', function() {
      const result = calculateNumber(0, 0);
      assert.strictEqual(result, 0);
    });
});
