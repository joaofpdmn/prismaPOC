import prisma from "../database/database.js";

async function getManyAlbums(){
    return prisma.albums.findMany();
}

export { getManyAlbums };