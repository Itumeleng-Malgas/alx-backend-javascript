const chai = require('chai');
const expect = chai.expect;
const { it, describe } = require('mocha');
const calculateNumber = require('./2-calcul_chai');

describe("calculateNumber()", function() {
    it('checking type SUM', function() {
        const result = calculateNumber("SUM", 1, 2);
        expect(result).to.equal(3);
    });

    it('checking type SUBTRACT, rounding down', function() {
        const result = calculateNumber("SUBTRACT", 1.0, 2.4);
        expect(result).to.equal(-1);
    });

    it('checking type SUBTRACT, rounding up', function() {
        const result = calculateNumber("SUBTRACT", 5.9, 1.7);
        expect(result).to.equal(4);
    });

    it('checking type DIVIDE', function() {
        const result = calculateNumber("DIVIDE", 10, 2);
        expect(result).to.equal(5);
    });

    it('checking type DIVIDE, divide by zero', function() {
        const result = calculateNumber("DIVIDE", 3.7, 0);
        expect(result).to.equal("Error");
    });

    it('checking type DIVIDE, rounding numbers', function() {
        const res = calculateNumber("DIVIDE", 9.2, 2.6);
        expect(res).to.equal(3);
    });
});
