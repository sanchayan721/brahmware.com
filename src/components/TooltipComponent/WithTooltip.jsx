import React from "react";
import { TooltipComponent } from "./TooltipComponent";


const WithToolTip = ({ color, message, children, showChangeState }) => {

    const [show, setShow] = React.useState(false)

    return (
        <React.Fragment>
            {
                message ?
                    <TooltipComponent
                        title={message}
                        color={color}
                        open={show}
                        disableHoverListener
                        onMouseEnter={() => setShow(true)}
                        onMouseLeave={() => setShow(false)}
                    >
                        <span onClick={() => !showChangeState && setShow(false)}>
                            {children}
                        </span>
                    </TooltipComponent>
                    :
                    children
            }
        </React.Fragment>
    )

};

export default WithToolTip;