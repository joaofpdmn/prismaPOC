import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { albumsRouter } from './routers/albums.routers.js';
import { moviesRouter } from './routers/movies.routers.js';

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

app.get('/health', (req, res) => {
    res.send('ok');
});

app.use(albumsRouter);
app.use(moviesRouter);

app.listen(process.env.PORT, () => {
    console.log("Ouvindo em porta 4000");
});