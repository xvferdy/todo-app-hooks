import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default (initialTodos) => {
  // const initialTodos = [
  //   { id: 1, task: "makan", completed: true },
  //   { id: 2, task: "minum", completed: true },
  //   { id: 3, task: "game", completed: false },
  // ];

  const [todos, setTodos] = useState(initialTodos);
  // console.log(todos);

  return {
    todos,

    //adding new todo, from todo form
    addTodo: (newTodoText) => {
      //ingat todos berupa array
      setTodos([
        ...todos,
        { id: uuidv4(), task: newTodoText, complete: false }, //A component is changing an uncontrolled input of type....
      ]);
    },

    removeTodo: (todoId) => {
      //filter out remove todo
      const updatedTodos = todos.filter((todo) => todo.id !== todoId);

      //call setTodos with new todos array
      setTodos(updatedTodos);
    },

    //toggle checkbox
    toggleTodo: (todoId) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );

      setTodos(updatedTodos);
    },

    //edit todo form, toggle
    editTodo: (todoId, newTask) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === todoId ? { ...todo, task: newTask } : todo
      );

      setTodos(updatedTodos);
    },
  };
};
