/**
 * Getting photos
 */

var Request = require('./request'),
  Photos = function Photos () {
    this._request = new Request();
  };

Photos.prototype.getPopular = function(parameters, callback) {

  if (!parameters) {
    parameters = {};
  }

  parameters.set = 'public';

  this._request.executeRequest('get_panoramas.php', parameters, callback);
};

module.exports = Photos;
