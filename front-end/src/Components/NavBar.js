import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">LOGO</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/games">My Games</Nav.Link>
            <Nav.Link href="/games/new">Add New Game</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
