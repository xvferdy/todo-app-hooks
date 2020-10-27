//this hooks used in other hooks (useTodoState), in real world it's like storing in database based on key / table name
import { useState, useEffect } from "react";

function useLocalStorageState(key, defaultVal) {
  //make piece of state based off value in localstorage (or default)
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    } catch (e) {
      val = defaultVal;
    }
    return val;
  });

  //use useEffect to update localstorage when state change
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state), [state]);
  });

  return [state, setState];
}

export default useLocalStorageState;
