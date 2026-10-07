import { WebSocketServer } from "ws";
import {db} from "@repo/db/db"

const wss = new WebSocketServer({
    port : 8080  
});

wss.on("connection" , async function(socket){
    try {
    const newUser = await db.user.create({
      data: {
        username: Math.random().toString(),
        password: Math.random().toString(),
      },
    });

    console.log("Created user in DB:", newUser);
    socket.send("Hi i am connected to ws server Welcome !");
  } catch (error) {
    console.error("Failed to create user in DB:", error);
    socket.send("Connected to WS, but database creation failed.");
  }
});