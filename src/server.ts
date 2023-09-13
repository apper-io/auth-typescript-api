import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
// import dotenv from 'dotenv';

import router from './router';
import mongoose from 'mongoose';

const app = express();
// const dotenvConfig = dotenv.config();

app.use(cors({
    credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);
// const MONGO_URL = process.env.MONGO_DB;

server.listen(8000, () => {
    console.log(`Server running on localhost:8000`);
});

mongoose.Promise = Promise;
mongoose.connect('mongodb+srv://mongodb:mongodb@cluster0.8zi6ubj.mongodb.net/?retryWrites=true&w=majority');
mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/', router());