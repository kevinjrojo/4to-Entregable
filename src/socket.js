import { Server as SocketIoServer } from "socket.io";

const configureSockets = (server) => {
  const io = new SocketIoServer(server);

  io.on("connection", (socket) => {
    console.log("Usuario conectado");

    socket.on("joinRoom", (room) => {
      socket.join(room);
      console.log(`Usuario se unió a la sala: ${room}`);
    });

    socket.on("leaveRoom", (room) => {
      socket.leave(room);
      console.log(`Usuario abandonó la sala: ${room}`);
    });

    socket.on("disconnect", () => {
      console.log("Usuario desconectado");
    });
  });

  return io;
};

export { configureSockets };
