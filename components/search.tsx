"use client"
import SearchBar from './ui/search-bar'
import React, { useState } from 'react';

interface Order {
    id: number;
    code: string;
    name: string;
    price: string
}

const data = [
    {
        id: 0,
        code: "a01",
        name: "Keyboard Logitech",
        price: "10$"
    },
    {
        id: 1,
        code: "a02",
        name: "Gundam ax-00",
        price: "100$"
    },
    {
        id: 2,
        code: "a03",
        name: "Washing-machine",
        price: "2000$"
    },
    {
        id: 3,
        code: "a04",
        name: "Laptop Acer nitro V",
        price: "500$"
    },
]

export default function Search() {
    const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);

    const handleSearch = (searchTerm: string) => {
        if (searchTerm === '') {
            setFilteredOrders([]);
        } else {
            const foundOrders = data.filter(order =>
            order.code.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredOrders(foundOrders);
        }
    };
    
    return (
        <div className="h-screen mx-auto grid place-items-center" id="search">
            <div className="p-4 rounded-lg">
                <h1 className="grid place-items-center text-3xl font-bold tracking-tight m-1">Tra cứu vận đơn</h1>
                <SearchBar orders={data} onSearch={handleSearch} />
                {/* Hiển thị danh sách đơn hàng */}
                {filteredOrders.length > 0 && (
                    <ul>
                    {filteredOrders.map(order => (
                        <li key={order.id}>
                        {order.code} - {order.name} - {order.price}
                        </li>
                    ))}
                    </ul>
                )}
            </div>
        </div>
    );
}