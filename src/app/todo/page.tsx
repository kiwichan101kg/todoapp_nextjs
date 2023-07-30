import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import { Todo } from "../types";
import { getAllTodos } from "../api";

export default async function Page() {
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
  // const [todos, setTodos] = useState<Todo[]>(initialState);
  const res = await getAllTodos();
  console.log("response", res);

  return (
    <main className="flex justify-center min-h-screen bg-gray-200">
      <div className="w-6/12 m-5  p-8  flex flex-col text-center  rounded-md bg-white">
        <h1 className="font-bold text-4xl text-gray-700">Nextjs 13 Todo App</h1>
        <AddTask todos={res} />
        <TodoList todos={res} />
      </div>
    </main>
  );
}
