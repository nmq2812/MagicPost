"use client"
import Link from "next/link"

import { Button } from "./ui/button"

import { cn } from "@/lib/utils"

export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    return (
        <nav
            className={cn("flex items-center space-x-4 lg:space-x-6", className)}
            {...props}
        >
            <Link
                href="/"
                className="text-sm font-medium transition-colors hover:text-primary"
            >
                Trang chủ
            </Link>
            <Link
                href="#intro"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                Giới thiệu
            </Link>
            <Link
                href="#services"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                Dịch vụ
            </Link>
            <Link
                href="#search"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                Tra cứu bưu gửi
            </Link>
            <Button className="text-sm font-medium">
                Đăng nhập
            </Button>
        </nav>
    )
}