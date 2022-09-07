import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

const API = process.env.REACT_APP_API_URL;

const EditGameForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [game, setGame] = useState({
    name: "",
    console: "",
    progress: "",
    rating: "",
    is_favorite: false,
    image: "",
  });

  useEffect(() => {
    axios
      .get(`${API}/games/${id}`)
      .then((res) => setGame(res.data.payload))
      .catch((err) => console.error(err));
  }, [id]);

  const updateGame = (updatedGame, id) => {
    axios
      .put(`${API}/games/${id}`, updatedGame)
      .then(() => navigate(`/games/${id}`))
      .catch((err) => console.error(err));
  };

  const handleInput = (e) => {
    setGame({ ...game, [e.target.id]: e.target.value });
  };

  const handleCheckbox = (e) => {
    setGame({ ...game, is_favorite: !game.is_favorite });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateGame(game, id);
  };

  return (
    <div className="edit-form">
      <h1>Edit Your Game</h1>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              id="name"
              value={game.name}
              onChange={handleInput}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Console:</Form.Label>
            <Form.Control
              id="console"
              value={game.console}
              type="text"
              onChange={handleInput}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Progress:</Form.Label>
            <Form.Control
              as="select"
              id="progress"
              value={game.progress}
              onChange={handleInput}
            >
              <option>--Select an option--</option>
              <option>In Progress</option>
              <option>Currently Playing</option>
              <option>Completed</option>
              <option>Abandoned</option>
              <option>Backlogged</option>
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image URL:</Form.Label>
            <Form.Control
              id="image"
              value={game.image}
              type="text"
              onChange={handleInput}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Rating:</Form.Label>
            <Form.Control
              type="number"
              id="rating"
              value={game.rating}
              onChange={handleInput}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Favorite"
              id="is_favorite"
              value={game.is_favorite}
              onChange={handleCheckbox}
            />
          </Form.Group>

          <Button variant="light" type="submit">
            Submit
          </Button>

          <Link to="/">
            <Button variant="light" type="submit">
              Go Back
            </Button>
          </Link>
        </Form>
      </Container>
    </div>
  );
};

export default EditGameForm;
