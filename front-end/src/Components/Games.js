import { useState, useEffect} from "react";
import axios from "axios";
import Game from "../Components/Game";

const API = process.env.REACT_APP_API_URL;

const Games = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        axios.get(`${API}/games`)
        .then(res => setGames(res.data.payload))
        .catch(err => console.error(err))
    }, []);

    return (
        <div>
            <h1>Games</h1>
            {games.map(game => <Game key={game.id} game={game} />)}
        </div>
    );
};

export default Games;