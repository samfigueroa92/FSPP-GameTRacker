import { useState, useEffect} from "react";
import axios from "axios";
import Game from "../Components/Game";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

const API = process.env.REACT_APP_API_URL;

const Games = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        axios.get(`${API}/games`)
        .then(res => setGames(res.data.payload))
        .catch(err => console.error(err))
    }, []);

    return (
        <div className="games">
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
                    {games.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).map(game => <Game key={game.id} game={game} id={game.id} />)}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default Games;