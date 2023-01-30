import { Request, Response } from "express";
import { getManyMoviesAndMusic } from "../repositories/moviesandmusics.repositories.js";

async function getAllMoviesAndMusic(req: Request, res: Response){
    const result = await getManyMoviesAndMusic();
    return res.status(200).send(result);
}

export { getAllMoviesAndMusic };