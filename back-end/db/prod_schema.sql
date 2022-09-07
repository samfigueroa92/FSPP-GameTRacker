DROP TABLE IF EXISTS games;

CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    console TEXT,
    progress TEXT,
    rating INTEGER,
    CHECK (rating >= 0 AND rating <= 5),
    is_favorite BOOLEAN,
    image TEXT
);
