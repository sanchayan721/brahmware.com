import { TooltipComponent } from "./TooltipComponent";


const WithToolTip = ({ color, message, children }) => (
    <>
        {
            message ?
                <TooltipComponent
                    title={message}
                    color={color}
                >
                    <span>
                        {children}
                    </span>
                </TooltipComponent>
                :
                children
        }
    </>
);

export default WithToolTip;