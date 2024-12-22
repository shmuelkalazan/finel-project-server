import express from "express";
import "dotenv/config";
import { connectToMongo } from "./config/db";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
// import { setupSocketIO } from "./socket/io";
import analysisRouter from "./routes/analysisRouter"
import relationshipsRouter from "./routes/relationshipsRouter"
// import { seedTerorEvents } from "./utils/enterSid";

const PORT = process.env.PORT || 3000;
const app = express();
// export const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: "*",
//     methods: "*",
//   },
// });

// setupSocketIO(io);
app.use(express.json());
app.use(cors());
// console.log("object")
connectToMongo();
// seedTerorEvents()


app.use("/api/analysis", analysisRouter);
app.use("/api/relationships", relationshipsRouter);

app.listen(PORT,() =>
  console.log(`listening on port http://localhost:${PORT}`)
);

// server.listen(PORT,() =>
//   console.log(`listening on port http://localhost:${PORT}`)
// );
