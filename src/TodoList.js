import Todo from "./Todo";
import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";

import Divider from "@material-ui/core/Divider";

function TodoList({ todos, removeTodo, toggleTodo }) {
  // console.log(props);
  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <React.Fragment key={todo.id}>
            <Todo
              key={todo.id}
              id={todo.id}
              task={todo.task}
              completed={todo.completed}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
            />
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
