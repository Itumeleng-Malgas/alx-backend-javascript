const {describe, it} = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./3-payment");
const Utils = require("./utils");
const assert = require("assert");

describe('sendPaymentRequestToApi', function() {
    it('should use Utils.calculateNumber to calculate the total', function() {
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

        sendPaymentRequestToApi(100, 20);

        assert(calculateNumberSpy.calledOnce);
        calculateNumberSpy.restore();
    });
});
