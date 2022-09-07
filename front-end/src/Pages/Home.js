// import { useState } from "react";
// import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../Providers/UserProvider";
import { signOut } from "../Services/Firebase";
import Button from "react-bootstrap/Button";

const Home = () => {
  const user = useContext(UserContext);
  // const [request, setRequest] = useState("");
  // const [response, setResponse] = useState([]);

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     try{
  //         axios.get(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_GAME_API_KEY}`)
  //         .then(res => setResponse(res.data.results))
  //         .catch(err => console.error(err))
  //     }catch(err){
  //         return err;
  //     };
  // };

  return (
    <div className="home">
      <h1>Welcome to GameTracker!</h1>
      {user ? (
        <h3 className="popup-header">
          Hello, {user.displayName}! <br /> You are now logged in! <br />
          <Button onClick={signOut}>Log Out</Button>
        </h3>
      ) : null}
      <div className="home-cards">
        <section className="float-card">
          <h1>Game Collection</h1>
          <p>Add games you want to play and keep track of your progress!</p>
        </section>
        <section className="float-card">
          <h1>Completionist</h1>
          <p>Check your stats and see how you rank as a Completionist!</p>
        </section>
        <section className="float-card">
          <h1>Rate Your Favorites</h1>
          <p>
            Keep track of your favorite games and give them an honest rating!
          </p>
        </section>
      </div>
        {/* <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search" id="search-bar" name="search" value={request} onChange={(e) => setRequest(e.target.value)}/>
                <input type="submit" value="Get Games" />
                </form>
              {response.map(game => game.name)} */}
    </div>
  );
};

export default Home;
