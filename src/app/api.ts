import { Todo } from "./types";

export const getAllTodos = async (): Promise<Todo[]> => {
  // {cache:'no-store'}をつけるとSSRになる
  // {cache:'force-cache'}をつけるとSSG
  const res = await fetch("http://localhost:3001/tasks", {
    method: "GET",
    cache: "no-store",
  });
  return res.json();
};

export const addTodo = async (todo: Todo): Promise<Todo> => {
  const res = await fetch("http://localhost:3001/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
  const newTodo = res.json();
  return newTodo;
};

export const editTodo = async (id: string, newText: string): Promise<Todo> => {
  const res = await fetch(`http://localhost:3001/tasks/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: newText }),
  });
  const updatedTodo = res.json();
  return updatedTodo;
};

export const deleteTodo = async (id: string): Promise<Todo> => {
  const res = await fetch(`http://localhost:3001/tasks/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  const deleteTodo = res.json();
  return deleteTodo;
};
