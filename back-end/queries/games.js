const db = require("../db/dbConfig.js");

const getAllGames = async () => {
  try {
    const allGames = await db.any("SELECT * FROM games");
    return allGames;
  } catch (err) {
    return err;
  }
};

const getGame = async (id) => {
  try {
    const oneGame = await db.one("SELECT * FROM games WHERE id=$1", id);
    return oneGame;
  } catch (error) {
    return error;
  }
};

const createGame = async (game) => {
  const { name, console, progress, description, image, rating, is_favorite } = game;
  try {
    const newGame = await db.one(
      "INSERT INTO games (name, console, progress, description, image, rating, is_favorite) VALUES ($1, $2, $3, $4, $5, $5, $6, $7) RETURNING *",
      [name, console, progress, description, image, rating, is_favorite]
    );
    return newGame;
  } catch (error) {
    return error;
  }
};

const deleteGame = async (id) => {
  try {
    const deletedGame = await db.one("DELETE FROM games WHERE id = $1 RETURNING *", id);
    return deletedGame;
  } catch (err) {
    return err;
  }
};

const updateGame = async (game, id) => {
  const { name, console, progress, description, image, rating, is_favorite } = game;
  try { 
    const updatedGame = await db.one("UPDATE games SET name=$1, console=$2, progress=$3, description=$4, image=$5, rating=$6, is_favorite=$7 WHERE id=$8 RETURNING *",
    [name, console, progress, description, image, rating, is_favorite, id]);
    return updatedGame;
  } catch (err) {
    return err;
  };
};

module.exports = { 
  getAllGames, 
  getGame, 
  createGame, 
  deleteGame,
  updateGame
};