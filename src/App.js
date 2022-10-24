import { Container } from "@mui/material";
import React, { useState } from "react";

import TodoForm from "./components/TodoForm";
import Todolist from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const checkTodo = (id) => {
    console.log(id);
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) todo.isCompleted = !todo.isCompleted;
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (text) => {
    const newTodo = {
      id: Math.random(),
      title: text,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <Container maxWidth="sm">
      <TodoForm addTodo={addTodo} />
      <Todolist todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} />
    </Container>
  );
}

export default App;
