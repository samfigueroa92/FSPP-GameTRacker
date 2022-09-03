// import { useState } from "react";
// import axios from "axios";
import {useContext} from "react";
import { UserContext } from "../Providers/UserProvider";
import { signOut } from "../Services/Firebase";

const Home = () => {
  const user = useContext(UserContext)
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
      {user ? <p>Hello, {user.displayName}! You are now logged in! <br/> <button onClick={signOut}>Log Out</button></p> : null}
      {/* <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search" id="search-bar" name="search" value={request} onChange={(e) => setRequest(e.target.value)}/>
                <input type="submit" value="Get Games" />
            </form>
            {response.map(game => game.name)} */}
    </div>
  );
};

export default Home;
