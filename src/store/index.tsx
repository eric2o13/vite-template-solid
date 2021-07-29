import { ToDo } from "../interfaces/ToDo";
import { State } from "../interfaces/State";
import { createStore } from "solid-js/store";

const toDoList:ToDo[] = [];
const editing:number | null = null;
const state:State = {
    todos: toDoList,
    editingTodoId: editing
}
export const store = createStore(state);
