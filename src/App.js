import React from "react";
import LawmakerList from "./LawmakerList/LawmakerList";
import Header from "./Header/Header";
import { Route } from "react-router-dom";
import LawmakerDetails from "./LawmakerDetails/LawmakerDetails";

function App() {
  return (
    <div>
      <Header />
      <Route exact path="/" render={() => <LawmakerList/>} />
      <Route exact path="/deputado/detalhes/:id" render={props => <LawmakerDetails {...props} />} />
    </div>
  );
}

export default App;
