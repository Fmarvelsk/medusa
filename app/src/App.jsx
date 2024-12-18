import "./App.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/app-sidebar";
import Settings from "@/components/layout/setting";

function App() {
 
  return (
    <SidebarProvider>
      <AppSidebar />
      <Settings />
    </SidebarProvider>
  );
}

export default App;
