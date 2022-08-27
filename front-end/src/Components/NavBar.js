import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <div className="NavBar">
      <Navbar className="color-nav" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <img src="https://cdn-icons-png.flaticon.com/512/5260/5260498.png" />
            </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/games" className="nav-link">My Games</Nav.Link>
            <Nav.Link href="/games/new">Add New Game</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
