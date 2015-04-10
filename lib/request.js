/**
 * Request data from the API
 */

var http = require('http'),
  querystring = require('querystring'),
  Request = function Request() {
    this._configure();
  };

Request.prototype._configure = function() {
  this.baseUrl = 'http://www.panoramio.com/map/';
};

Request.prototype.executeRequest = function(method, parameters, callback) {
  if (parameters === undefined) {
    parameters = {};
  }

  var request = this.baseUrl + method + '?' + querystring.stringify(parameters);

  console.log(request);

  http.get(request,
    function(res) {
      var chunks = '';
      res.on('data', function(resultData) {
        chunks += resultData;
      });
      res.on('end', function() {
        var body = JSON.parse(chunks);

        if (body.error) {
          callback({
            message: body.error,
            code: body.status
          }, null);
        } else {
          callback(null, body);
        }
      });
    }
  ).on('error', function(error) {
    callback(error);
  });
};

module.exports = Request;
