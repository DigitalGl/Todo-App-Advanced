import { saveTodosIntoLocalStorage, getTodosIntoLocalStorage } from "./utils.js";

const addTodoInput = document.querySelector("[data-add-todo-input]");
const addTodoBtn = document.querySelector("[data-add-todo-btn]");
const todosContainer = document.querySelector("[data-todo-container]");
const todoTemplate = document.querySelector("[data-todo-template]");

let todoList = getTodosIntoLocalStorage();

addTodoBtn.addEventListener("click", () => {
    if (addTodoInput.value.trim()) {
        const newTodo = {
            id: Date.now(),
            text: addTodoInput.value.trim(),
            completed: false,
            createdAt: new Date(),
        }
        todoList.push(newTodo);
        addTodoInput.value = "";
        saveTodosIntoLocalStorage(todoList);
        rendersTodos();
    }
})

const createTodoLayout = (todo) => {
    const todoElement = document.importNode(todoTemplate.content, true);
    const checkBox = todoElement.querySelector("[data-todo-checkbox]");
    checkBox.checked = todo.completed;

    const todoText = todoElement.querySelector("[data-todo-text]");
    todoText.textContent = todo.text;

    const todoCreatedDate = todoElement.querySelector("[data-todo-date]");
    todoCreatedDate.textContent = todo.createdAt;

    const removeTodoBtn = todoElement.querySelector("[data-remove-todo-btn]");
    removeTodoBtn.disabled = !todo.completed;

    return todoElement;
}

const rendersTodos = () => {
    todosContainer.innerHTML = "";

    todoList.forEach((todo) => {
        const todoElement = createTodoLayout(todo);
        todosContainer.append(todoElement);
    })
}