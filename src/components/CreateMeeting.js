import React, { useState, useEffect } from "react";
import Navbar from "./NavBar";
import { makeStyles } from "@material-ui/core";
import { Jumbotron, Container } from "react-bootstrap";
import { Button, TextField } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "",
    borderRadius: "2%",
    marginLeft: "50px",
    marginRight: "50px",
  },
  input: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
export default function CreateMeeting() {
  const classes = useStyles();
  const [roomId, setRoomId] = useState("");

  let web = "http://localhost:3000/room/";

  useEffect((roomId) => {
    axios.get("/createRoomId").then(function (response) {
      setRoomId(response.data.data.roomid);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className={classes.root}>
        <Jumbotron fluid>
          <Container>
            <h1>Your Meeting Is Created 😅 </h1>
            <p>Copy and Send the link below to your participants.</p>
            <div className={classes.input}>
              <TextField
                id="standard-basic"
                label="Standard"
                value={web + roomId}
              />
            </div>
            <br></br>
            <Button color="primary" variant="outlined" href={`/room/${roomId}`}>
              {" "}
              Join
            </Button>{" "}
          </Container>
        </Jumbotron>
      </div>
    </div>
  );
}
