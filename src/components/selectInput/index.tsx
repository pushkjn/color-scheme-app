import React from "react";
import Select, { Options, OptionProps } from "react-select"

type SelectOptionType<T> = {
    value: T, label: string
}

export type SelectInputProps<T> = {
    value: SelectOptionType<T>
    options: SelectOptionType<T>[]
    onChange: (val?: SelectOptionType<T>) => void
}

export function SelectInput<T>(props: SelectInputProps<T>) {
    return (
        <Select<SelectOptionType<T>>
            value={props.value}
            onChange={props.onChange}
            options={props.options}
        />
    )
}