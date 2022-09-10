const express = require("express");
const games = express.Router();

const { 
    getAllGames, 
    getGame, 
    createGame, 
    updateGame, 
    deleteGame 
} = require("../queries/games")

games.get("/", async (req, res) => {
    const allGames = await getAllGames();
    if (allGames[0]) {
      res.status(200).json({payload: allGames, success: true});
    } else {
      res.status(500).json({ error: "Server error!" });
    };
  });
  
  games.get("/:id", async (req, res) => {
    const { id } = req.params;
    const game = await getGame(id);
    if (game.id) {
      res.json({payload: game, success: true});
    } else {
      res.status(404).json({ error: "Game not found." });
    };
  });
  
  games.post("/", async (req, res) => {
    try {
      const game = await createGame(req.body);
      if(game.id){
        res.status(200).json({success: true, payload: game})
      }else{
        res.status(422).json({success: false, payload: "Couldn't create game"})
      }
    } catch (error) {
      return error;
    };
  });
  
  games.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedGame = await deleteGame(id);
    if (deletedGame.id) {
      res.status(200).json({payload: deletedGame, success: true});
    } else {
      res.status(404).json("Game not found.");
    };
  });
  
  games.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedGame = await updateGame(req.body, id);
    if (updatedGame.id) {
      res.status(200).json({payload: updatedGame, success: true});
    } else {
      res.status(404).json({success: false, payload: "Game not updated."});
    }
  })
  
  module.exports = games;