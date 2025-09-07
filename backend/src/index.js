//const express = require("express"); //it is common js type which is set bydefault
import express from "express"; // it is module  type by adding  "type":"module" in package.json ...
  // ..by setting up this you can no longer import express by defining const express = require("express");
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import path from "path";

import {connectDB} from "./lib/db.js";

import authRoutes from "./routes/auth.route.js";   
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

dotenv.config()

const PORT = process.env.PORT;
const __dirname = path.resolve();

// Increase limit to 10MB to handle large base64 images in chat messages
app.use(express.json({ limit: '10mb' }));
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

server.listen(PORT, () => {
    console.log("server is runnimg on port : "+ PORT);
    connectDB();

});