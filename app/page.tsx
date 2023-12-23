import { Button } from '@/components/ui/button'

import { MainNav } from '@/components/main-nav'
import { Brand } from '@/components/brand'
import { Footer } from '@/components/footer'
import Search from '@/components/search'
import { Intro } from '@/components/intro'
import Services from '@/components/services'

export default function Home() {
    return (
        <>
            <div className="hidden flex-col md:flex">
                <div className="border-b">
                    <div className="flex h-16 items-center px-4 fixed top-0 w-full z-50">
                        <Brand title="Magic Post" />
                        <MainNav className="mx-6" />
                        <div className="ml-auto flex items-center space-x-4">
                            {/* <Search /> */}
                            {/* <UserNav /> */}
                        </div>
                    </div>
                </div>
                <div className="flex-1 space-y-4 pt-6">
                    <Intro />
                    <Services />
                    <Search />
                    <div className="flex items-center justify-between space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                        <div className="flex items-center space-x-2">
                            {/* <CalendarDateRangePicker /> */}
                            <Button>Download</Button>
                        </div>
                    </div>
                </div>

                <Footer></Footer>
            </div>
        </>
    )
}
