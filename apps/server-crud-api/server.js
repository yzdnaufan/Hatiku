import express from "express";
const app = express();

import mongoose from "mongoose";
import cors from "cors";
import {} from "dotenv/config";
import userRoutes from "./routes/records.js"

const dbo = mongoose.connection;
// get driver connection
mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
dbo.on('error', (error)=> console.error('Error: '+error));
dbo.once('open', () => console.log('Database connected...'));

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(userRoutes);


app.listen(port, () => console.log('Server is up and running in port: '+port));