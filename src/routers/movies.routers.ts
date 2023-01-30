import { Router } from "express";
import { deleteUniqueMovie, getAllMovies, getAllMoviesByRating, insertUniqueMovie, updateUniqueMovie } from "../controllers/movies.controllers";

const albumsRouter = Router();

albumsRouter.get('/movies', getAllMovies);
albumsRouter.get('/moviesbyrating', getAllMoviesByRating);
albumsRouter.post('/movies', insertUniqueMovie);
albumsRouter.post('/updatemovie', updateUniqueMovie);
albumsRouter.delete('/movies', deleteUniqueMovie);


export { albumsRouter };