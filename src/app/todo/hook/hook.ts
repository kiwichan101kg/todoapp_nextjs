"use client";
import { deleteTodo, editTodo } from "@/app/api";
import { Todo } from "@/app/types";
import { ChangeEvent, useEffect, useRef, useState } from "react";

export const useTodoEdit = (todo: Todo) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [input, setInput] = useState<string>(todo.name);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // 編集中の時に自動でinputにフォーカスを当てる
    if (isEditing) {
      ref.current?.focus();
    }
  }, [isEditing]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleEdit = async () => {
    setIsEditing(true);
  };
  const handleSave = async () => {
    await editTodo(todo.id, input);
    setIsEditing(false);
  };

  const handleDelete = async () => {
    await deleteTodo(todo.id);
  };

  return {
    handleChange,
    handleEdit,
    handleSave,
    handleDelete,
    isEditing,
    input,
    ref,
  };
};
