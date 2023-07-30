"use client";
import { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

export type Todo = {
  id: string;
  name: string;
  isEditing: boolean;
};

export default function Page() {
  const initialState: Todo[] = [
    {
      id: "1",
      name: "買い物",
      isEditing: false,
    },
    {
      id: "2",
      name: "洗濯",
      isEditing: false,
    },
  ];
  const [todos, setTodos] = useState<Todo[]>(initialState);

  return (
    <main className="flex justify-center min-h-screen bg-gray-200">
      <div className="w-6/12 m-5  p-8  flex flex-col text-center  rounded-md bg-white">
        <h1 className="font-bold text-4xl text-gray-700">Nextjs 13 Todo App</h1>
        <AddTask todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </main>
  );
}
