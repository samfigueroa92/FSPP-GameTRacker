import Game from "../Components/Game";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const Games = ({ games }) => {
  const [sort, setSort] = useState(false);
  const gamesCopied = [...games];

  return (
    <div className="games">
      <Button variant="dark" onClick={() => setSort(!sort)}>
        Sort Alphabetically
      </Button>
      <Container>
        <Table striped bordered hover >
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
