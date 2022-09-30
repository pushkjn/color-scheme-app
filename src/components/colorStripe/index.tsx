import styled from "styled-components"

export type ColorStripeProps = {
    color: string
}

export const ColorStripe = styled.div<ColorStripeProps>`
    flex-grow: 1;
    background: ${props => props.color};
    height: 100%;
`
