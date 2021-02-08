import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyles from "../src/GlobalStyles";
import Container from "../src/components/Container";
import Header from "../src/components/Header";
import Game from "../src/components/Game";
import GameOver from "../src/components/GameOver";
import HighScores from "../src/components/HighScores";
import Home from "../src/components/Home";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Container>
        <Switch>
          <Route path="/game" component={Game} />
          <Route path="/game" component={HighScores} />
          <Route path="/game" component={GameOver} />
          <Route path="/game" component={Home} />
        </Switch>
        game
      </Container>
    </Router>
  );
}

export default App;
