import { Office } from "./columns"
import OfficeManagementTab from "./main"


async function getOffices(): Promise<Office[]> {

    const response = await fetch("http://localhost:8000/api/v1/offices/")

    if (!response.ok) {
        throw new Error(response.statusText)
    }

    return response.json()
}


export default async function OfficeManagementPage() {

    const data = await getOffices()


    return (
        <OfficeManagementTab offices={data} />
    )
}
