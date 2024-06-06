const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./0-calcul");

describe("calculateNumber()", function() {

    it('checking expected bahaviour', function() {
      const result = calculateNumber(1, 1);
      assert.strictEqual(result, 2);
    });
    it('checking rounding off', function() {
      const result = calculateNumber(1.1, 2.2);
      assert.strictEqual(result, 3);
    });
    it('checking negative input', function() {
      const res = calculateNumber(-1.1, -2.0);
      assert.strictEqual(res, -3);
    });

});
