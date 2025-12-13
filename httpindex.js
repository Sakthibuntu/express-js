const http = require("http");

const PORT = 3000;

const server = http.createServer(function listener(request, response) {
  if (request.url == "home") {
    response.end("Welcome to the Home Page");
  }
  console.log("Request received");
});
server.listen(PORT, function exec() {
  console.log(`Server is running on port ${PORT}`);
});
