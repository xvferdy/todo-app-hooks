import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
// import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

function Todo({ key, task, completed }) {
  let todoStyle = {
    textDecoration: completed ? "line-through" : "none",
  };
  return (
    <ListItem>
      <Checkbox tabIndex={-1} checked={completed} />
      <ListItemText style={todoStyle}>{task}</ListItemText>
      <IconButton aria-label="Delete">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="edit">
        <EditIcon />
      </IconButton>
    </ListItem>
  );
}

export default Todo;
