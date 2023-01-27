import { Request, Response } from "express";
import { getManyAlbums } from "../repositories/albums.repositories.js";

async function getAllAlbums(req: Request, res: Response) {
    const result = await getManyAlbums();
    return res.send(result);
}

export { getAllAlbums };