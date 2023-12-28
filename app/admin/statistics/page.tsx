import { StatisticsTab } from "./main"


async function getItems() {
    const response = await fetch("http://localhost:8000/api/v1/items")

    if (!response.ok) {
        throw new Error(response.statusText)
    }

    return response.json()
}


export default async function AdminPage() {

    const items = await getItems()

    return (
        <StatisticsTab items={items} />
    )
}
