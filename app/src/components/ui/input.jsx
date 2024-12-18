import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

const Checkbox = React.forwardRef(
  ({ className = "", title = "Name", hasIcon, ...props }, ref) => {
    return (
      <label className="flex gap-2 items-center custom-checkbox cursor-pointer select-none">
        <input
          type="checkbox"
          className={cn("rounded-[6px] cursor-pointer border border-[#D0D5DD]")}
          ref={ref}
          {...props}
        />
        <span className="checkmark cursor-pointer"></span>

        <span className={cn("font-medium", className)}>{title}</span>

        {hasIcon && (
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 1.33334V10.6667M6 10.6667L10.6667 6M6 10.6667L1.33333 6"
              stroke="#667085"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </label>
    );
  }
);

Input.displayName = "Input";

Checkbox.displayName = "Checkbox";

export { Input, Checkbox };
