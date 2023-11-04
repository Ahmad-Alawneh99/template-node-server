/* eslint-disable no-undef */
const rewire = require('rewire');
const data = rewire('./data');

describe('data', () => {
	it('should', () => {
		data.fcn = sinon.stub().returns(2);
		expect(data.fcn()).to.deep.eql(2);
	});
});
