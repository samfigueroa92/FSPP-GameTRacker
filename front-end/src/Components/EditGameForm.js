import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

const API = process.env.REACT_APP_API_URL;

const EditGameForm = () => {
    const [game, setGame] = useState({
        name: "",
        console: "",
        progress: "",
        rating: "",
        is_favorite: false,
    });

    const { id } = useParams();
    const navigate = useNavigate();

    // const updateGame = (updatedGame) => {

    // }


    return (
        <div className="edit">
            <h1>Edit Game</h1>
            <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="..."
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
              placeholder="..."
              onChange={handleInput}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Progress:</Form.Label>
            <Form.Control
              id="progress"
              value={game.progress}
              type="text"
              placeholder="..."
              onChange={handleInput}
              required
            />
          </Form.Group>

          {/* <Form.Group className="mb-3">
            <Form.Label>Progress:</Form.Label>
            <Form.Control
              as="select"
              placeholder="..."
              id="progress"
              value={game.progress}
              onChange={handleInput}
            >
              <option>--Select an option--</option>
              <option>In Progress</option>
              <option>Playing</option>
              <option>Completed</option>
              <option>Abandoned</option>
            </Form.Control>
          </Form.Group> */}

          <Form.Group className="mb-3">
            <Form.Label>Rating:</Form.Label>
            <Form.Control
              type="number"
              placeholder="0"
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