import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { DownloadCloudIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Status } from "@/components/ui/status";
import { Spinner } from "../ui/spinner";

const AppTable = () => {
  const [rolesData, setRolesData] = useState({
    isAllRowChecked: false,
    isAllRowIndeterminate: false,
    rowData: [],
  });
  const [loading, setLoading] = useState(true);

  const handleSelectAllChange = (e) => {
    const isChecked = e.target.checked;
    setRolesData((prev) => ({
      isAllRowChecked: isChecked,
      isAllRowIndeterminate: false,
      rowData: prev.rowData.map((item) => ({ ...item, isChecked })),
    }));
  };

  function handleRowChange(id) {
    setRolesData((prev) => {
      const updatedItemList = prev.rowData.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      );

      return {
        ...prev,
        isAllRowIndeterminate: true,
        rowData: updatedItemList,
      };
    });
  }

  const columns = [
    {
      key: "select",
      header: () => (
        <Checkbox
          ref={(element) => {
            if (element) {
              element.indeterminate = rolesData.isAllRowIndeterminate;
            }
          }}
          hasIcon
          aria-label="Select all"
          onChange={handleSelectAllChange}
        />
      ),
    },
    {
      key: "type",
      header: "Type",
    },
    {
      key: "date",
      header: "Date created",
    },

    {
      key: "status",
      header: "Status",
    },

    {
      key: "user",
      header: "Role User",
      className: "w-0",
    },
  ];

  useEffect(() => {
    async function fetchData() {
      const baseUrl = import.meta.env.VITE_APP_BASE_API;
      setLoading(true);
      fetch(`${baseUrl}/api/roles`)
        .then((response) => response.json())
        .then((data) => {
          setRolesData((prev) => ({
            ...prev,
            rowData: data.map((item) => ({ ...item, isChecked: false })),
          }));
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    fetchData();
  }, []);

  return (
    <section>
      <div className="md:flex mb-8 justify-between gap-4 items-center">
        <h5 className="text-lg mb-3 md:mb-0 leading-7">User Roles</h5>

        <Button variant="outline">
          <DownloadCloudIcon />
          Download All
        </Button>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <Table>
          <TableHeader>
            <TableRow className="divide-x">
              {columns.map((item) => (
                <TableHead className={item.className || ""} key={item.key}>
                  {typeof item.header === "function"
                    ? item.header()
                    : item.header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {rolesData.rowData.map((data) => (
              <TableRow key={data.id}>
                <TableCell>
                  <Checkbox
                    checked={data.isChecked}
                    onChange={() => handleRowChange(data.id)}
                    aria-label="Select row"
                    className="text-[#101828]"
                    title={data.name}
                  />
                </TableCell>
                <TableCell className="text-[#667085] leading-5">
                  {data.type}
                </TableCell>
                <TableCell className="text-[#667085] leading-5">
                  {data.date}
                </TableCell>
                <TableCell>
                  <Status type={data.status} />
                </TableCell>
                <TableCell className="flex -space-x-3">
                  {data.users.map((src, index) => {
                    const zIndex = "!z-" + index * 10;
                    return (
                      <Avatar className={cn("w-7 h-7", zIndex)} key={src}>
                        <AvatarImage src={src} />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    );
                  })}
                  {data.totalUser > 0 && (
                    <div
                      className={cn(
                        "w-7 h-7 text-[#475467] rounded-full flex items-center justify-center bg-[#F9FAFB] shadow-lg",
                        "z-50"
                      )}
                    >
                      +{data.totalUser - data.users.length}
                    </div>
                  )}
                </TableCell>

                <TableCell>
                  <DownloadCloudIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </section>
  );
};

export default AppTable;
