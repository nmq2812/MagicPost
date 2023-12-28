
import { Brand } from "@/components/brand"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { LogOut, Package, PieChart, Settings, Store, User, Users, Warehouse } from "lucide-react"
import { SidebarNav } from "@/components/admin-nav"

interface AdminLayoutProps {
    children: React.ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {

    const navigationLinks = [
        {
            title: "Thống kê",
            href: "/admin/statistics",
            icon: <PieChart strokeWidth={1} />
        },
        {
            title: "Tạo đơn hàng",
            href: "/admin/item",
            icon: <Package strokeWidth={1} absoluteStrokeWidth />
        },
        {
            title: "Quản lý Nhân viên",
            href: "/admin/staff",
            icon: <Users strokeWidth={1} />
        },
        {
            title: "Quản lý điểm tập kết",
            href: "/admin/hub",
            icon: <Warehouse strokeWidth={1} />
        },
        {
            title: "Quản lý điểm giao dịch",
            href: "/admin/office",
            icon: <Store strokeWidth={1} />
        },
        {
            title: "Cài đặt tài khoản",
            href: "/admin/setting",
            icon: <Settings strokeWidth={1} />
        }
    ]


    return (
        <div className="flex gap-2 h-screen w-full p-1 rounded-lg">
            <aside className="w-1/6 border rounded-lg bg-background shadow">
                <div className="flex flex-col px-2 py-3 h-full">
                    <div className="p-2 mb-2 bg-card">
                        <Brand title="Magic Post" />
                    </div>

                    <div className="flex items-center justify-start gap-2 p-4 mb-4">
                        <User />
                        <div className="flex flex-col items-center">
                            <p className="font-large">@ppvan</p>
                            <p className="text-muted-foreground">Admin</p>
                        </div>
                    </div>

                    <SidebarNav items={navigationLinks} />

                    <span className="flex-1"></span>

                    <NavLink href="/admin/posts">
                        <LogOut strokeWidth={1} />
                        <p>Đăng xuất</p>
                    </NavLink>
                </div>
            </aside >
            <main className="w-5/6 h-full border shadow p-2 rounded-lg">
                {children}
            </main>
        </div >
    )
}


function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className={cn(
                "flex items-center gap-4 w-full p-2 py-4 hover:bg-muted rounded-lg",
                "w-full"
            )}
        >
            {children}
        </Link>
    )
}