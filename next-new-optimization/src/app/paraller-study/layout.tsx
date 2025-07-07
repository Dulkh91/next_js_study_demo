import { ReactNode } from "react";

const LayoutPareller = ({
  children,
  team,
  analize
}: {
  children: ReactNode;
  team: ReactNode;
  analize: ReactNode
}) => {
  return (
    <div>
      <div>{children}</div>
      <div className="flex gap-5">
        <div>{team}</div>
        <div>{analize}</div>
      </div>
    </div>
  );
};

export default LayoutPareller;
