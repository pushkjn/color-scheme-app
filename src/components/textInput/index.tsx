import React, { ChangeEvent } from "react";

export type TextInputProps = {
    value: string | number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const TextInput: React.FC<TextInputProps> = props => (
    <input type="text" {...props} />
)