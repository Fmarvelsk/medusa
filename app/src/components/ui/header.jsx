import { cn } from "@/lib/utils";
import logo from "@/assets/logomark.svg";
import { Menu } from "lucide-react";
import { useSidebar } from "./sidebar";

const Header = ({ rootClassName = "", className = "", title, text }) => {
  return (
    <div>
      <header
        className={cn(
          "text-[#101828] leading-[38px] text-[30px] mb-2",
          rootClassName
        )}
      >
        {title}
      </header>
      <p className={cn("text-[#667085] text-[16px] leading-6", className)}>
        {text}
      </p>
    </div>
  );
};

const NavHeader = () => {
  const { setOpenMobile } = useSidebar();

  return (
    <header className="lg:hidden border-b bg-white bg-white border-gray-200 border-opacity-70 border-solid z-10 fixed top-0 left-0 right-0 flex h-14 items-center justify-between px-5">
      <div className="flex gap-2">
        <img src={logo} className="w-8 h-8" alt="logo-mark" />
        <h3 className="text-[#101828] text-lg">Untitled UI</h3>
      </div>
      <Menu onClick={setOpenMobile} />
    </header>
  );
};

export { Header, NavHeader };
