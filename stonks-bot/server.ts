import express from "express";
import messageRouter from "./routes/messages";

const app = express();

app.use("/messages", messageRouter);

export default app;
