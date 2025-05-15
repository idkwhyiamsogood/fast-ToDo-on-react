import type { FormEvent } from "react";

type Props = {
    value: string;
    onChange: (value: string) => void;
    onSubmit: (e: FormEvent) => void;
}

export const TodoForm = ({ value, onChange, onSubmit}: Props) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-row items-center w-auto gap-[5px]"
    >
      <div className="w-full">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Type here..."
          className="bg-transparent px-3! py-2! placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md 
            transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-transparent px-3! py-2! placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 
          rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
      >
        Add todo
      </button>
    </form>
  );
};

