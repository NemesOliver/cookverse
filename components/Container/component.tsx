import { FC } from "react";
import { Props } from "./props";

export const Container: FC<Props> = ({ children }) => {
  return <div className="max-w-[1440px] mx-auto">{children}</div>;
};
