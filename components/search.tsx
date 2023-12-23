import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Search() {
    return (
        <div className="h-screen mx-auto grid place-items-center" id="search">
            <div className="p-4 rounded-lg">
                <h1 className="grid place-items-center text-3xl font-bold tracking-tight m-1">Tra cứu vận đơn</h1>
                <div className="flex w-full max-w-sm items-center space-x-2 mt-8">
                    <Input type="search"
                        placeholder="Mã đơn hàng"
                        className="md:w-[100px] lg:w-[300px]" 
                    />
                    <Button type="submit"><MagnifyingGlassIcon/>Tìm kiếm</Button>
                </div>
            </div>
        </div>
    )
  }