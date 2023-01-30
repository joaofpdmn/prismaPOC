import { Router } from "express";
import { deleteUniqueAlbum, getAllAlbums, getAllAlbumsByRating, insertUniqueAlbum, updateUniqueAlbum } from "../controllers/albums.controller.js";

const albumsRouter = Router();

albumsRouter.get('/albums', getAllAlbums);
albumsRouter.get('/albumsbyrating', getAllAlbumsByRating);
albumsRouter.post('/albums', insertUniqueAlbum);
albumsRouter.post('/updatealbum', updateUniqueAlbum);
albumsRouter.delete('/albums', deleteUniqueAlbum);


export { albumsRouter };