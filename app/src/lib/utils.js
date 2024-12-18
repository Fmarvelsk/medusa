import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function mapClassName(selectedRole, role) {
  return selectedRole === role.id
    ? {
        rootClassName: "border border-[#D6BBFB] bg-[#F9F5FF]",
        className: "text-[#53389E]",
        lastActiveClassName: "text-[#7F56D9]",
        footerClassName: "text-[#9E77ED]"
      }
    : {
        rootClassName: "border border-[#EAECF0]",
        className: "text-[#344054]",
        lastActiveClassName: "text-[#70798C]",
        footerClassName: "text-[#667085]"
      };
}
