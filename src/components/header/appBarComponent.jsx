import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
const AppBarComponent = ({ props }) => {
  return (
    <AppBar
      position="sticky"
      style={{
        background: "#e1b382",
      }}
    >
      <Toolbar>
        <Typography style={{ flexGrow: 1 }}>
          <Button
            style={{ color: "#ffffff" }}
            onClick={() => {
              props.history.push("/");
            }}
          >
            MUSHROOM PROJECT
          </Button>
        </Typography>
        <Button style={{ color: "#ffffff" }}>HISTORY</Button>
        <Button
          style={{ color: "#ffffff" }}
          onClick={() => {
            props.history.push("/login");
          }}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
