var expect = require('chai').expect;


describe('random-normal', function () {

  var randomNormal = require('../../');

  it('common', function () {

    var count = 100;
    while (count--) {

      expect(randomNormal()).to.be.a('number');
      expect(randomNormal({ mean: 100 })).to.be.a('number');
      expect(randomNormal({ mean: 100, dev: 15 })).to.be.a('number');
      expect(randomNormal({
        pool: [1, 2]
      })).to.be.a('number');
    }
  });

});
