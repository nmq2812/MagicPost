import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Order {
    id: number;
    code: string;
    name: string;
    price: string
}

const SearchBar: React.FC<{ orders: Order[]; onSearch: (searchTerm: string) => void }> = ({ orders, onSearch }) =>  {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearch = () => {
        onSearch(searchTerm);
    };
  
    const searchOrderByCode = (searchTerm: string) => {
      const result = orders.filter(order =>
        order.code.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return result;
    };
    return (
        <div className="flex w-full max-w-sm items-center space-x-2 mt-8">
        <Input
            type="search"
            placeholder="Tìm kiếm theo mã đơn hàng..."
            value={searchTerm}
            onChange={e => {
                const newSearchTerm = e.target.value;
                setSearchTerm(newSearchTerm);
                if (newSearchTerm === "") {
                    onSearch(newSearchTerm);
                }
            }}
            className="md:w-[100px] lg:w-[500px]"
        />
        <Button
            type="submit"
            onClick={handleSearch}
            className=""
        >
            <MagnifyingGlassIcon/>Tìm kiếm
        </Button>
        </div>
    );
};

export default SearchBar;
