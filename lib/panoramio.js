/**
 * Define the API
 */

var Photos = require('./photos'),

Panoramio = function Panoramio() {

};

Panoramio.prototype._configure = function() {
  this.photos = new Photos();
};

module.exports = Panoramio;
