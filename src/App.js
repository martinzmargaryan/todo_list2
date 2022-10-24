import React from "react";
import { Container } from "@mui/material";
import TodoTItle from "./components/TodoTItle";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <Container maxWidth="sm">
      <TodoTItle />
      <TodoForm />
    </Container>
  );
}
export default App;
