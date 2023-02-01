import React, { ReactElement } from "react";

interface Props {
  title?: string;
  icon?: React.ReactNode;
}

function Button({ title, icon }: Props) {
  return (
    <button className="bg-button p-2 px-3 rounded-lg">
      {title ? title : icon}
    </button>
  );
}

export default Button;
