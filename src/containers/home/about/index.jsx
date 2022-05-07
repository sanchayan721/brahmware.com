import ArrowLink from "../../../components/arrowlink";
import StackGameComponent from "../../../components/stack-game";

const HomeAbout = () => {
    return (
        <div className="section bg-dark overflow-hidden">
            <div className="about-section">
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
                                    A proud Indian-born organization that revamps your business with emerging technologies.
                                </p>
                                <p>
                                    We use a tremendous array of technologies as our Brahmastra to resolve distinct complex issues of every business. We collaborate with multiple businesses and assist them in strategizing effective business plans. We focus on delivering top-notch business solutions to our partners that will enhance the overall revenue of the company. We tailor our solutions according to your unique business needs so that they blend perfectly with your business requirements.
                                </p>
                                <p>
                                    Our expertise lies in providing solutions for all kinds of businesses and in every phase of the business from requirement analysis to final execution. We work on multi-disciplinary projects so whether it is about branding, social media services, marketing, corporate designs, website development, resolving complex business issues, or just a consultation on business analytics our dedicated team will come up with the strategies that will lead your business to achieve immense success.
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
