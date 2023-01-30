import { Request, Response } from "express";
import { deleteAlbum, getManyAlbums, getManyAlbumsByRating, insertAlbum, updateAlbum } from "../repositories/albums.repositories.js";

async function getAllAlbums(req: Request, res: Response) {
    const result = await getManyAlbums();
    return res.send(result);
}

async function getAllAlbumsByRating (req: Request, res: Response){
    const result = await getManyAlbumsByRating();
    return res.send(result);
}

async function insertUniqueAlbum(req: Request, res: Response){
    const result = await insertAlbum(req.body);
    return res.status(201).send(result);
}

async function updateUniqueAlbum(req: Request, res: Response){
    const result = await updateAlbum(req.body);
    return res.status(201).send(result);
}

async function deleteUniqueAlbum(req: Request, res: Response){
    const result = await deleteAlbum(req.body.id);
    return res.status(204).send(result);
}

export { getAllAlbums, getAllAlbumsByRating, insertUniqueAlbum, updateUniqueAlbum, deleteUniqueAlbum };