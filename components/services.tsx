import { BellIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


type CardProps = React.ComponentProps<typeof Card>

export default function Services() {
    return (
        <div className="h-screen grid place-items-center gap-2 bg-gray-100" id="services">
            <div className="">
                <h1 className="grid place-items-center text-3xl font-bold tracking-tight m-1">Dịch vụ</h1>
                <div className="grid grid-cols-3 mt-8 gap-x-16">
                    <Card>
                        <CardHeader>
                            <CardTitle>Dịch vụ giao hàng</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                    </Card>
                    <Card >
                        <CardHeader>
                            <CardTitle>Dịch vụ đóng gói và vận chuyển</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Dịch vụ theo dõi và quản lý</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
