import PropTypes from "prop-types";
import { Fragment } from "react";
import { NavLink, useLocation } from "react-router-dom";
/* import { getClosest, getSiblings, slideToggle, slideUp } from "../../utils"; */
import disableScroll from 'disable-scroll';
import CopyrightSocial from "../copyright-social";
import { navData as NavData } from "../../data/navmenu.json";
import { useState, useEffect } from "react";
import IconComponent from "../../utils/IconComponent";
import LocationComponent from "../location-component";

const HamburgerMenu = ({ show, onClose }) => {

    show ? disableScroll.on() : disableScroll.off();
    let thisLocation = useLocation();

    let [pageLocation, setPageLocation] = useState();

    useEffect(() => {
        setPageLocation(thisLocation.pathname)
    }, [thisLocation.pathname])

    return (
        <div className={`offcanvas-menu ${show ? "open" : ""}`}>
            <div className="offcanvas-wrapper container">
                <div className="primary-menu">
                    <div className="current-location">
                        {
                            pageLocation === "/contact" ?
                                <Fragment>
                                    <LocationComponent isContactPage={true} />
                                    <div className="title">
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: "Contact"
                                            }}
                                        />
                                    </div>
                                </Fragment> :
                                NavData.map((eachMenuItem, key) =>
                                    eachMenuItem.link === pageLocation &&
                                    <Fragment key={key}>
                                        <LocationComponent toShow={eachMenuItem.icon} />
                                        <div className="title">
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: eachMenuItem.title
                                                }}
                                            />
                                        </div>
                                    </Fragment>
                                )
                        }
                    </div>
                    <div className="separator" />
                    <ul>
                        {
                            NavData.map((eachMenuItem, key) =>
                                pageLocation !== eachMenuItem.link
                                &&
                                <li key={key}>
                                    <NavLink exact to={eachMenuItem.link}>
                                        <i>
                                            <IconComponent icon={eachMenuItem.icon} />
                                        </i>
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: eachMenuItem.title
                                            }}
                                        />
                                    </NavLink>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div className="navigation-footer container">
                    <CopyrightSocial />
                </div>
            </div>
        </div>
    );
};

HamburgerMenu.propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func,
};

export default HamburgerMenu;
