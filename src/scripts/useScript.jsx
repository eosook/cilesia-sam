import { useEffect } from "react";

const useScript = url => {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = "https://square.site/appointments/buyer/widget/vp26zekhc1y452/L91FW9Z6QEKDK.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, url);
}

export default useScript;