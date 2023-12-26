
import { Brand } from "@/components/brand"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { LogOut, PieChart, Settings, Store, Users, Warehouse } from "lucide-react"
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
            href: "/admin/profile",
            icon: <Settings strokeWidth={1} />
        }
    ]


    return (
        <div className="flex gap-2 w-full p-1 h-screen rounded-lg">
            <aside className="w-1/6 border rounded-lg bg-background shadow">
                <div className="flex flex-col px-2 py-3 h-full">
                    <div className="p-2 mb-4 bg-card">
                        <Brand title="Magic Post" />
                    </div>

                    <div>
                        <img className="object-cover w-24 h-24 mx-auto mb-3 rounded-full" src="https://avatars.githubusercontent.com/ppvan" alt="@ppvan" />
                        <p className="text-center font-large leading-none">Phạm Văn Phúc</p>
                        <p className="text-center text-muted-foreground">Admin</p>
                    </div>

                    <SidebarNav items={navigationLinks} />

                    <span className="flex-1"></span>

                    <NavLink href="/admin/posts">
                        <LogOut strokeWidth={1} />
                        <p>Đăng xuất</p>
                    </NavLink>
                </div>
            </aside >
            <main className="w-5/6 bg-gray-400 rounded-lg">
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