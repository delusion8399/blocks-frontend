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
          ? "px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base"
          : size === "small"
          ? "px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm"
          : "px-4 py-2 text-sm sm:text-base"
      } border dark:text-white dark:bg-black hover:bg-black hover:text-white transition-colors rounded-lg w-full sm:w-auto`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
