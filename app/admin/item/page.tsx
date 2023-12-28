import { CreateItemTab } from "./main";

async function getZipcodes() {
    const response = await fetch("http://localhost:8000/api/v1/offices/")


    if (!response.ok) {
        throw new Error(response.statusText)
    }

    return response.json().then(data => {
        return data.map((office: any) => {
            return { name: office.name, zipcode: office.zipcode }
        })
    })
}


export default async function ItemPage() {

    const zipcodes = await getZipcodes();

    return (
        <CreateItemTab zipcodes={zipcodes} />
    )
}