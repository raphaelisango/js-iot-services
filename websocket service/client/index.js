let http = require("http");
let fs = require("fs");
var url = require("url");

let handleRequest = (request, response) => {
  response.writeHead(200, {
    "Content-Type": "text/html",
  });

  if (request.url == "/index.html" || request.url == "/") {
    fs.readFile("./index.html", null, function (error, data) {
      if (error) {
        response.writeHead(404);
        respone.write("Whoops! File not found!");
      } else {
        response.write(data);
      }
      response.end();
    });
  } else {
    fs.readFile("./index2.html", null, function (error, data) {
      if (error) {
        response.writeHead(404);
        respone.write("Whoops! File not found!");
      } else {
        response.write(data);
      }
      response.end();
    });
  }
};

http.createServer(handleRequest).listen(8000);

console.log("listening..... on Port 8000");
