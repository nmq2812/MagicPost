import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Edit, Info, MoreHorizontal } from "lucide-react";



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
            const payment = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(payment.id.toString())}
                        >
                            Copy payment ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="flex gap-3">
                            <Info strokeWidth={1} size={16} />
                            <p>Chi tiết</p>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex gap-3">
                            <Edit strokeWidth={1} size={16} />
                            <p>Cập nhật</p>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]