import { FC, HTMLAttributes } from "react";
import { SearchIcon } from "../../icons";

type Props = HTMLAttributes<HTMLFormElement>;

export const SearchForm: FC<Props> = () => {
  return (
    <form>
      <label className="relative text-gray-400 focus-within:text-gray-600 transition-all">
        <SearchIcon className="absolute top-1 left-3 pointer-events-none" />
        <input
          className="outline-none min-w-[600px] border border-gray-300 mr-8 py-2 pl-10 pr-4 focus:border-gray-500 transition-all"
          type="search"
          placeholder="Search for recipes, ingredients and tags..."
        />
      </label>
    </form>
  );
};
