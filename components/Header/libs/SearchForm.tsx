import { FC, HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLFormElement>;

export const SearchForm: FC<Props> = () => {
  return (
    <form>
      <label className="relative text-gray-400 focus-within:text-gray-600 transition-all">
        {/* Search icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 absolute top-[2.5px] left-3 pointer-events-none"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
        {/* ------------ */}
        <input
          className="outline-none min-w-[600px] border border-gray-300 mr-8 py-2 pl-10 pr-4 focus:border-gray-500 transition-all"
          type="search"
          placeholder="Search for recipes, ingredients and tags..."
        />
      </label>
    </form>
  );
};
