"use client";

import { useEffect, useState } from "react"
import { User } from "./columns"
import UserManagementTab from "./main"


export default function UserManagementPage() {

    const [data, setData] = useState<User[]>([])
    const [outDated, setOutDated] = useState<boolean>(true);

    useEffect(() => {
        if (!outDated) return

        fetch("http://localhost:8000/api/v1/auth/users")
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setOutDated(false);
            })
    }, [outDated])


    return (
        <UserManagementTab users={data} needRefresh={() => setOutDated(true)} />
    )
}
