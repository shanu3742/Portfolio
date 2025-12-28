import { useEffect, useState } from "react";

const useTypeWriter = (text = "", speed = 30) => {
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            setDisplayText((prev) => {
                if (index >= text.length) {
                    clearInterval(interval);
                    return prev;
                }

                const nextText = prev + text[index];
                index++;
                return nextText;
            });
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return displayText;
};

export default useTypeWriter;
