import { FC } from "react";
import { Props } from "../props";

export const MeatIcon: FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      className={`w-4 h-4 ${className}`}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="m13.62 8.382l1.966-1.967A2 2 0 1 1 19 5a2 2 0 1 1-1.413 3.414l-1.82 1.821" />
        <ellipse
          cx="8.025"
          cy="16.475"
          rx="7"
          ry="3"
          transform="rotate(45 8.025 16.475)"
        />
        <path d="m7.5 16l1 1m4.475 4.425c3.905-3.906 4.855-9.288 2.121-12.021c-2.733-2.734-8.115-1.784-12.02 2.121" />
      </g>
    </svg>
  );
};
