import { Router } from "express";
import { deleteUniqueMovie, getAllMovies, getAllMoviesByRating, insertUniqueMovie, updateUniqueMovie } from "../controllers/movies.controllers.js";

const moviesRouter = Router();

moviesRouter.get('/movies', getAllMovies);
moviesRouter.get('/moviesbyrating', getAllMoviesByRating);
moviesRouter.post('/movies', insertUniqueMovie);
moviesRouter.post('/updatemovie', updateUniqueMovie);
moviesRouter.delete('/movies', deleteUniqueMovie);


export { moviesRouter };