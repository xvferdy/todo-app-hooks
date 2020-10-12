import React, { useState } from "react";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
// import useTodoState from "./hooks/useTodoState";

import { v4 as uuidv4 } from "uuid";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function TodoApp() {
  const initialTodos = [
    { id: 1, task: "makan", completed: true },
    { id: 2, task: "minum", completed: true },
    { id: 3, task: "game", completed: false },
  ];

  const [todos, setTodos] = useState(initialTodos);
  // console.log(todos);

  //adding new todo, from todo form
  const addTodo = (newTodoText) => {
    //ingat todos berupa array
    setTodos([...todos, { id: uuidv4(), task: newTodoText, complete: false }]);
  };

  const removeTodo = (todoId) => {
    //filter out remove todo
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);

    //call setTodos with new todos array
    setTodos(updatedTodos);
  };

  //toggle checkbox
  const toggleTodo = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(updatedTodos);
  };

  //edit todo form, toggle
  const editTodo = (todoId, newTask) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, task: newTask } : todo
    );

    setTodos(updatedTodos);
  };

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
          {/* {console.log(todos)} */}
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
