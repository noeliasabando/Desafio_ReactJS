import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginContainer from "./domain/LoginContainer";
import ContainerLayout from "./domain/ContainerLayout";
import ContainerListTable from "./domain/ContainerListTable";
import ContainerFormUser from "./domain/ContainerFormUser";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginContainer />
          </Route>
          <Route exact path="/inicio">
            <ContainerLayout>
              <ContainerListTable />
            </ContainerLayout>
          </Route>
          <Route exact path="/formulario">
            <ContainerLayout>
              <ContainerFormUser />
            </ContainerLayout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
