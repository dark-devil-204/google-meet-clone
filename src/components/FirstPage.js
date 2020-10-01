import React, { useState } from "react";
import NavBar from "./NavBar";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Paper, Switch } from "@material-ui/core";

import BodyContainer from "./Container";

function FirstPage() {
  const [darkmode, setDarkMode] = useState(false);
  const theme = createMuiTheme({
    palette: {
      type: darkmode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "100%" }}>
        <NavBar />
        <BodyContainer />

        <Switch checked={darkmode} onChange={() => setDarkMode(!darkmode)} />
      </Paper>
    </ThemeProvider>
  );
}

export default FirstPage;
