import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { signInWithGoogle } from "../Services/Firebase";
import { UserContext } from "../Providers/UserProvider";

export const Login = () => {
    const user = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
      if (user) {
        navigate("/");
      }
    }, [user, navigate]);

  return (
    <div className="login">
      <Card className="login-card">
      <Card.Img className="google" variant="top" src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" />
        <Card.Body>
          <Card.Title>Log in with your Google account</Card.Title>
          <Button variant="dark" onClick={signInWithGoogle}>Log In</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
