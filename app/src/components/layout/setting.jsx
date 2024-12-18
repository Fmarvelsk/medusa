import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/ui/header";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Mail, Plus, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { cn, mapClassName } from "@/lib/utils";
import AppTable from "@/components/layout/app-table";

const headerProps = {
  UserRole: {
    title: "User Roles",
    rootClassName: "text-[#344054] text-sm leading-5 mb-1",
    className: "text-[#667085] text-sm leading-5",
    text: "Update your roles details and information.",
  },
  ConnectedEmail: {
    title: "Connected email",
    rootClassName: "text-[#344054] text-sm leading-5 mb-1",
    className: "text-[#667085] text-sm leading-5",
    text: "Select role account",
  },
  ActiveRole: {
    title: "Active Role",
    rootClassName: "text-[#344054] text-sm leading-5 mb-1",
    className: "text-[#667085] text-sm leading-5",
    text: "Select active role available to the user.",
  },
};

const tabItems = [
  { value: "my-details", label: "My details" },
  { value: "profile", label: "Profile" },
  { value: "password", label: "Password" },
  { value: "team", label: "Team" },
  { value: "plan", label: "Plan" },
  { value: "roles", label: "Roles" },
  { value: "notifications", label: "Notifications" },
  { value: "integrations", label: "Integrations" },
  { value: "api", label: "API" },
];

const roles = [
  { id: "superadmin", name: "Superadmin", lastActive: "06/2023" },
  { id: "developeradmin", name: "Developeradmin", lastActive: "01/2023" },
  { id: "supportadmin", name: "Supportadmin", lastActive: "10/2022" },
];

const ActiveRole = () => {
  const [selectedRole, setSelectedRole] = useState("superadmin");

  return (
    <div className="w-full md:w-auto">
      <RadioGroup
        value={selectedRole}
        onValueChange={setSelectedRole}
        className="space-y-4"
      >
        {roles.map((role) => {
          const {
            rootClassName,
            className,
            footerClassName,
            lastActiveClassName,
          } = mapClassName(selectedRole, role);

          return (
            <Card
              key={role.id}
              className={cn(
                "flex items-center justify-between p-4 rounded-lg cursor-pointer w-full md:w-[32rem] relative",
                rootClassName
              )}
            >
              <section className="flex space-x-4">
                <Users className="p-2 w-12 h-10 bg-white rounded-lg" />
                <div>
                  <label
                    htmlFor={role.id}
                    className={cn("font-medium", className)}
                  >
                    {role.name}
                  </label>
                  <p className={cn("text-sm  mb-2", lastActiveClassName)}>
                    Last active {role.lastActive}
                  </p>

                  <span className={cn("mr-4 text-sm", footerClassName)}>
                    Set as default
                  </span>
                  <span className="text-[#6941C6] font-medium">Edit</span>
                </div>
              </section>

              <RadioGroupItem
                id={role.id}
                value={role.id}
                className="border-gray-400 absolute top-4 right-4"
              />
            </Card>
          );
        })}
      </RadioGroup>

      <button className="flex gap-2 my-4 text-[14px] items-center justify-center text-center !text-[#667085]">
        <Plus className="w-5 h-5" /> <span>Add role to user</span>
      </button>
    </div>
  );
};

const Settings = () => {
  return (
    <section className="flex flex-col gap-6 w-full lg:mt-0 mt-16">
      <Header
        rootClassName="lg:leading-[38px] text-2xl lg:text-[30px] "
        title="Settings"
        text="Manage your team and preferences here."
      />

      <Tabs defaultValue="my-details" className="w-full my-3 overflow-auto">
        <TabsList className="grid lg:w-full grid-cols-9 divide-x w-[1000px] bg-white border rounded-lg">
          {tabItems.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <Header {...headerProps.UserRole} />
      <Separator />

      <div className="flex flex-wrap my-2.5 gap-10">
        <Header {...headerProps.ConnectedEmail} />

        <RadioGroup
          defaultValue="alternative"
          className="space-y-4 flex-initial w-full md:w-[34rem]"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem id="my-account" value="my-account" />
            <div>
              <label
                htmlFor="my-account"
                className="font-medium text-[#344054]"
              >
                My account email
              </label>
              <p className="text-sm text-[#667085] underline cursor-pointer">
                olivia@untitledui.com
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem id="alternative" value="alternative" />
              <label
                htmlFor="my-account"
                className="font-medium text-[#344054]"
              >
                An alternative email
              </label>
            </div>
            <div className="flex items-center">
              <div className="relative w-full">
                <Input
                  type="email"
                  placeholder="billing@untitledui.com"
                  className="pl-10 h-11"
                />
                <Mail className="absolute text-[#667085] left-3 top-2.5" />
              </div>
            </div>
          </div>
        </RadioGroup>
      </div>

      <Separator />

      <div className="flex flex-wrap my-5 gap-10">
        <Header {...headerProps.ActiveRole} />
        <ActiveRole />
      </div>

      <AppTable />
    </section>
  );
};

export default Settings;
