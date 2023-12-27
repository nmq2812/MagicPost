import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import { DeleteHubDialog, EditHubDialog } from "./hub-dialog";

export type Hub = {
    id: number
    name: string
    address: string
    manager: string
    phone: string
}

export const columns: ColumnDef<Hub>[] = [
    {
        accessorKey: "id",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Mã
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        }
    },

    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Tên
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const name: string = row.getValue("name")

            return <div>{name}</div>
        }
    },
    {
        accessorKey: "address",
        header: "Địa chỉ",
    },
    {
        accessorKey: "manager",
        header: "Quản lý",
    },
    {
        accessorKey: "phone",
        header: "Số điện thoại",
    },
    {
        id: "actions",
        header: "Thao tác",
        cell: ({ row }) => {
            const hub = row.original

            return (
                <div className="flex gap-3">
                    <EditHubDialog hub={hub} />
                    <DeleteHubDialog hub={hub} />
                </div>
            )
        },
    },
]