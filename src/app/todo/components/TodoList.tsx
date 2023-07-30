"use client";
import { Todo as TodoType } from "@/app/types";
import React, { ChangeEvent, SetStateAction, useState } from "react";
import Todo from "./Todo";

const TodoList = ({ todos }: { todos: TodoType[] }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
