/**
 * @file hiproxy plugin routes
 * @author zdying
 */

'use strict';

var fs = require('fs');
var path = require('path');
var getMimeType = require('simple-mime')('text/plain');

module.exports = [
  {
    route: '/dashboard',
    render: function (route, request, response) {
      sendFile(path.join(__dirname, '..', 'dashboard.html'), response);
    }
  },
  {
    route: '/dashboard/static/',
    render: function (route, request, response) {
      var filePath = path.join(__dirname, route.replace('/dashboard/static/', '/../'));
      sendFile(filePath, response);
    }
  }
];

function sendFile (file, res) {
  var mime = getMimeType(file);
  var statusCode = 200;
  var error = null;
  var stream = null;

  try {
    stream = fs.createReadStream(file);
  } catch (err) {
    statusCode = 500;
  }

  res.writeHead(statusCode, {
    'Content-Type': mime,
    'Powder-By': 'hiproxy-plugin-dashboard'
  });

  if (stream) {
    stream.pipe(res);
  } else {
    res.end(error.stack || error.message || error);
  }
}
