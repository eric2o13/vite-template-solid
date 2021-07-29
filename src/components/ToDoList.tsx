import { Component, For, createEffect } from 'solid-js';
import ToDoListItem from "./ToDoListItem";
import { ToDo } from "../interfaces/ToDo";
import { store } from "../store"

const ToDoList: Component = () => {

    const [state, setState] = store;
    const addTodo = ({target, key}) => {
        if (!(key === 'Enter' && target.value)) {
            return;
        }
        const todo:ToDo = { 
            id: state.todos.length + 1,
            title: target.value,
            completed: false 
        }
        setState({todos: [...state.todos, todo]});
        target.value = '';
    }

    return (
    <section>
        <div>
            <h1>Todo list</h1>
            <input class="new-todo" 
            placeholder="Insert a new to do" 
            onKeyDown={addTodo} />
        </div>
        <ul>
            <For each={state.todos}>{(todo, i) =>
                <li classList={{ 
                    editing: state.editingTodoId === todo.id, 
                    completed: todo.completed }}>
                    <ToDoListItem todo={todo} />
                </li>
            }</For>
        </ul>
    </section>
    );
};

export default ToDoList;
