import express from "express";
import { config } from "dotenv";
import { engine } from "express-handlebars";
import * as path from "path";
import { __dirname } from "./utils.js";
import pagesRouter from "./routes/pagesRoutes.js";

config();
const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//View Engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname + "/views"));

//Static Files
app.use("/", express.static(__dirname + "/public"));

//Routes
app.use("/", pagesRouter);

//Create Server
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
