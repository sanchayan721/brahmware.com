import { Link } from "react-router-dom";
import { RightarrowIcon } from "../../../assets/icons";
import ArrowLink from "../../../components/arrowlink";
import StackGameComponent from "../../../components/stack-game";

const HomeAbout = () => {
    return (
        <div className="section bg-dark overflow-hidden">
            <div className="about-section section-padding mt-n3 mb-n1">
                <div className="container">
                    <div className="about-section-wrapper row">
                        <div
                            className="about-game col"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                            data-aos-delay='600'
                        >
                            <StackGameComponent />
                        </div>
                        <div
                            className="col"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                            data-aos-delay='600'
                        >

                            <div className="about-content">
                                <div className="section-title">
                                    <span className="title">A Bit About Us</span>
                                </div>
                                <p className="about-text">
                                    India born Organization. We work for brands and companies as a strategic partner and as a companion in interdisciplinary projects.
                                </p>
                                <p>
                                    Sometimes strategically advising. Sometimes creative and free thinking. Sometimes technically innovative implementation. But always a little further, unlike the others.
                                </p>
                                <p>
                                    We work just like the others. Just different. We simply do what others describe in a colorful way in soporific films.
                                    We are masters of holistic, concentrated and at the same time agile processes. We master all projects.
                                    From the quick contribution in social media to profound corporate and brand development to the technical implementation of complex individual Business solutions in the Internet that everyone is talking about.
                                </p>
                                <ArrowLink text="More" link="/about" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;
