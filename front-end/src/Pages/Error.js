import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <section>
        <h1>ERROR</h1>
        <img
          src="https://giffiles.alphacoders.com/147/14702.gif"
          alt="game-over"
        />
        <br />
        <Link to="/">
          <Button>Go Home</Button>
        </Link>
      </section>
    </div>
  );
};

export default Error;
