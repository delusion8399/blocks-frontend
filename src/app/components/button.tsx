import React from "react";

export default function Button({
  name,
  onClick,
  variant,
  size,
}: {
  name: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: string;
  size?: string;
}) {
  return (
    <button
      className={`${
        size === "large"
          ? "px-8 py-3"
          : size === "small"
          ? "px-4 py-2"
          : "px-4 py-2"
      } border dark:text-white dark:bg-black`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
