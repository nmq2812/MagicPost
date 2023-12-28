"use client";

import { useEffect, useState } from "react";
import { Hub } from "./columns"
import HubManagementTab from "./main"




export default function HubManagementPage() {

    const [data, setData] = useState<Hub[]>([])

    useEffect(() => {
        fetch("http://localhost:8000/api/v1/hubs/")
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })
    }, [])


    return (
        <HubManagementTab hubs={data} />
    )
}
