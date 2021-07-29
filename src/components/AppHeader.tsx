import type { Component } from "solid-js";
import { ToDo } from "../interfaces/ToDo";
import { store } from "../store";

const AppHeader: Component = () => {
    const [state] = store;
    return (
        <div class="header">
            Todo: { state.todos.filter((todo:ToDo) => !todo.completed).length}
        </div>
    )
}

export default AppHeader;