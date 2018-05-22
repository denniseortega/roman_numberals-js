import { toRomans } from './../src/roman-numerals.js';

describe('toRomans', function(){

  it('should convert number to roman numeral', function() {
    var Roman = new toRomans(1)
    expect(Roman.checkType(1)).toEqual("I");
  });

});
