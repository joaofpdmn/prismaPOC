import prisma from "../database/database.js";
import { MovieEntity } from "../schemas/movies.schemas.js";

async function getManyMovies(){
    return prisma.movies.findMany()
}

async function getManyMoviesByRating(){
    return prisma.albums.findMany({
        orderBy :[
            {
                rating: 'desc',
            }
        ]
    });
}

async function insertMovie(movie: MovieEntity){
    return prisma.movies.create({
        data: movie,
    });
}

async function updateMovie(movie: MovieEntity){
    return prisma.movies.upsert({
        where: {
            id: movie.id || 0,
        },
        create: movie,
        update: movie,
    });
}

async function deleteMovie(id: number){
    return prisma.movies.delete({
        where: {
          id: id,
        },
      });
}

export { getManyMovies, getManyMoviesByRating, insertMovie, updateMovie, deleteMovie };