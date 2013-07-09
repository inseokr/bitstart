var express = require('express');

var app = express.createServer(express.logger());

var fs = require("fs");

var fileName = "index.html"

var sendResponse = function (response) {
   fs.readFile(fileName, "utf8", function(error, data)
   {
      response.send(data);
   });
};

app.get('/', function(request, response) {
   sendResponse(response);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
