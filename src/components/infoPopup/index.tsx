import React, { forwardRef, MutableRefObject, PropsWithChildren, PropsWithRef } from "react";
import { InfoPopupStyle } from "./style";

type Ref = HTMLDivElement

export type InfoPopupProps = {
    onClose: () => void
}

export const InfoPopup = forwardRef<Ref, InfoPopupProps>((props, ref) => (
    <InfoPopupStyle ref={ref}>
        <div>
            1. Open menu in the left top corner
        </div>
        <div>
            2. Select color and scheme type
        </div>
        <div>
            3. Press enter to generate some colorzzz
        </div>
        <button onClick={props.onClose}>I understand</button>
    </InfoPopupStyle>
))