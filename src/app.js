import express from "express";
import http from "http";
import configureHandlebars from "./utils";
import realtimeProductsRouter from "./routes/realTimeProducts";
import { configureSockets } from "./socket";
import { configurePaths } from "./utils";

const app = express();
const server = http.createServer(app);

configureHandlebars(app);

app.use(express.json());

app.use("/realtime/products", realtimeProductsRouter);

configurePaths(app);

const io = configureSockets(server);
