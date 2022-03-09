import React from 'react';
import { NavLink } from "react-router-dom";

const CopyrightSocial = () => {
    return (
        <>
            <div className="footer-copyright">
                <p>
                    &copy; {new Date().getFullYear()}{" "}
                    <NavLink to="/">
                        Brahm<span>ware</span>
                    </NavLink>
                    . All Rights Reserved.
                </p>
            </div>
            <div className="footer-social">
                <ul className="social">
                    <li>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            className="twitter"
                            href="https://twitter.com/"
                        >
                            Twitter
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            className="facebook"
                            href="https://facebook.com/"
                        >
                            Facebook
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            className="linkedin"
                            href="https://linkedin.com/"
                        >
                            Linkedin
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default CopyrightSocial;
