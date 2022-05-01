import React, { FC, HTMLAttributes } from "react";
import { HomeIcon, SearchIcon, TemperatureIcon, MeatIcon } from "../../icons";

type Props = HTMLAttributes<HTMLUListElement>;

const navLinks = [
  {
    name: "Home",
    icon: <HomeIcon />,
    url: "/",
  },
  {
    name: "Discover recipes",
    icon: <SearchIcon />,
  },
  {
    name: "Temperature guide",
    icon: <TemperatureIcon />,
  },
  {
    name: "Protein guide",
    icon: <MeatIcon />,
  },
];

/**
 * TODO
 * 1. Change color to default gray - DONE
 * 2. Add Hover effects - DONE
 * 3. Change active link to match current page <- Later!
 */

export const NavLinks: FC<Props> = () => {
  return (
    <ul className="ml-6 pt-4">
      {navLinks.map((link) => (
        <li
          key={link.name}
          className={`font-medium text-gray-700 w-full py-1 cursor-pointer hover:text-green-600 ${
            link.url === "/"
              ? "text-green-600 border-r-4 border-r-green-700"
              : ""
          } hover:scale-105 transition-all`}
        >
          <a className="flex items-center">
            {link.icon}
            <span className="ml-2">{link.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
