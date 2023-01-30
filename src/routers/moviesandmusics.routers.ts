import { Router } from "express";
import { getAllMoviesAndMusic } from "../controllers/moviesandmusics.controllers.js";
const moviesAndMusicRouter = Router();

moviesAndMusicRouter.get('/combos', getAllMoviesAndMusic);

export { moviesAndMusicRouter };