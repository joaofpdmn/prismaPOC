-- CreateTable
CREATE TABLE "albums" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "artist" VARCHAR(100) NOT NULL,
    "rating" DECIMAL NOT NULL,
    "critic" TEXT,

    CONSTRAINT "albums_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movies" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "artist" VARCHAR(100) NOT NULL,
    "rating" DECIMAL NOT NULL,
    "critic" TEXT,

    CONSTRAINT "movies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "moviesandmusic" (
    "id" SERIAL NOT NULL,
    "moviesid" INTEGER NOT NULL,
    "albums" INTEGER NOT NULL,

    CONSTRAINT "moviesandmusic_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "moviesandmusic" ADD CONSTRAINT "moviesandmusic_albums_fkey" FOREIGN KEY ("albums") REFERENCES "albums"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "moviesandmusic" ADD CONSTRAINT "moviesandmusic_moviesid_fkey" FOREIGN KEY ("moviesid") REFERENCES "movies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
