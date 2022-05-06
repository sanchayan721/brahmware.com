import React from 'react';
import { AboutUsParagraphImage } from '../../assets/icons';
import { about_us } from "../../data/about-us.json";

const AboutUsContainer = () => {
    return (
        <div className='section aboutus-section'>
            <div className="container aboutus-content">
                <div
                    className="title"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay='0'
                >
                    Who We Are
                </div>
                <div className="content">
                    <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay='600'
                        className="aboutus-paragraph-graphics"
                    >
                        <AboutUsParagraphImage />
                    </div>
                    <div
                        data-aos="fade-left"
                        data-aos-duration="1200"
                        data-aos-delay='900'
                        className="paragraphs"
                    >
                        <div className="first-paragraph">
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: about_us.paragraph_1
                                }}
                            />
                        </div>
                        <div className="second-paragraph">
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: about_us.paragraph_2
                                }}
                            />
                        </div>
                        <div className="message">
                            <span dangerouslySetInnerHTML={{
                                __html: about_us.message
                            }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsContainer