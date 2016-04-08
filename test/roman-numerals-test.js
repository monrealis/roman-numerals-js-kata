'use strict'
const expect = require('chai').expect;

describe('Roman Numerals Converter', () => {
  const tests = [
    [1, 'I'],
    [2, 'II'],
    [3, 'III'],
    [4, 'IV'],
    [5, 'V'],
    [6, 'VI'],
    [9, 'IX'],
    [10, 'X'],
    [16, 'XVI'],
    [20, 'XX'],
    [40, 'XL'],
    [50, 'L'],
    [90, 'XC'],
    [100, 'C'],
    [400, 'CD'],
    [500, 'D'],
    [900, 'CM'],
    [1000, 'M'],
    [0, ''],
    [2456, 'MMCDLVI']
  ];
  
  tests.forEach(test => {
    const arabic = test[0];
    const roman = test[1];

    it(`converts ${arabic} to ${roman}`, () => {
      expect(toRoman(arabic)).to.equal(roman);
    });
 

  });

});

function toRoman(number) {

  const RULES = [ 
    ['M', 1000], 
    ['CM', 900], 
    ['D', 500], 
    ['CD', 400], 
    ['C', 100], 
    ['XC', 90], 
    ['L', 50], 
    ['XL', 40], 
    ['X', 10], 
    ['IX', 9], 
    ['V', 5], 
    ['IV', 4], 
    ['I', 1] 
  ];

  function applyRule(roman, arabic) {
    const times = Math.floor(number / arabic);
    number -= arabic * times; 
    return roman.repeat(times);
  }

  return RULES.map(rule => {
    const roman = rule[0];
    const arabic = rule[1];
    return applyRule(roman, arabic)
  }).join('');
}


