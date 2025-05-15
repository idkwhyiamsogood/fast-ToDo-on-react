import { MdDelete } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import type { Todo } from "../types/todo";

type Props = {
  todo: Todo;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

export const TodoCard = ({ todo, onDelete, onToggle }: Props) => {
    return (
      <div
        className="flex flex-row justify-between py-[8px]! px-[16px]! w-[425px] text-lg placeholder:text-slate-400 text-slate-700 border 
        border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
      >
        <p>{todo.text}</p>
        <div className="flex gap-[5px]">
          <button onClick={() => onToggle(todo.id)}>
            <IoMdCheckmark size={30}/>
          </button>
          <button onClick={() => onDelete(todo.id)}>
            <MdDelete size={30} />
          </button>
        </div>
      </div>
    );
  };