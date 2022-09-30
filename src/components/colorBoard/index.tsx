import React, { PropsWithChildren } from "react";
import { ColorStripe } from "../colorStripe";
import { ColorBoardStyle } from "./style";
import "./style.ts"

export type ColorBoardProps = {
    colors: string[]
}

export const ColorBoard: React.FC<ColorBoardProps> = props => (
    <ColorBoardStyle>
        {props.colors.map(color => <ColorStripe color={color} key={color} />)}
    </ColorBoardStyle>
)