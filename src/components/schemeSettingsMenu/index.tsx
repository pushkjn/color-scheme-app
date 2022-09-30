import React, { PropsWithChildren, useCallback, useRef, useState } from "react";
import { useKeypress } from "../../hooks/useKeypress";
import { useOnClickOutside } from "../../hooks/useOutsideClick";
import { SchemeSettingsMenuStyle } from "./style";

const hiddenStyle = {
    transform: 'translateY(-90%)',
}

export const SchemeSettingsMenu: React.FC<PropsWithChildren> = props => {
    const [opened, setOpened] = useState(false)
    const menuRef = useRef(null)
    const closeMenu = useCallback(() => setOpened(false), [])
    const menuText = opened ? 'Close menu' : 'Open menu'

    useOnClickOutside(menuRef, closeMenu)

    useKeypress("Escape", closeMenu)

    return (
        <div>
            <SchemeSettingsMenuStyle style={opened ? {} : hiddenStyle} ref={menuRef}>
                {props.children}
                <button onClick={() => setOpened(!opened)}>{menuText}</button>
            </SchemeSettingsMenuStyle>
        </div>
    )
}