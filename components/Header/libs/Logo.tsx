import { FC, HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

export const Logo: FC<Props> = () => {
  return (
    <div className="bg-secondary w-[260px] flex items-center">
      <div className="ml-6">
        <h1 className="text-[24px] font-bold text-white">
          Cook<span className="text-primary">verse</span>
        </h1>
        <p className="text-blue-100">Place for home cooks.</p>
      </div>
    </div>
  );
};
