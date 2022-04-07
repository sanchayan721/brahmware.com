import { useEffect } from "react";
import { withRouter, useLocation } from "react-router-dom";

const NavScrollTop = (props) => {

    const location = useLocation();

    const eleminationList = new Set(['/services', '/pricing']);

    useEffect(() => {
        !eleminationList.has(location.pathname) && window.scrollTo(0, 0);
    });
    return props.children;
};

export default withRouter(NavScrollTop);
