// React
import React from "react";
import styled from "@emotion/styled";
import ErrorBoundary from "react-error-boundary";
// To-Do Components & Hooks
import TodoList from "./TodoList";
import TodoControls from "./TodoControls";
import { useStitchAuth } from "./StitchAuth";
import { useTodoItems } from "./useTodoItems";
import { Card, CardTitle } from "reactstrap";
import "./TodoApp.css";
import pic1 from './pic1.jpg';
import color from './color.jpg';

TodoApp.propTypes = {};
export default function TodoApp() {
  const { currentUser } = useStitchAuth();
  const todo = useTodoItems(currentUser.id);
  // const { items, hasHadTodos, actions } = useTodoItems(currentUser.id);
  return (
    <ErrorBoundary>
      <div className="todo-container">
        
          <div className="sidebar">

          </div>
          <div className="card-container">
            <TodoControls {...todo} />
            <TodoList {...todo} />
          </div>

          <div className="img-container">
            {/* <img className="penguin-img" src={color} alt="penguin img"></img> */}
          </div>


      </div>
    </ErrorBoundary>
  );
}
// const Layout = styled.div`
//   padding: 20px;
//   height: 100%;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `; 
// const TodoCard = styled(Card)` //div="card-container"
//   background-color: #4B0082;
//   max-width: 600px;
//   align-items: center;
//   width: 100%;
// `;
