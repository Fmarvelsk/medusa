import {
  Flag,
  Home,
  Layers,
  Search,
  Settings,
  Users,
  ChartNoAxesColumn,
  LogOutIcon,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import logo from "@/assets/logomark.svg";
import userAvatar from "@/assets/userAvatar.png";
import { Input } from "@/components/ui/input";
import newFeature from "@/assets/new-feature.svg";
import playSvg from "@/assets/playButton.svg"
import { NavHeader } from "../ui/header";

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Dashboard",
    url: "#",
    icon: ChartNoAxesColumn,
  },
  {
    title: "Project",
    url: "#",
    icon: Layers,
  },
  {
    title: "Task",
    url: "#",
    icon: Search,
  },
  {
    title: "Reporting",
    url: "#",
    icon: Flag,
  },

  {
    title: "User",
    url: "#",
    icon: Users,
  },

  {
    title: "Support",
    url: "#",
    icon: Flag,
  },

  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <div>
    <NavHeader/>
 
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <img src={logo} className="w-8 h-8" alt="logo-mark" />
            <h3 className="text-[#101828] text-lg">Untitled UI</h3>
          </SidebarGroupLabel>

          <Input className="input-search" />

          <SidebarGroupContent className="my-5">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton size="lg" asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu className="gap-4 p-2">
          <SidebarMenuItem className="bg-[#F9FAFB] flex flex-col gap-3 p-2 !text-[14px]">
            <p className="text-[#101828] font-medium">
              New features available!
            </p>
            <p className="text-[#667085]">
              Check out the new dashboard view. Pages now load faster.
            </p>
            
            <div className="relative">
            <img src={newFeature} className="rounded-md" alt="what is new" />

            <img src={playSvg} className="absolute left-5 bottom-2.5" alt="play" />
            </div>

            <div className="flex gap-4">
              <span className="text-[#667085]"> Dismiss</span>
              <span className="text-[#6941C6]">What's New ?</span>
            </div>

          </SidebarMenuItem>
          <hr/>
          <SidebarMenuItem className="flex !text-[14px] gap-3">
            <img src={userAvatar} className="w-10 h-10" alt="avatar" />
            <div>
              <p>Olivia Rhye</p>
              <p className="text-[#667085]">olivia@untitledui.com</p>
            </div>
            <LogOutIcon/>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
    </div>
  );
}
