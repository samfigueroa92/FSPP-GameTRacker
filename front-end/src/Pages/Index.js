import Games from "../Components/Games";
import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const Index = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/games`)
      .then((res) => setGames(res.data.payload))
      .catch((err) => console.error(err));
  }, []);

  const getStats = () => {
    const progressArr = games.map((game) => game.progress);
    const counts = { maxNum: progressArr.length };

    for (let progress of progressArr) {
      if (progress === "Currently Playing") {
        progress = "CurrentlyPlaying";
      } else if (progress === "In Progress") {
        progress = "InProgress";
      }
      counts[progress] = counts[progress] ? counts[progress] + 1 : 1;
    }

    return counts;
  };

  const gameStats = getStats();
  const completedStat = Math.floor(
    (gameStats.Completed / gameStats.maxNum) * 100
  );
  const playingStat = Math.floor(
    (gameStats.CurrentlyPlaying / gameStats.maxNum) * 100
  );
  const inProgressStat = Math.floor(
    (gameStats.InProgress / gameStats.maxNum) * 100
  );
  const backloggedStat = Math.floor(
    (gameStats.Backlogged / gameStats.maxNum) * 100
  );
  const abandonedStat = Math.floor(
    (gameStats.Abandoned / gameStats.maxNum) * 100
  );

  return (
    <div className="index">
      <h1>My Collection</h1>
      <section className="stats">
        <div>Games Completed: {completedStat}%</div>
        <div>Games Currently Playing: {playingStat}%</div>
        <div>Games In Progress: {inProgressStat}%</div>
        <div>Games Backlogged: {backloggedStat}%</div>
        <div>Games Abandoned: {abandonedStat}%</div>
      </section>
      <Games games={games} />
    </div>
  );
};

export default Index;
