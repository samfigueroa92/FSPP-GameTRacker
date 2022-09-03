//STYLING
import './App.css';

//DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//PROVIDERS
import { UserProvider } from "./Providers/UserProvider";

//COMPONENTS
import NavBar from "./Components/NavBar";

//PAGES
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./Pages/New";
import Edit from "./Pages/Edit";
import Error from "./Pages/Error";
import Footer from './Pages/Footer';
import LoginPage from "./Pages/LoginPage";

const App = () => {
  return (
    <div className="App">
      <UserProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/games" element={ <Index /> } />
          <Route path="/games/new" element={ <New /> } />
          <Route path="/games/login" element={ <LoginPage /> } />
          <Route path="/games/:id" element={ <Show /> } />
          <Route path="/games/:id/edit" element={ <Edit /> } />
          <Route path="*" element={ <Error /> } />
        </Routes>
        <Footer />
      </Router>
      </UserProvider>
    </div>
  );
}

export default App;
