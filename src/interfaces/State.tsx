import { ToDo } from "./ToDo";

export interface State {
    todos: ToDo[];
    editingTodoId: number | null;
}