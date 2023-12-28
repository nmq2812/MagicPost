"use client";

import { useEffect, useState } from "react";
import { CreateItemTab } from "./main";

export default function ItemPage() {

    const [data, setData] = useState<{ name: string, zipcode: string }[]>([])

    useEffect(() => {
        fetch("http://localhost:8000/api/v1/auth/users")
            .then((res) => res.json())
            .then(data => {
                return data.map((office: any) => {
                    return { name: office.name, zipcode: office.zipcode }
                })
            })
            .then((data) => {
                setData(data)
            })
    }, [])

    return (
        <CreateItemTab zipcodes={data} />
    )
}