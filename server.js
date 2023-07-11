import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import multer from 'multer';


import connectDb from './dbConnect/db.js';
dotenv.config({ path: "./config.env" });
import user from './routes/userRoutes.js'
import data from './routes/dataRoutes.js'
import bodyParser from 'body-parser'


const app = express()
const port = 8080;

app.use(express.json());

app.use(cors());

const url = "mongodb://127.0.0.1:27017";
connectDb(url);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));



app.use('/users', user)
app.use('/data', data)

app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`)

})
