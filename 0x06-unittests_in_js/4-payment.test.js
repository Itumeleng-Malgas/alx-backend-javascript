const {describe, it} = require("mocha");
const assert = require("assert");
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function() {
    it('should use a stub for Utils.calculateNumber and verify the correct console.log message', function() {
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
        const consoleLogSpy = sinon.spy(console, 'log');

        sendPaymentRequestToApi(100, 20);

	    assert(consoleLogSpy.withArgs("The total is: 10").calledOnce);
	    assert(calculateNumberStub.withArgs("SUM", 100, 20).calledOnce);
        
        calculateNumberStub.restore();
        consoleLogSpy.restore();
    });
});
