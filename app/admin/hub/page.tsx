import { Hub } from "./columns"
import HubManagementTab from "./main"


async function getHub(): Promise<Hub[]> {

    const response = await fetch("http://localhost:8000/api/v1/hubs/")

    if (!response.ok) {
        throw new Error(response.statusText)
    }

    return response.json()
}


export default async function HubManagementPage() {

    const data = await getHub()


    return (
        <HubManagementTab hubs={data} />
    )
}
