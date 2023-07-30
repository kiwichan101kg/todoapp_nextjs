"use client";
import { addTodo } from "@/app/api";
import { Todo } from "@/app/types";
import React, { ChangeEvent, FormEvent, SetStateAction, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddTask = ({ todos }: { todos: Todo[] }) => {
  const [input, setInput] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await addTodo({ id: uuidv4(), name: input, isEditing: false });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="block">
        <input
          type="text"
          value={input}
          className="mt-3 px-3 py-2 bg-white border shadow-sm border-slate-300 focus:outline-none focus:border-sky-400 block w-full rounded-md sm:text-sm focus:ring-1"
          onChange={(e) => handleChange(e)}
        />
      </label>
      <button className="w-full rounded-md px-3 py-2 my-3 text-white bg-sky-500  hover:bg-sky-700 hover:scale-95 duration-200  ">
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
