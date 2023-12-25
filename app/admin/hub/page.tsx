"use client";
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


import { Edit, Info, Plus } from "lucide-react"
import Clock from "@/components/my-clock"
import { Input } from "@/components/ui/input"
import { DataTable } from "./data-table"
import { Hub, columns } from "./columns"

function getHub(): Hub[] {
    const hubs = [
        {
            id: 1,
            name: "Điểm tập kết Ba Đình",
            address: "Phường Điện Ba Đinh, Hà Nội",
            manager: "ppvan",
            phone: "0981272356",
        },
        {
            id: 2,
            name: "Điểm tập kết Ba Đình",
            address: "Phường Điện Ba Đinh, Hà Nội",
            manager: "ppvan",
            phone: "0981272356",
        },
        {
            id: 3,
            name: "Điểm tập kết Ba Đình",
            address: "Phường Điện Ba Đinh, Hà Nội",
            manager: "ppvan",
            phone: "0981272356",
        },
        {
            id: 4,
            name: "Điểm tập kết Ba Đình",
            address: "Phường Điện Ba Đinh, Hà Nội",
            manager: "ppvan",
            phone: "0981272356",
        },
        {
            id: 5,
            name: "Điểm tập kết Ba Đình",
            address: "Phường Điện Ba Đinh, Hà Nội",
            manager: "ppvan",
            phone: "0981272356",
        },
        {
            id: 6,
            name: "Điểm tập kết Ba Đình",
            address: "Phường Điện Ba Đinh, Hà Nội",
            manager: "ppvan",
            phone: "0981272356",
        },
        {
            id: 7,
            name: "Điểm tập kết Ba Đình",
            address: "Phường Điện Ba Đinh, Hà Nội",
            manager: "ppvan",
            phone: "0981272356",
        },
        {
            id: 8,
            name: "Điểm tập kết Ba Đình",
            address: "Phường Điện Ba Đinh, Hà Nội",
            manager: "ppvan",
            phone: "0981272356",
        },
        {
            id: 9,
            name: "Điểm tập kết Ba Đình",
            address: "Phường Điện Ba Đinh, Hà Nội",
            manager: "ppvan",
            phone: "0981272356",
        },
        {
            id: 10,
            name: "Điểm tập kết Ba Đình",
            address: "Phường Điện Ba Đinh, Hà Nội",
            manager: "ppvan",
            phone: "0981272356",
        }
    ]

    return hubs
}


export default function HubManagementTab() {

    const data = getHub()


    return (
        <div className="p-3">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-semibold">Quản lý điểm tập kết</h1>
                <Clock />
            </div>

            <div className="w-full flex gap-4 mb-8 justify-between items-center">
                <Input className="max-w-[800px]" placeholder="Tìm kiếm điểm tập kết..." />

                <Button
                    variant="default"
                    className="w-48 p-2 flex justify-around items-center"
                >
                    <Plus strokeWidth={1} />
                    <p>Thêm điểm tập kết</p>
                </Button>
            </div>

            <DataTable columns={columns} data={data} />
        </div>
    )
}
