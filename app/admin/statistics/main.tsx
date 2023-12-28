"use client";

import { AdminTitle } from "@/components/admin-title";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { CommandInput, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command"
import { Command, CheckIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Bar, BarChart, Cell, Legend, Pie, PieChart, ResponsiveContainer, XAxis, YAxis } from "recharts"


export interface RevenueChartProps {
    data: { name: string, total: number }[]
}

export interface OrderStatusChartProps {
    data: { name: string, value: number }[]
}

export interface StatsticsProp {
    items: Item[]
}

enum ItemType {
    DOCUMENT = "document",
    GOODS = "goods",
}

enum ItemStatus {
    PENDING = "pending",
    ON_DELIVERY = "on delivery",
    SHIPPED = "shipped",
    SUCCESS = "success",
    FAILED = "failed",
}


interface Item {
    id: number;
    sender_name: string;
    sender_address: string;
    sender_phone: string;
    sender_zipcode: string;
    receiver_name: string;
    receiver_address: string;
    receiver_phone: string;
    receiver_zipcode: string;
    cod: number;
    weight: number;
    fee: number;
    type: ItemType; // Assuming ItemType is a type or interface defined elsewhere
    status: ItemStatus;
    notes?: string;
    created_at: string; // Assuming the date is stored as a string or timestamp
    updated_at: string; // Assuming the date is stored as a string or timestamp
}



export function StatisticsTab({ items }: StatsticsProp) {

    const revenueData = [
        {
            name: "Jan",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "Feb",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "Mar",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "Apr",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "May",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "Jun",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "Jul",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "Aug",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "Sep",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "Oct",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "Nov",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "Dec",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
    ]

    const statusData = items.reduce((acc, item) => {
        if (acc[item.status]) {
            acc[item.status] += 1
        } else {
            acc[item.status] = 1
        }
        return acc
    }, {} as { [key in ItemStatus]: number })

    const temp = []

    for (const [key, value] of Object.entries(statusData)) {
        temp.push({ name: key, value: value })
    }

    temp.push({ name: "Success", value: items.length })

    return (
        <div className="h-full flex justify-center bg-green-400 flex-col gap-4 p-3">

            <div>
                {/* <ComboboxDemo /> */}
            </div>

            <div className="flex items-center justify-between">
                <AdminTitle title="Doanh thu" />
            </div>
            <div className="flex-1 w-full flex items-center p-6 border rounded">
                <RevenueChart data={revenueData} />

                <OrderStatusChart data={temp} />
            </div>
        </div>
    )
}

function OrderStatusChart({ data }: OrderStatusChartProps) {

    interface RenderLabelProp {
        cx: number
        cy: number
        midAngle: number
        innerRadius: number
        outerRadius: number
        percent: number
        index: number
    }

    const data1 = [
        { name: 'Thành công', value: 400 },
        { name: 'Thất bại', value: 300 },
    ];
    const COLORS = ["#A5AA52", "#CE963B"];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: RenderLabelProp) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" className="text-shadow" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return <ResponsiveContainer width={"100%"} height={350}>
        <PieChart title="Tỉ lệ thành công của đơn hàng">
            <Pie
                legendType="circle"
                data={data1}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={120}
                fill="#888888"
            >
                {data1.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>

            <Legend />
        </PieChart>
    </ResponsiveContainer>
}


export function RevenueChart({ data }: RevenueChartProps) {
    return (

        <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data} title="Biểu đồ doanh thu hàng tháng">
                <XAxis
                    dataKey="name"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `$${value}`}
                />
                <Bar
                    dataKey="total"
                    fill="currentColor"
                    radius={[4, 4, 0, 0]}
                    className="fill-primary"
                />
            </BarChart>

        </ResponsiveContainer>

    )
}

const frameworks = [
    {
        value: "next.js",
        label: "Next.js",
    },
    {
        value: "sveltekit",
        label: "SvelteKit",
    },
    {
        value: "nuxt.js",
        label: "Nuxt.js",
    },
    {
        value: "remix",
        label: "Remix",
    },
    {
        value: "astro",
        label: "Astro",
    },
]

export function ComboboxDemo() {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {value
                        ? frameworks.find((framework) => framework.value === value)?.label
                        : "Select framework..."}
                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search framework..." className="h-9" />
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                        {frameworks.map((framework) => (
                            <CommandItem
                                key={framework.value}
                                value={framework.value}
                                onSelect={(currentValue) => {
                                    setValue(currentValue === value ? "" : currentValue)
                                    setOpen(false)
                                }}
                            >
                                {framework.label}
                                <CheckIcon
                                    className={cn(
                                        "ml-auto h-4 w-4",
                                        value === framework.value ? "opacity-100" : "opacity-0"
                                    )}
                                />
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}