import React from "react";
import { TooltipComponent } from "./TooltipComponent";

const WithToolTip = ({
    index,
    color,
    textColor,
    message,
    children,
    showChangeState,
    tooltipPlacement,
    tooltipMargin
}) => {

    const [show, setShow] = React.useState(false);

    const onMouseEnterBehaviour = () => {
        setShow(true);
        setTimeout(() => setShow(false), 1000);
    }

    return (
        <React.Fragment key={index}>
            {
                message ?
                    <TooltipComponent
                        title={message}
                        color={color}
                        textColor={textColor}
                        open={show}
                        disableHoverListener
                        onMouseEnter={onMouseEnterBehaviour}
                        onMouseLeave={() => setShow(false)}
                        placement={tooltipPlacement ? tooltipPlacement : 'bottom'}
                        tooltipMargin={tooltipMargin}
                        arrow={true}
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