
import { User } from "./columns"
import UserManagementTab from "./main"

import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import { z } from "zod"



async function getUsers(): Promise<User[]> {

    const response = await fetch("http://localhost:8000/api/v1/auth/users")

    if (!response.ok) {
        throw new Error(response.statusText)
    }

    return response.json()
}


export default async function UserManagementPage() {

    const data = await getUsers()


    return (
        <UserManagementTab users={data} />
    )
}
