import React, { useEffect, useState } from "react";
import { ScrollToTopIcon } from "../../assets/icons";

const ScrollToTop = (props) => {
    const [stick, setStick] = useState(false);
    const onClickHandler = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        var position = window.pageYOffset;

        const scrollHandler = () => {
            let scrollPos = window.pageYOffset;
            if (scrollPos < 200) {
                setStick(false);
            } else if (scrollPos < position) {
                setStick(true);
            } else {
                setStick(false);
            }
            position = scrollPos;
        };

        window.addEventListener("scroll", function () {
            scrollHandler();
        });
        return () => {
            window.removeEventListener("scroll", function () {
                scrollHandler();
            });
        };
    }, [stick]);

    return (
        <button
            type="button"
            className={`scroll-to-top ${stick ? "show" : ""}`}
            onClick={onClickHandler}
            {...props}
        >
            <i className="scroll-to-top-icon"><ScrollToTopIcon /></i>
        </button>
    );
};

export default ScrollToTop;
