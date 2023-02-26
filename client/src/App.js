import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import CreateVideogame from "./components/CreateVideogame/CreateVideogame";
import DetailVideogame from "./components/DetailVideogame/DetailVideogame";
import About from './components/About/About';




function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/' component = {LandingPage}>
        </Route>
        <Route exact path='/home' component={Home}>
        </Route>
        <Route exact path='/create' component={CreateVideogame}>
        </Route>
        <Route exact path='/about' component={About}>
        </Route>
        <Route exact path='/videogame/:id' component={DetailVideogame}>
        </Route>
        <Route exact path='' component={LandingPage}>
        </Route>

      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;