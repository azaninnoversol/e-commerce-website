import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
  rightIcon?: React.JSX.Element;
  leftIcon?: React.JSX.Element;
}

function Button({ children, className = "", rightIcon, leftIcon, isLoading, ...props }: ButtonProps) {
  return (
    <button
      className={`flex items-end justify-center gap-3 min-w-fit min-h-fit px-2 py-2 rounded-md cursor-pointer font-medium bg-gray-400 ${className}`}
      {...props}
    >
      {isLoading ? <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span> : leftIcon}
      <span>{children}</span>
      {isLoading ? <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span> : rightIcon}
    </button>
  );
}

export default React.memo(Button);
