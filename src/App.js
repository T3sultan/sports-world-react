import logo from './logo.svg';
import './App.css';
import AllTeams from './components/AllTeams/AllTeams';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import DetailsPage from './components/DetailsPage/DetailsPage';
import Sports from './components/Sports/Sports';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NotPageFound from './components/NotPageFound/NotPageFound';
import { createContext, useState } from 'react';
export const userContext = createContext();
function App() {
  const [user, setUser] = useState({
    name:"React Native Developer",
    job:"Professional RN Dev"
  });
  return (
    <div className="App">
      <userContext.Provider value={[user,setUser]}>

        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/sports">
              <Sports></Sports>
            </Route>
            <Route exact path="/about">
              <About></About>

            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="/details/:idTeam">
              <DetailsPage></DetailsPage>
            </Route>
            <Route exact path="*">
              <NotPageFound></NotPageFound>
            </Route>
          </Switch>
        </Router>
      </userContext.Provider>
    </div>
  );
}

export default App;
