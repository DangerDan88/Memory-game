import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyles from "../src/GlobalStyles";
import Container from "../src/components/Container";
import Header from "../src/components/Header";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Container>
        <Switch>
          {" "}
          <Route path="/game" component={Game} />
          <Route path="/game" component={HighScores} />
          <Route path="/game" component={GameOver} />
          <Route path="/game" component={Home} />{" "}
        </Switch>
        game
      </Container>
    </Router>
  );
}

export default App;
