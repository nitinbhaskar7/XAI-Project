import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, [location]);

    return null;
}
