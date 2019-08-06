import React from "react";
import styled from "@emotion/styled";
import {app, logoutUser } from "./../stitch";
import { Button } from "reactstrap";
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar-container">
      <Button onClick={() => onLogout() }>Log Out</Button>
    </div>
  );
}

export default Navbar;

function onLogout() {
  logoutUser(app.auth.user).then(() =>{ window.location.reload() });
}
