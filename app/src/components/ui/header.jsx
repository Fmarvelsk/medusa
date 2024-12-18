import { cn } from "@/lib/utils";

const Header = ({ rootClassName =  "", className = "", title, text }) => {
  return (
    <div>
      <header
        className={cn("text-[#101828] leading-[38px] text-[30px] mb-2", rootClassName)}
      >
        {title}
      </header>
      <p className={cn("text-[#667085] text-[16px] leading-6", className)}>
        {text}
      </p>
    </div>
  );
};

export { Header }