CREATE TABLE IF NOT EXISTS movies(
    id SERIAL PRIMARY KEY,
    title varchar(255),
    releasedate varchar(255),
    path varchar(225),
    overview varchar(225)
);