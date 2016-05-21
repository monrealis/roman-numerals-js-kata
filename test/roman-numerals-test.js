'use strict'
var test = require('tape');

test('Roman Numerals Converter',  function(t) {
  var tests = [
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
  
  tests.forEach(function(test) {
    var arabic = test[0];
    var roman = test[1];

    t.test(function(t2) {
    	t2.plan(1);
    	t2.equal(toRoman(arabic), roman)
    });
 

  });

});

function toRoman(number) {

  var RULES = [ 
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
    var times = Math.floor(number / arabic);
    number -= arabic * times; 
    return repeat(roman, times);
  }
  
  function repeat(string, times) {
    var repeated = '';
    for (var i = 0; i < times; ++i)
        repeated += string;
    return repeated;
  }

  return RULES.map(function(rule) {
    var roman = rule[0];
    var arabic = rule[1];
    return applyRule(roman, arabic)
  }).join('');
}


