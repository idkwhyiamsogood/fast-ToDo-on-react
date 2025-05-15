import { useState, type FormEvent } from "react";
import { useTodos } from "./hooks/useTodos";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

export const App = () => {
  const [inputValue, setInputValue] = useState("");
  const { todos, addTodo, deleteTodo, toggleTodo } = useTodos();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="">
      <div className="flex flex-col justify-center items-center min-h-screen max-h-screen gap-[8px] py-[15px]!">
        <h1 className="text-4xl">Todo list</h1>

        <TodoList 
          todos={todos}
          onDelete={deleteTodo}
          onToggle={toggleTodo}
        />
        <TodoForm 
          value={inputValue}
          onChange={setInputValue}
          onSubmit={handleSubmit}/>
      </div>
    </div>
  );
};
