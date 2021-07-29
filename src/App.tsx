import type { Component } from "solid-js";

import styles from "./App.module.css";
import ToDoList from "./components/ToDoList";
import AppHeader from "./components/AppHeader";

const App: Component = () => {
  return (
    <div class={styles.App}>
        <AppHeader  />
        <div class={styles.container}>
          <ToDoList />
        </div>
    </div>
  );
};

export default App;
