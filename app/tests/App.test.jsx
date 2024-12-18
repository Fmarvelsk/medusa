import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { SidebarProvider } from "@/components/ui/sidebar"; // Import SidebarProvider
import { AppSidebar } from "@/components/layout/app-sidebar";
import { afterAll, beforeEach, vi } from "vitest";
import Settings from "@/components/layout/setting";


describe("AppSidebar Component", () => {
  beforeEach(() => {
    render(
      <SidebarProvider>
        <AppSidebar />
      </SidebarProvider>
    );
  })
  it("should render the sidebar with all menu items with there icons and navigation link", () => {
    const menuItems = ["Home", "Dashboard", "Project", "Task", "Reporting", "User", "Support", "Settings"];
    menuItems.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();

    expect(screen.getByText(item).closest("a")).toHaveAttribute("href", "#");
    });

    const icons = screen.getAllByRole("img");
    expect(icons.length).toBeGreaterThan(0);
  });

  it("should render footer with feature section and user info", () => {
    expect(screen.getByText("New features available!")).toBeInTheDocument();
    expect(screen.getByText("Olivia Rhye")).toBeInTheDocument();
  });

});

describe("Settings Component", () => {
  beforeEach(() => {
    render(<Settings />);
  })

  afterAll(() => {
    cleanup()
  })
  
  it("should render the Settings page with the correct title and description", () => {
    expect(screen.getByText("Settings")).toBeInTheDocument();
    expect(
      screen.getByText("Manage your team and preferences here.")
    ).toBeInTheDocument();
  });

  it("should render tabs with the correct labels", () => {
    const tabLabels = [
      "My details",
      "Profile",
      "Password",
      "Team",
      "Plan",
      "Roles",
      "Notifications",
      "Integrations",
      "API",
    ];
    tabLabels.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it("should render and select a role on the radio button", () => {
    const roles = ["Superadmin", "Developeradmin", "Supportadmin"];
    roles.forEach((role) => {
      expect(screen.getByText(role)).toBeInTheDocument();
    });
  
    const superadminRadio = screen.getByLabelText("Superadmin");
    const supportadminRadio = screen.getByLabelText("Supportadmin");

    expect(superadminRadio).toBeChecked();
    expect(supportadminRadio).not.toBeChecked();

    fireEvent.click(supportadminRadio);

    expect(supportadminRadio).toBeChecked();
    expect(superadminRadio).not.toBeChecked();
  });

  it("should render the Connected Email section with correct radio buttons and input", () => {
    expect(screen.getByLabelText("My account email")).toBeInTheDocument();
    expect(
      screen.getByText("olivia@untitledui.com")
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("billing@untitledui.com")).toBeInTheDocument();
  });
  
  it("should render the 'Add role to user' button", () => {
    const addButton = screen.getByRole("button", { name: "Add role to user" });
    expect(addButton).toBeInTheDocument();
    expect(addButton).toHaveClass("flex gap-2 my-4 text-[14px] items-center justify-center text-center !text-[#667085]");
  });
});

