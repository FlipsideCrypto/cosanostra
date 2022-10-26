import { useCallback, useRef, useState } from "react";

const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({
        left: 0,
        top: 0,
    });

    const handleMouseMove = useCallback(
        (e) =>
            setMousePosition({
                left: e.pageX,
                top: e.pageY,
            }),
        []
    );

    const ref = useRef();

    const callbackRef = useCallback(
        (node) => {
            if (ref.current) {
                ref.current.removeEventListener("mousemove", handleMouseMove);
            }

            ref.current = node;

            if (ref.current) {
                ref.current.addEventListener("mousemove", handleMouseMove);
            }
        },
        [handleMouseMove]
    );

    return [callbackRef, mousePosition];
};

export default useMousePosition;