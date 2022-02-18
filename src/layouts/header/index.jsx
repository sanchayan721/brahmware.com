import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "../../components/hamburger-menu";
import Logo from "../../components/logo";
import MenuOverlay from "../../components/menu-overlay";

const Header = () => {
    const [ofcanvasShow, setOffcanvasShow] = useState(false);
    const onCanvasHandler = () => {
        setOffcanvasShow((prev) => !prev);
    };
    const [scroll, setScroll] = useState(0);
    const [headerTop, setHeaderTop] = useState(0);
    useEffect(() => {
        const header = document.querySelector(".fixed-top");
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
                                        scroll > headerTop ? <Logo image={`${process.env.PUBLIC_URL}/images/world_mark.svg`} />
                                            : <Logo image={`${process.env.PUBLIC_URL}/images/seed_of_life_full.svg`} />
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="right">
                            <div className="header-contact-us">
                                <Link to='/'>Contact Us</Link>
                            </div>

                            <div className="header-menu-toggler">
                                <button
                                    className="menu-toggler"
                                    onClick={onCanvasHandler}
                                >
                                    <i className="fal fa-bars"></i>
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
