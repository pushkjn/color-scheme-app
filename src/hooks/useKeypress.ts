import { useEffect } from "react"

export const useKeypress = (key: string, callback: () => void) => {
    const handleKeypress = (e: KeyboardEvent) => {
        
        if (e.key == key)
            callback()
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeypress)

        return () => {
            document.removeEventListener('keydown', handleKeypress)
        }

    }, [callback])
}