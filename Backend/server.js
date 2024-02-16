import express from "express";
const dotenv = "dotenv";
import path from "path";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import { configDotenv } from "dotenv";
import connectToMongoDb from "./db/connectToMongoDb.js";
import {app,server} from './socket/socket.js'

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();
configDotenv();

app.use(express.json());// to parse the incoming requests with json payloads (from req.body)
app.use(cookieParser())

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*",(req,res)=>{
  res.sendFile(path.join(__dirname,"frontend","dist","index.html"))

})

server.listen(PORT, () => {
  connectToMongoDb();
  console.log(`server running on port ${PORT}`);
});
