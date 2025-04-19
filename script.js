
const addTodoInput = document.querySelector("[data-add-todo-input]");
const addTodoBtn = document.querySelector("[data-add-todo-btn]");

let todoList = localStorage.getItem("todos") || [];

addTodoBtn.addEventListener("click", () => {
    if (addTodoInput.value.trim()) {
        const newTodo = {
            id: Date.now(),
            text: addTodoInput.value.trim(),
            completed: false,
            createdAt: new Date(),
        }
        todoList.push(newTodo);
        localStorage.setItem("todos", JSON.stringify(newTodo));
    }
})


