// React
import React from "react";
import styled from "@emotion/styled";
// Components & Hooks
import TodoApp from "./TodoApp";
import Login from "./Login";
import { StitchAuthProvider, useStitchAuth } from "./StitchAuth";
import { Button } from "reactstrap";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

App.propTypes = {};
export default function App() {
  return (
    <StitchAuthProvider>
      <AppUI />
    </StitchAuthProvider>
  );
}

AppUI.propTypes = {};
function AppUI() {
  const {
    isLoggedIn,
    actions: { handleLogout },
  } = useStitchAuth();
  return (
    
    <div className="app-container">
      <div className="navbar-container">

      <Navbar className="navbar" bg="light" variant="light">
        <Navbar.Brand href="#home">To-Do</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form> */}
        {isLoggedIn && <Button onClick={handleLogout}>Logout</Button>}
      </Navbar>
        <div className='logout-btn'>
          
          </div>
        </div>
       {isLoggedIn ? <TodoApp /> : <Login />}
    </div>
  );
}

const Layout = styled.div`
  display: flex;
  
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  * {
    font-family: sans-serif;
  }
`;
// const Navbar = styled.div`
//   display: flex;
//   justify-content: space-between;
//   flex-direction: row-reverse;
//   align-items: center;
//   width: 100%;
//   height: 62px;
//   padding: 10px;
//   background: #5e9668;
// `;