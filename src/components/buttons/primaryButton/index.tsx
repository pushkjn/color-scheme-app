import React, { PropsWithChildren } from "react";
import { PrimaryButtonStyle } from "./style";

export type ButtonProps = {
    onClick?: () => void
}

export const PrimaryButton: React.FC<PropsWithChildren<ButtonProps>> = props => (

    <PrimaryButtonStyle onClick={props.onClick}>
        {props.children}
    </PrimaryButtonStyle>
)