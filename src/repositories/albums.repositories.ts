import prisma from "../database/database.js";
import { AlbumEntity } from "../schemas/albums.schemas.js";

async function getManyAlbums(){
    return prisma.albums.findMany();
}

async function getManyAlbumsByRating(){
    return prisma.albums.findMany({
        orderBy :[
            {
                rating: 'desc',
            }
        ]
    });
}

async function insertAlbum(album: AlbumEntity){
    return prisma.albums.create({
        data: album,
    });
}

async function updateAlbum(album: AlbumEntity){
    return prisma.albums.upsert({
        where: {
            id: album.id || 0,
        },
        create: album,
        update: album,
    });
}

async function deleteAlbum(id: number){
    return prisma.albums.delete({
        where: {
          id: id,
        },
      });
}

export { getManyAlbums, getManyAlbumsByRating, insertAlbum, updateAlbum, deleteAlbum };