import React, { FC, HTMLAttributes } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
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
    url: "/discover",
  },
  {
    name: "Temperature guide",
    icon: <TemperatureIcon />,
    url: "/temperatures",
  },
  {
    name: "Protein guide",
    icon: <MeatIcon />,
    url: "/protein",
  },
];

export const NavLinks: FC<Props> = () => {
  const router = useRouter();

  return (
    <ul className="ml-6 pt-4">
      {navLinks.map((link) => (
        <li
          key={link.name}
          className={`font-medium text-gray-700 w-full py-1 cursor-pointer hover:text-green-600 ${
            link.url === router.pathname
              ? "text-green-600 border-r-4 border-r-green-700"
              : ""
          } hover:scale-105 transition-all`}
        >
          <Link href={link.url}>
            <a className="flex items-center">
              {link.icon}
              <span className="ml-2">{link.name}</span>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
