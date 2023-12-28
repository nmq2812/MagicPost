"use client";

import Clock from "@/components/my-clock";
import { User, columns } from "./columns";
import { DataTable } from "./data-table";

// import { AddHubDialog } from "./hub-dialog";

interface UserTabProps {
    users: User[]
}

export default function UserManagementTab({ users }: UserTabProps) {


    return (
        <div className="p-3 h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-semibold">Quản lý nhân viên</h1>
                <Clock />
            </div>

            <div className="flex-1 w-full h-96">
                <DataTable columns={columns} data={users} />
            </div>

        </div>
    )
}

