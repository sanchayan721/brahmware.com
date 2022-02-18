import { Link, NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="section bg-dark">
            <div className="container">
                <div className="footer-info-box text-center">
                    <h4 className="title">Ready to get more from your Business?</h4>
                    <h5 className="subtitle">Let's discuss your Project</h5>
                    <h2 className="mail">
                        <a href="mailto:someone@example.com">
                            <span>hello@brahm</span>ware<span>.com</span>
                        </a>
                    </h2>
                </div>

                <div className="footer-copyright-social">
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
                </div>
            </div>
        </div>
    );
};

export default Footer;
