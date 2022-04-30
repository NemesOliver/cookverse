import { FC } from "react";
import { Props } from "./props";
import { Logo, SearchForm } from "./libs";

export const Header: FC<Props> = () => {
  return (
    <header className="flex h-[180px]  border-b border-r border-gray-300">
      <Logo />
      <div className="flex items-center justify-between w-full">
        <h2 className="text-[36px] font-bold text-secondary ml-8">
          Discover recipes
        </h2>
        <SearchForm />
      </div>
    </header>
  );
};
