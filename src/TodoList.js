import Todo from "./Todo";
import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";

import Divider from "@material-ui/core/Divider";

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  // console.log(props);
  if (todos.length) {
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <React.Fragment key={todo.id}>
              <Todo
                key={todo.id}
                id={todo.id}
                task={todo.task}
                completed={todo.completed}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
              />
              {/* {console.log(i)} */}
              {i < todos.length - 1 && <Divider />}
            </React.Fragment>
          ))}
          {/* {console.log(todos.length)} */}
        </List>
      </Paper>
    );
  }
  return null;
}

export default TodoList;
