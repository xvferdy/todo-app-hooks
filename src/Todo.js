import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
// import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import EditTodoForm from "./EditTodoForm";
import useToggleState from "./hooks/useToggleState";

function Todo({ id, task, completed, removeTodo, toggleTodo, editTodo }) {
  let todoStyle = {
    textDecoration: completed ? "line-through" : "none",
  };

  const [isEditing, toggle] = useToggleState(false);

  return (
    <ListItem>
      {isEditing ? (
        <EditTodoForm
          editTodo={editTodo}
          id={id}
          task={task}
          toggleEditForm={toggle}
        />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onClick={() => toggleTodo(id)}
          />
          <ListItemText style={todoStyle}>{task}</ListItemText>
          <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="edit" onClick={toggle}>
            <EditIcon />
          </IconButton>
        </>
      )}
    </ListItem>
  );
}

export default Todo;
