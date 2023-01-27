import { Router } from "express";
import { getAllAlbums } from "../controllers/albums.controller.js";

const albumsRouter = Router();

albumsRouter.get('/albums', getAllAlbums);

export { albumsRouter };