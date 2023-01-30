import prisma from "../database/database.js";

async function getManyMoviesAndMusic(){
    return prisma.moviesandmusic.findMany();
}

export { getManyMoviesAndMusic };