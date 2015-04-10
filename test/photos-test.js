/* global describe, it */

var should = require('should'),
  Photos = require('../lib/photos.js');

describe('Testing GET photos:', function() {
  var photos = new Photos();

  describe('#getPopular()', function() {
    it('should return a json with photos', function(done) {
      photos.getPopular(

        {
          'from': 0,
          'to': 100,
          'minx': -180,
          'maxx': 180,
          'maxy': 90,
          'miny': -90
        },

        function(err, result) {

        should.not.exist(err);
        should.exist(result);
        result.should.have.property('photos');

        done();
      });
    });
  });

});
