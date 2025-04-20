
const TODOS_KEY = "todos";

export const saveTodosIntoLocalStorage = (todos) => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

export const getTodosIntoLocalStorage = () => {
    return JSON.parse(localStorage.getItem(TODOS_KEY)) || [];
}

