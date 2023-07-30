"use client";
import React, { ChangeEvent, SetStateAction } from "react";
import { Todo } from "../page";

const TodoList = ({
  todos,
  setTodos,
}: {
  todos: Todo[];
  setTodos: (value: SetStateAction<Todo[]>) => void;
}) => {
  const handleToggleEdit = (id: string) => {
    // idが一致しなかったらそのまま返す
    const updateTodos: Todo[] = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isEditing: !todo.isEditing };
      } else {
        return todo;
      }
    });
    setTodos(updateTodos);
  };

  const handleEdit = (id: string, e: ChangeEvent<HTMLInputElement>) => {
    const updateTodos: Todo[] = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, name: e.target.value };
      } else {
        return todo;
      }
    });
    setTodos(updateTodos);
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex justify-between mx-1 my-2 px-4 items-center border-l-4 border-blue-400 rounded shadow-sm"
          >
            {todo.isEditing ? (
              <input
                type="text"
                value={todo.name}
                onChange={(e) => handleEdit(todo.id, e)}
                className="px-3 py-2 bg-white border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
              />
            ) : (
              <li>{todo.name}</li>
            )}

            <div>
              <button
                onClick={() => handleToggleEdit(todo.id)}
                className="px-2 py-1 m-1 text-blue-400 border border-blue-500 font-semibold rounded  hover:bg-blue-100 hover:scale-95 duration-200"
              >
                edit
              </button>
              <button
                onClick={() => setTodos(todos.filter((v) => v.id !== todo.id))}
                className="px-2 py-1 m-1 text-red-400 border border-red-500 font-semibold rounded hover:bg-red-100 hover:scale-95 duration-200"
              >
                delete
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
