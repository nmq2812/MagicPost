"use client";

import Clock from "@/components/my-clock"
import { DataTable } from "./data-table"
import { Item, columns } from "./columns"


interface OrderManagerTabProps {
    orders: Item[]
    zipcodes: { name: string, zipcode: string }[]
}

export function OrderManagerTab({ zipcodes, orders }: OrderManagerTabProps) {
    return (
        <div className="p-3 h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-semibold">Quản lý đơn hàng</h1>
                <Clock />
            </div>

            <div className="flex-1 w-full h-96">
                <DataTable zipcodes={zipcodes} columns={columns} data={orders} />
            </div>

        </div>
    )
}