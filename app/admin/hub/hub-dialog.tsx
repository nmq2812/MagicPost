import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EditIcon, Trash2 } from "lucide-react";
import { Hub } from "./columns";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


export function EditHubDialog({ hub }: { hub: Hub }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size="icon">
                    <EditIcon size={16} strokeWidth={1} />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] h-96">
                <DialogHeader>
                    <DialogTitle>Cập nhật điểm tập kết</DialogTitle>
                    <DialogDescription>
                        Cập nhật thông tin về điểm tập kết tại đây.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-7 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Tên
                        </Label>
                        <Input id="name" value={hub.name} className="col-span-6" />
                    </div>
                    <div className="grid grid-cols-7 items-center gap-4">
                        <Label htmlFor="address" className="text-right">
                            Địa chỉ
                        </Label>
                        <div className="col-span-2">
                            <Select>
                                <SelectTrigger className="">
                                    <SelectValue placeholder="Tỉnh/Thành Phố" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">Hà nội</SelectItem>
                                    <SelectItem value="2">Bắc Ninh</SelectItem>
                                    <SelectItem value="3">Quảng Nam</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="col-span-2">
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Quận/Huyện" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">Hà nội</SelectItem>
                                    <SelectItem value="2">Bắc Ninh</SelectItem>
                                    <SelectItem value="3">Quảng Nam</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="col-span-2">
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Xã/Phường" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">Hà nội</SelectItem>
                                    <SelectItem value="2">Bắc Ninh</SelectItem>
                                    <SelectItem value="3">Quảng Nam</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="grid grid-cols-7 items-center gap-4">
                        <Label htmlFor="manager" className="text-right">
                            Quản lý
                        </Label>
                        <Input id="manager" value={`@${hub.manager}`} className="col-span-6" />
                    </div>
                    <div className="grid grid-cols-7 items-center gap-4">
                        <Label htmlFor="phone" className="text-right">
                            Số điện thoại
                        </Label>
                        <Input id="phone" value={hub.phone} className="col-span-6" />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Xác nhận</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}


export function DeleteHubDialog({ hub }: { hub: Hub }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size="icon">
                    <Trash2 size={16} strokeWidth={1} absoluteStrokeWidth />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-7 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="name" value="Pedro Duarte" className="col-span-6" />
                    </div>
                    <div className="grid grid-cols-7 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input id="username" value="@peduarte" className="col-span-6" />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}