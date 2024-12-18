import { cn } from "@/lib/utils";
import React from "react";
import { Check } from "lucide-react";

const icon = { Active: <Check className="w-4" /> };

const Status = React.forwardRef(({ type = "", ...props }, ref) => {
  const className =
    type === "Active"
      ? "border border-[#ECFDF3] bg-[#ECFDF3] text-[#027A48] flex gap-0.5 items-center"
      : "bg-[#F2994A] text-[#F2F2F2]";
  return (
    <div
      ref={ref}
      className={cn(
        "text-center rounded-[16px] text-[12px] px-2 w-max leading-5 font-medium",
        className
      )}
      {...props}
    >
      {icon[type] || null} {type}
    </div>
  );
});

export { Status };
