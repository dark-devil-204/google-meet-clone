import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Input from "./Input";
import { Button, makeStyles, Container, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    width: "20ch",
  },
  root: {
    display: "grid",
    placeItems: "center",
  },
}));

export default function BodyContainer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" className={classes.root}>
        <div className={classes.text}>
          <Typography variant="h5">
            Premium Quality Video Calling Using Meet Over
          </Typography>
          <Typography variant="h6">
            Hello World adildjhwidjhiejdihfiedsrhfcwjfdisehfeihcnscjadcjwoij
            jcijfiejfiejfc xivhjcdifjdjwed jewdwfjewof
          </Typography>
        </div>
        <Input />
        <Link to="/meeting/create-meeting">
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Create Meeting
          </Button>
        </Link>
      </Container>
    </React.Fragment>
  );
}
