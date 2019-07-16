import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header";
import Browse from "./Components/Browse";
import Artistspage from "./Components/Artistspage";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      	<div className="App">
        <Header />
			<Switch>
				<Route exact path="/" component={Browse}/>
				<Route exact path="/ArtistsPage/:id" component={Artistspage} />
			</Switch>
	    </div>
      </Router>
    );
  }
}

export default App;
