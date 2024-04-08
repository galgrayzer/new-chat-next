const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("message", (msg) => {
    socket.broadcast.emit("message", msg);
    socket.emit("message", msg);
  });
  socket.on("delete", (id) => {
    socket.broadcast.emit("delete", id);
    socket.emit("delete", id);
  });
});

server.listen(3001, () => {
  console.log("server is up and running!");
});
