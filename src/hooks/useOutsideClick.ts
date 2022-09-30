import { useEffect, MutableRefObject } from "react";

export const useOnClickOutside = (ref: MutableRefObject<any>, callback: () => void) => {
    useEffect(
        () => {
            console.log("listen");
            const listener = (e: MouseEvent) => {
                
                if (!ref.current || ref.current.contains(e.target)) {
                    return;
                }
                callback();
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        },

        [ref, callback]
    );
}