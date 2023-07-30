import { Todo } from "@/app/types";
import { useTodoEdit } from "../hook/hook";

const Todo = ({ todo }: { todo: Todo }) => {
  const {
    handleChange,
    handleEdit,
    handleSave,
    handleDelete,
    isEditing,
    input,
    ref,
  } = useTodoEdit(todo);

  return (
    <div
      key={todo.id}
      className="flex justify-between mx-1 my-2 px-4 items-center border-l-4 border-blue-400 rounded shadow-sm"
    >
      {isEditing ? (
        <input
          ref={ref}
          type="text"
          value={input}
          onChange={handleChange}
          className="px-3 py-2 bg-white border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
        />
      ) : (
        <li>{todo.name}</li>
      )}

      <div>
        {isEditing ? (
          <button
            onClick={handleSave}
            className="px-2 py-1 m-1 text-green-400 border border-green-500 font-semibold rounded  hover:bg-green-100 hover:scale-95 duration-200"
          >
            save
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="px-2 py-1 m-1 text-blue-400 border border-blue-500 font-semibold rounded  hover:bg-blue-100 hover:scale-95 duration-200"
          >
            edit
          </button>
        )}
        <button
          onClick={handleDelete}
          disabled={isEditing}
          className={`px-2 py-1 m-1 border font-semibold rounded ${
            isEditing
              ? " bg-gray-300  border-gray-400 text-white"
              : " text-red-400  border-red-500  hover:bg-red-100 hover:scale-95 duration-200"
          }`}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
