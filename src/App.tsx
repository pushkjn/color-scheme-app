import React, { useCallback, useRef, useState } from 'react'
import "./globalStyle.ts"
import { ColorController } from './components/colorController'
import { InfoPopup } from './components/infoPopup'
import { useOnClickOutside } from './hooks/useOutsideClick'
import { GlobalStyle } from './globalStyle'

export const App = () => {
    const [popupOpened, setPopupOpened] = useState(true)
    const popupRef = useRef(null)
    const closePopup = useCallback(
        () => setPopupOpened(false),
        []
    )

    useOnClickOutside(popupRef, closePopup)

    return (
        <>
            <GlobalStyle />

            {popupOpened ?
                <InfoPopup
                    onClose={closePopup}
                    ref={popupRef}
                /> : ''
            }
            
            <ColorController />
        </>
    )
}