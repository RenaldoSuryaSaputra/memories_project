import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import dbConfig from "./config/dbConfig.js";
import postRoutes from './routes/posts.js';

const PORT = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

try {
   dbConfig();
   app.listen(PORT, () => {
      console.log(`Server Running on Port: http://localhost:${PORT}`);
   });
} catch (error) {
   console.log(`${error} didn't connect to server`);
}

// mongoose.set("useFindAndModify", false);
