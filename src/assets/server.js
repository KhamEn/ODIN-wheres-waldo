const http = require("http");
const PORT = 4000;
var { Timer } = require("easytimer.js");
const timer = new Timer();

const server = http.createServer((request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");

  switch (request.url.toLowerCase()) {
    case "/timer":
      sendTimeEverySecond(request, response);
      break;
    default:
      console.log("ERROR");
  }
});
server.listen(PORT, "localhost", () => {
  console.log("Listening on port 4000");
});

function sendTimeEverySecond(request, response) {
  response.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
  });

  timer.start();
  response.write(`data:${timer.getTimeValues().toString()}\n\n`);
  const timerInterval = setInterval(() => {
    response.write(`data:${timer.getTimeValues().toString()}\n\n`);
  }, 1000);

  request.on("close", () => {
    clearInterval(timerInterval);
    timer.stop();
    response.end();
  });
}
