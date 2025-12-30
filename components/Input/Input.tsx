import React, { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: ReactNode;
  inputClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ label, error, icon, className = "", inputClassName = "", ...props }, ref) => {
  return (
    <div className={`flex flex-col w-full bg-[#F5F5F5] ${className}`}>
      {label && <label className="mb-1 text-sm font-medium">{label}</label>}
      <div className="relative w-full">
        {icon && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">{icon}</span>}
        <input
          ref={ref}
          className={`w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500
              ${inputClassName}
              ${icon ? "pl-10" : ""} 
              ${error ? "border-red-500" : "border-gray-300"} 
              disabled:opacity-50 disabled:cursor-not-allowed`}
          {...props}
        />
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
});

export default React.memo(Input);
