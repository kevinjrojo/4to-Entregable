import express from "express";
import http from "http";
import configureHandlebars from "./utils";
import realtimeProductsRouter from "./routes/realTimeProducts";
import { configureSockets } from "./socket";
import { configurePaths } from "./utils";

const app = express();
const server = http.createServer(app);

// Configura Handlebars
configureHandlebars(app);

// Rutas y otras configuraciones
app.use(express.json());

// Rutas para productos en tiempo real
app.use("/realtime/products", realtimeProductsRouter);

// Configura las rutas de archivos estáticos
configurePaths(app);

// Configura los sockets y obtén la instancia de io
const io = configureSockets(server);
