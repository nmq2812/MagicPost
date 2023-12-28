import { useEffect, useState } from "react"
import { User } from "./columns"
import UserManagementTab from "./main"


export default function UserManagementPage() {

    const [data, setData] = useState<User[]>([])

    useEffect(() => {
        fetch("http://localhost:8000/api/v1/auth/users")
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })
    }, [])


    return (
        <UserManagementTab users={data} />
    )
}
