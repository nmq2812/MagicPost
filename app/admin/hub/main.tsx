"use client";

import Clock from "@/components/my-clock";
import { Input } from "@/components/ui/input";
import { Hub, columns } from "./columns";
import { DataTable } from "./data-table";
import { AddHubDialog } from "./hub-dialog";

interface HubTabProps {
    hubs: Hub[]
}

export default async function HubManagementTab({ hubs }: HubTabProps) {


    return (
        <div className="p-3">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-semibold">Quản lý điểm tập kết</h1>
                <Clock />
            </div>

            <div className="w-full flex gap-4 mb-8 justify-between items-center">
                <Input className="max-w-[800px]" placeholder="Tìm kiếm điểm tập kết..." />

                <AddHubDialog />
            </div>

            <div>
                <DataTable columns={columns} data={hubs} />
            </div>

        </div>
    )
}
