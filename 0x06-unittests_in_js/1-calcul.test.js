const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./1-calcul");

describe("calculateNumber()", function() {

    it('checking type SUM', function() {
      const result = calculateNumber("SUM", 1, 2);
      assert.strictEqual(result, 3);
    });
    it('checking type SUBTRACT, rounding down', function() {
      const result = calculateNumber("SUBTRACT", 1.0, 2.4);
      assert.strictEqual(result, -1);
    });
    it('checking type SUBTRACT, rounding up', function() {
      const result = calculateNumber("SUBTRACT", 5.9, 1.7);
      assert.strictEqual(result, 4);
    });
    it('checking type DIVIDE', function() {
      const result = calculateNumber("DIVIDE", 10, 2);
      assert.strictEqual(result, 5);
    });
    it('checking type DIVIDE, divde by zero', function() {
      const result = calculateNumber("DIVIDE", 3.7, 0);
      assert.strictEqual(result, "Error");
    });
    it('checking type DIVIDE, rounding numbers', function() {
      const res = calculateNumber("DIVIDE", 9.2, 2.6);
      assert.strictEqual(res, 3);
    });
});
