import type { Component } from "solid-js";
import { ToDo } from "../interfaces/ToDo";
import { store } from "../store"

const ToDoListItem: Component = ({todo}) => {

    const [state, setState] = store;
    const save = (todo:ToDo, { target: { value } }) => {
        const title = value.trim();
        if (state.editingTodoId === todo.id && title) {
            saveEditTodo({...todo, title });
            setState({editingTodoId:null});
        }
    }
    const saveEditTodo = (todo:ToDo) => setState("todos", (item) => item.id === todo.id, todo);
    const removeTodo = (todo:ToDo) => setState("todos", (t) => t.filter((item) => item.id !== todo.id));
    const doneEditing = (todo:ToDo, e:KeyboardEvent) => {
        if (e.key === 'Enter') save(todo, e);
        else if (e.key === 'Escape') setEditing(todo);
    };
    const setEditing = (todo) => setState("editingTodoId", todo.id);
    const toggle = (todo:ToDo, { target: { checked } }) => saveEditTodo({ ...todo, completed: checked });

    return (
    <div class="todo-list-item">
        <Show when={state.editingTodoId !== todo.id}>
            <label
                onDblClick={[setEditing, todo]}>
                <input 
                    class="toggle" 
                    type="checkbox" 
                    checked={todo.completed} 
                    onInput={[toggle, todo]}
                />
                <span>{todo.title}</span>
            </label>
            <button 
                class="remove" 
                onClick={[removeTodo, todo]} >
                x
            </button>
        </Show>
        <Show when={state.editingTodoId === todo.id}>
            <input
                class="edit"
                value={todo.title}
                onFocusOut={[save, todo]}
                onKeyUp={[doneEditing, todo]}
            />
        </Show>
    </div>
    );
};

export default ToDoListItem;
