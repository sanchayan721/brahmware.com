import { Fragment, useEffect, useState } from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import HamburgerMenu from "../../components/hamburger-menu";
import MenuOverlay from "../../components/menu-overlay";
import { HamburgerIcon } from '../../assets/icons';
import LogoPositioning from "../../components/logo/LogoPositioning";

const Header = () => {

    const routes = ['/contact', '/career'];

    const usePathPattern = () => {
        const { pathname } = useLocation();
        return matchPath(pathname, routes)?.path;
    }

    const [ofcanvasShow, setOffcanvasShow] = useState(false);

    const onCanvasHandler = () => {
        setOffcanvasShow((prev) => !prev);
    };
    const [scroll, setScroll] = useState(0);
    const [headerTop, setHeaderTop] = useState(0);
    useEffect(() => {
        const header = document.querySelector(".header");
        setHeaderTop(header.offsetTop);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = ({ }) => {
        setScroll(window.scrollY);
    };
    return (
        <Fragment>
            <div
                className={`header fixed-top ${scroll > headerTop ? "sticky p-2" : ""
                    }`}
            >
                <div className="container custom-container">
                    <div className="header-wrapper">
                        <div className="left">
                            <div className="logo-box">
                                <div className="logo">
                                    {
                                        <LogoPositioning scrollPosition={scroll} headerTopHeight={headerTop} />
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="right">
                            {
                                usePathPattern() ?
                                    null
                                    : <div className="header-contact-us">
                                        <Link to='/contact'>
                                            <span>Start Here</span>
                                        </Link>
                                    </div>
                            }

                            <div className="header-menu-toggler">
                                <button
                                    className="menu-toggler"
                                    onClick={onCanvasHandler}
                                >
                                    <i className={!ofcanvasShow ? "hamburger-menu" : "hamburger-menu close"}><HamburgerIcon /></i>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <HamburgerMenu show={ofcanvasShow} onClose={onCanvasHandler} />
            <MenuOverlay show={ofcanvasShow} />
        </Fragment>
    );
};

export default Header;
