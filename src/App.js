import React from "react";

import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Room from "./components/Room";
import FirstPage from "./components/FirstPage";
import CreateMeeting from "./components/CreateMeeting";
import { Paper } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Paper style={{ width: "100%" }}>
        <Router>
          <Route path="/room/:roomId" component={Room} />
          <Route
            path="/meeting/create-meeting"
            exact
            component={CreateMeeting}
          />
          <Route path="/" exact component={FirstPage} />
        </Router>
      </Paper>
    </div>
  );
}

export default App;
