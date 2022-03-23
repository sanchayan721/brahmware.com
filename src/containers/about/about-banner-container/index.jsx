import React from "react";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "../../../assets/icons";
import AboutBannerContent from "../../../components/about-banner-content";
import SocialIcon from "../../../components/social-icon";
import AboutData from "../../../data/about.json";

const AboutBannerContainer = () => {
    return (
        <div className="section about-banner-section overflow-hidden">
            <div className="about-banner d-flex align-items-center">
                <div className="container">
                    <AboutBannerContent data={AboutData[1]} />
                </div>

                <div className="about-banner-image">
                    <img src="/images/seed_of_life.svg" alt="seed of life" />
                </div>
            </div>

            <div className="container">
                <ul className="social">
                    <li>
                        <SocialIcon
                            path="https://twitter.com/brahmware"
                            icon={<TwitterIcon />}
                        />
                    </li>
                    <li>
                        <SocialIcon
                            path="https://www.linkedin.com/company/brahmware"
                            icon={<LinkedinIcon />}
                        />
                    </li>
                    <li>
                        <SocialIcon
                            path="https://www.facebook.com/brahmware"
                            icon={<FacebookIcon />}
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AboutBannerContainer;
