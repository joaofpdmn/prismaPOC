import { Request, Response } from "express";
import { deleteMovie, getManyMovies, getManyMoviesByRating, insertMovie, updateMovie } from "../repositories/movies.repositories.js";

async function getAllMovies(req: Request, res: Response) {
    const result = await getManyMovies();
    return res.send(result);
}

async function getAllMoviesByRating (req: Request, res: Response){
    const result = await getManyMoviesByRating();
    return res.send(result);
}

async function insertUniqueMovie(req: Request, res: Response){
    const result = await insertMovie(req.body);
    return res.status(201).send(result);
}

async function updateUniqueMovie(req: Request, res: Response){
    const result = await updateMovie(req.body);
    return res.status(201).send(result);
}

async function deleteUniqueMovie(req: Request, res: Response){
    const result = await deleteMovie(req.body.id);
    return res.status(204).send(result);
}

export { getAllMovies, getAllMoviesByRating, insertUniqueMovie, updateUniqueMovie, deleteUniqueMovie };