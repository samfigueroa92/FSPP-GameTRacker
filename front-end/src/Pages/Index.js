import Games from "../Components/Games";
import { useState, useEffect} from "react";
import axios from "axios";


const API = process.env.REACT_APP_API_URL;

const Index = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        axios.get(`${API}/games`)
        .then(res => setGames(res.data.payload))
        .catch(err => console.error(err))
    }, []);

    return (
        <div className="index">
            <h1>My Collection</h1>
            <Games games={games} />
        </div>
    );
};

export default Index;