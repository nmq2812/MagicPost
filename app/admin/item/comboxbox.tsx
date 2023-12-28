"use client"

import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { FormControl } from "@/components/ui/form"
import { ControllerRenderProps, UseFormReturn } from "react-hook-form"


interface ZipcodeInputProp {
    form: UseFormReturn<any>
    field: ControllerRenderProps<any, any>
    zipcodes: { name: string, zipcode: string }[]
}

export function ZipcodeInput({ form, field, zipcodes }: ZipcodeInputProp) {


    return (
        <Popover>
            <PopoverTrigger asChild>
                <FormControl>
                    <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                            "justify-between w-full",
                            !field.value && "text-muted-foreground"
                        )}
                    >
                        {field.value
                            ? zipcodes.find(
                                (zipcode) => zipcode.zipcode === field.value
                            )?.zipcode
                            : "Chọn điểm giao dịch"}
                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </FormControl>
            </PopoverTrigger>
            <PopoverContent className="p-0 w-96 h-96 ">
                <Command>
                    <CommandInput
                        placeholder="Tìm điểm giao dịch"
                        className="h-9"
                    />
                    <CommandEmpty>Not found.</CommandEmpty>
                    <CommandGroup className="w-full overflow-y-auto">
                        {zipcodes.map((zipcode) => (
                            <CommandItem
                                value={zipcode.name}
                                key={zipcode.zipcode}
                                onSelect={() => {
                                    form.setValue(field.name, zipcode.zipcode)
                                }}
                            >
                                {zipcode.name}
                                <CheckIcon
                                    className={cn(
                                        "ml-auto h-4 w-4",
                                        zipcode.zipcode === field.value
                                            ? "opacity-100"
                                            : "opacity-0"
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