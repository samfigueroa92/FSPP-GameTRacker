import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import Button from "react-bootstrap/Button";
// import { signOut } from "../Services/Firebase";

const NavBar = () => {
  return (
    <div className="NavBar">
      <Navbar className="nav" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5260/5260498.png"
              alt="game-controller"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/games" className="nav-link">
              My Games
            </Nav.Link>
            <Nav.Link href="/games/new">Add New Game</Nav.Link>
          </Nav>
          <Nav.Link href="/games/login">Log in</Nav.Link>
          {/* <Button onClick={() => signOut}>Log Out</Button>
          <Navbar.Text>
            Logged in as: {user.displayName}
            <Button>Log Out</Button>
          </Navbar.Text> */}
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
