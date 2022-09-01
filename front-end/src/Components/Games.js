import Game from "../Components/Game";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const Games = ({ games }) => {
  const [sort, setSort] = useState(false);
  const gamesCopied = [...games];

  const getStats = () => {
    const counts = {};
    const progressArr = games.map(game => game.progress);
    let maxNum = progressArr.length;
    for(let progress of progressArr){
        counts[progress] = counts[progress] ?  counts[progress] + 1 : 1;
    };



    return maxNum;
  }

  console.log(getStats())

  return (
    <div className="games">
      <section className="stats">
        <div>stats 1</div>
        <div>stats 2</div>
        <div>stats 3</div>
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
