import { TodoCard } from "./TodoCard";
import type { Todo } from "../types/todo";

type Props = {
  todos: Todo[];
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

export const TodoList = ({ todos, onDelete, onToggle }: Props) => {
    return (
      <div className="flex flex-col overflow-auto max-h-screen gap-2.5">
        {todos.map((todo: Todo) => (
          <TodoCard 
            todo={todo}
            onDelete={onDelete}
            onToggle={onToggle} />
        ))}
      </div>
    );
  };