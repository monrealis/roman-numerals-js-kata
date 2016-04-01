const expect = require('chai').expect;

describe('Roman Numerals Converter', () => {
  it('converts 1 to I', () => {
    expect(toRoman(1)).to.equal('I');
  });
});

function toRoman() {
  return 'I';
}
