var chai;
if (typeof exports !== 'undefined') {
	chai = require('chai');
}

describe('Example Test', function() {
  it('simple test', function() {
    chai.expect(1).to.equal(1);
    sleepFor(100);
  });
});


function sleepFor(sleepDuration) {
	var now = new Date().getTime();
	while (new Date().getTime() < now + sleepDuration)
		;
}
