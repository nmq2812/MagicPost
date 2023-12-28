"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { AdminTitle } from "@/components/admin-title"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"


enum ItemType {
    DOCUMENT = "document",
    GOODS = "goods"
}

export function CreateItemTab() {
    return (
        <div className="h-full flex justify-center flex-col gap-4 p-3">

            <div>
                {/* <ComboboxDemo /> */}
            </div>

            <div className="flex items-center justify-between">
                <AdminTitle title="Tạo đơn hàng" />
            </div>
            <div className="flex-1 w-full flex items-center p-6 border rounded">
                <ItemCreateForm />
            </div>
        </div>
    )
}

export function ItemCreateForm() {

    const formSchema = z.object({
        sender_name: z.string().min(2, {
            message: "Tên người gửi không được để trống"
        }).max(100, {
            message: "Tên người gửi tối đa 100 kí tự"
        }),
        receiver_name: z.string().min(2, {
            message: "Tên người nhận không được để trống"
        }).max(100, {
            message: "Tên người nhận tối đa 100 kí tự"
        }),
        sender_address: z.string().min(2, {
            message: "Địa chỉ người gửi không được để trống"
        }),
        receiver_address: z.string().min(2, {
            message: "Địa chỉ người nhận không được để trống"
        }),
        sender_zipcode: z.string().regex(/^[0-9]{5}$/, {
            message: "Mã bưu chính gửi không phải có 5 chữ số và tồn tại điểm giao dịch"
        }),
        receiver_zipcode: z.string().regex(/^[0-9]{5}$/, {
            message: "Mã bưu chính nhận không phải có 5 chữ số và tồn tại điểm giao dịch"
        }),
        sender_phone: z.string().regex(/^(03|05|07|08|09|01[2|6|8|9])([0-9]{8})$/, {
            message: "Số điện thoại không hợp lệ"
        }),
        receiver_phone: z.string().regex(/^(03|05|07|08|09|01[2|6|8|9])([0-9]{8})$/, {
            message: "Số điện thoại không hợp lệ"
        }),
        cod: z.number().int().min(0, {
            message: "Phí thu hộ không thể âm"
        }),
        weight: z.number().min(0, {
            message: "Khối lượng đơn hàng không thể âm"
        }),
        fee: z.number().int({
            message: "Chi phí vận chuyển phải là số nguyên"
        }).min(0, {
            message: "Chi phí vận chuyển không thể âm"
        }),
        type: z.nativeEnum(ItemType),
        notes: z.string()
    })

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            sender_name: "",
            receiver_name: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {

        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full p-1">

                <div className="flex items-center w-full gap-3">
                    <div className="flex-1">
                        <FormField
                            control={form.control}
                            name="sender_name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Họ tên người gửi</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Nguyễn Minh Quân" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Họ tên đầy đủ của người gửi hàng
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField

                            control={form.control}
                            name="sender_address"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Địa chỉ gửi</FormLabel>
                                    <FormControl>
                                        <Input placeholder="55 Trần Cung" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Địa chỉ nhà người gửi, không yêu cầu sự chính xác quá cao
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        >

                        </FormField>

                        <FormField

                            control={form.control}
                            name="sender_phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Số điện thoại người gửi</FormLabel>
                                    <FormControl>
                                        <Input placeholder="0981272356" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Số điện thoại người gửi. Bưu cục sẽ liên hệ trong trường hợp không có người nhận.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        >

                        </FormField>

                        <FormField

                            control={form.control}
                            name="type"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Loại hàng gửi</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Loại hàng gửi" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="goods">Hàng hóa</SelectItem>
                                                <SelectItem value="document">Tài liệu</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        >

                        </FormField>
                    </div>

                    <div className=" flex-1" >
                        <FormField
                            control={form.control}
                            name="receiver_name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Họ tên người nhận</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Đoàn Văn Phong" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Tên đầy đủ của người nhận
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="receiver_address"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Địa chỉ nhận</FormLabel>
                                    <FormControl>
                                        <Input placeholder="27 Nguyễn Phong Sắc" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Địa chỉ nhà người nhận, không yêu cầu sự chính xác quá cao
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        >
                        </FormField>

                        <FormField

                            control={form.control}
                            name="receiver_phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Số điện thoại người nhận</FormLabel>
                                    <FormControl>
                                        <Input placeholder="ví dụ: 0981272356" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Số điện thoại của người nhận. Bưu cục sẽ liên lạc qua số này khi đơn hàng đến nơi
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        >
                        </FormField>

                        <FormField

                            control={form.control}
                            name="weight"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Khối lượng ước tính</FormLabel>
                                    <FormControl>
                                        <Input placeholder="0.5" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Khối lượng ước tính hoặc quy đổi của đơn hàng.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        >
                        </FormField>

                        <FormField

                            control={form.control}
                            name="fee"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Chi phí vận chuyển</FormLabel>
                                    <FormControl>
                                        <Input placeholder="12000" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Chi phí vận chuyển đơn hàng
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        >
                        </FormField>

                        <FormField

                            control={form.control}
                            name="notes"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Ghi chú</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Hàng dễ vỡ xin nhẹ tay" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Ghi chú nghiệp vụ thêm
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        >
                        </FormField>

                    </div>
                </div>

                <Button type="submit">Submit</Button>
            </form>
        </Form >
    )
}
