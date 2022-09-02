import Game from "../Components/Game";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const Games = ({ games }) => {
  const [sort, setSort] = useState(false);
  const gamesCopied = [...games];

  const getStats = () => {
    const progressArr = games.map(game => game.progress);
    const counts = { maxNum: progressArr.length };
   
    for(let progress of progressArr){
        if(progress === "Currently Playing"){
            progress = "CurrentlyPlaying"
        }else if(progress === "In Progress"){
            progress = "InProgress"
        };
        counts[progress] = counts[progress] ?  counts[progress] + 1 : 1;
    };

    return counts;
  };

  const gameStats = getStats();
  const completedStat = Math.floor(gameStats.Completed / gameStats.maxNum * 100);
  const playingStat = Math.floor(gameStats.CurrentlyPlaying / gameStats.maxNum * 100);
  const inProgressStat = Math.floor(gameStats.InProgress/ gameStats.maxNum * 100);
  const backloggedStat = Math.floor(gameStats.Backlogged / gameStats.maxNum * 100);
  const abandonedStat = Math.floor(gameStats.Abandoned / gameStats.maxNum * 100);

  return (
    <div className="games">
      <section className="stats">
        <div>Games Completed: {completedStat}%</div>
        <div>Games Currently Playing: {playingStat}%</div>
        <div>Games In Progress: {inProgressStat}%</div>
        <div>Games Backlogged: {backloggedStat}%</div>
        <div>Games Abandoned: {abandonedStat}%</div>
      </section>
      <Button variant="dark" onClick={() => setSort(!sort)}>
        Sort Alphabetically
      </Button>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Game</th>
              <th>Console</th>
              <th>Progress</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {sort
              ? gamesCopied
                  .sort((a, b) =>
                    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
                  )
                  .map((game) => (
                    <Game key={game.id} game={game} id={game.id} />
                  ))
              : gamesCopied.map((game) => <Game key={game.id} game={game} />)}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Games;
