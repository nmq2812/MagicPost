"use client";

import Clock from "@/components/my-clock"
import { DataTable } from "./data-table"
import { Item, columns } from "./columns"
import { useEffect, useState } from "react";
import { date } from "zod";


interface OrderManagerTabProps {
    orders: Item[]
    zipcodes: { id: number, name: string, zipcode: string }[]
}

export function OrderManagerTab() {

    const [orders, setOrders] = useState<Item[]>([]);
    const [zipcodes, setZipcodes] = useState<{ id: number, name: string, zipcode: string }[]>([]);

    useEffect(() => {
        // const user: { username: string, role: string } = localStorage.getItem("userData");
        fetch("http://localhost:8000/api/v1/items", {

        }).then((resp) => resp.json()).then((data) => {
            setOrders(data);
        })

        fetch("http://localhost:8000/api/v1/offices/")
            .then((resp) => resp.json())
            .then((data) => {
                const temp = data.map((office: any) => {
                    return { name: office.name, zipcode: office.zipcode }
                })

                setZipcodes(temp);
            })

    }, []);



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