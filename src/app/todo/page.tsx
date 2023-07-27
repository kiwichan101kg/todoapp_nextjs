"use client";
import { useState } from "react";

type Todo = {
  id: string;
  name: string;
};

export default function Page() {
  const initialState: Todo[] = [
    {
      id: "1",
      name: "買い物",
    },
    {
      id: "2",
      name: "洗濯",
    },
  ];
  const [todos, setTodos] = useState<Todo[]>(initialState);
  return (
    <>
      <div className="w-3/12  flex flex-col text-center">
        <h1>Nextjs 13 Todo App</h1>
        <label className="block">
          <input
            type="text"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          />
        </label>
        <button className="w-full bg-sky-500 hover:bg-sky-700 rounded-md px-3 py-2 mt-3 text-white">
          Add Task
        </button>
        <div>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>{todo.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
