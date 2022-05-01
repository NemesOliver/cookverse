import { HomeIcon, SearchIcon, TemperatureIcon, MeatIcon } from "../icons";
import { NavLinks } from "./libs";

export const Navigation = () => {
  return (
    <nav className="bg-blue-50 h-[calc(100vh-180px)] divide-y">
      <p className="font-bold tracking-wide text-gray-700 ml-6 my-4 antialiased">
        MENU
      </p>
      <NavLinks />
    </nav>
  );
};
