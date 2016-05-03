var chai;
if (typeof exports !== 'undefined') {
	chai = require('chai');
}

describe('Example Test', () => {
  it('simple test', () => {
    chai.expect(1).to.equal(1);
	expect(true).toBe(true);
  });
});
