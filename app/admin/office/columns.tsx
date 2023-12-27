import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import { DataTableColumnHeader } from "./column-header";
import { DeleteOfficeDialog, EditOfficeDialog } from "./office-dialog";

export type Office = {
    id: number
    name: string
    address: string
    manager: string
    phone: string
}

export const columns: ColumnDef<Office>[] = [
    {
        accessorKey: "id",
        header: ({ column }) => {
            return (
                <DataTableColumnHeader column={column} title="Mã" />
            )
        }
    },

    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <DataTableColumnHeader column={column} title="Tên" />
            )
        },
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
            const office = row.original

            return (
                <div className="flex gap-3">
                    <EditOfficeDialog office={office} />
                    <DeleteOfficeDialog office={office} />
                </div>
            )
        },
    },
]