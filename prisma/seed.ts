import prisma from "../src/database/database.js";

async function main() {
    await prisma.albums.createMany({
        data: [
            {
                "name": "thick as a brick",
                "artist": "jethro tull",
                "rating": 10,
                "critic": "album incrivel"
            },
            {
                "name": "clara crocodilo",
                "artist": "arrigo barnabe",
                "rating": 10,
                "critic": "revolucionario"
            },
            {
                "name": "american don",
                "artist": "don caballero",
                "rating": 10,
                "critic": "math rock"
            }
        ]
    });
    await prisma.movies.createMany({
        data: [
            {
                "name": "taxi driver",
                "artist": "de niro",
                "rating": 10,
                "critic": "magnifico"
            },
            {
                "name": "kokodi kokoda",
                "artist": "johnatas nyholm",
                "rating": 10,
                "critic": "terror"
            }
        ]
    });
}

main()
    .then(() => {
        console.log("Registro feito!");
    })
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })