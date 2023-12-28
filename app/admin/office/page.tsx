"use client";

import { useEffect, useState } from "react";
import { Office } from "./columns"
import OfficeManagementTab from "./main"



export default function OfficeManagementPage() {

    const [data, setData] = useState<Office[]>([])

    useEffect(() => {
        fetch("http://localhost:8000/api/v1/offices/")
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })
    }, [])

    return (
        <OfficeManagementTab offices={data} />
    )
}
