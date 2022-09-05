import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const API = process.env.REACT_APP_API_URL;

const GameDetails = () => {
  const [game, setGame] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/games/${id}`)
      .then((res) => setGame(res.data.payload))
      .catch((err) => console.error(err));
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`${API}/games/${id}`)
      .then(() => {
        navigate(`/games`);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="game-details">
      <Card className="card">
      <Card.Img className="cover-photo" variant="top" src={game.image} />
        <Card.Body>
          <Card.Title>
            {game.is_favorite ? <img className="heart" src="https://bestanimations.com/media/hearts/1230084119pixel-heart-pink-animated-gif.gif" alt="heart-gif" />  : null}
            {game.name}
          </Card.Title>
          <Card.Text>
            {game.description}
            <br />
            <br />
            <span>Console:</span> {game.console}
            <br />
            <br />
            <span>Progress:</span>  {game.progress}
            <br />
            <br />
            <span>Rating:</span>  {game.rating}
            <br />
          </Card.Text>
          <Link to={"/games"}>
            <Button variant="dark">Back</Button>
          </Link>
          <Link to={`/games/${id}/edit`}>
            <Button variant="dark">Edit</Button>
          </Link>
          <Button variant="dark" onClick={handleDelete}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default GameDetails;
