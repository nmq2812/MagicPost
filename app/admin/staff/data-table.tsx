"use client";

import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";


import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import React from "react";
import { DataTablePagination } from "./pagination";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";


interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function DataTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {

    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            columnFilters,
        },
        initialState: {
            pagination: {
                pageSize: 20,
            },
        },
    })



    return (
        <div className="flex h-full flex-col justify-between gap-3">

            <div className="flex justify-between items-center py-4 px-1">
                <Input
                    placeholder="Tìm tên người dùng"
                    value={(table.getColumn("username")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("username")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />

                <AddUserDialog />
            </div>

            <div className="rounded-md overflow-y-auto flex-1">
                <Table className="border rounded overflow-hidden">
                    <TableHeader className="bg-muted sticky top-0">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody className="overflow-auto">
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <DataTablePagination table={table} />
        </div>
    )
}


function AddUserDialog() {

    const [date, setDate] = React.useState<Date>()


    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default">Cấp tài khoản</Button>
            </DialogTrigger>
            <DialogContent className="w-[800px]">
                <DialogHeader>
                    <DialogTitle></DialogTitle>
                    <DialogDescription>
                        Cấp tài khoản mới cho trưởng điểm hoặc nhân viên.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input id="username" value="ppvan" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="fullname" className="text-right">
                            Họ và tên
                        </Label>
                        <Input id="fullname" value="Văn Phú" className="col-span-3" />
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="phone" className="text-right">
                            Số điện thoại
                        </Label>
                        <Input id="phone" placeholder="0987654321" value="" className="col-span-3" />
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="fullname" className="text-right">
                            Chức vụ
                        </Label>
                        <Select>
                            <SelectTrigger className="col-span-3">
                                <SelectValue placeholder="Chọn chức vụ" />
                            </SelectTrigger>
                            <SelectContent>
                                {/* "admin" | "president" | "hub_manager" | "office_manager" | "hub_staff" | "office_staff"; */}
                                <SelectGroup>
                                    <SelectItem value="hub_manager">Trưởng điểm tập kết</SelectItem>
                                    <SelectItem value="office_manager">Trưởng điểm giao dịch</SelectItem>
                                    <SelectItem value="hub_staff">Nhân viên tập kết</SelectItem>
                                    <SelectItem value="office_staff">Nhân viên giao dịch</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="phone" className="text-right">
                            Ngày sinh
                        </Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "col-span-3 justify-start text-left font-normal",
                                        !date && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>


                </div>
                <DialogFooter>
                    <Button type="submit">Tạo tài khoản</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}