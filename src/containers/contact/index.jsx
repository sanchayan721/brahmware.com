import { FacebookIcon, LinkedinIcon, OnlineIcon, TwitterIcon } from "../../assets/icons";
import ContactForm from "../../components/contact-form";
import ContactOffice from "../../components/contact-offices";
import MapComponent from "../../components/map";
import LocationData from "../../data/available-location.json";

const ContactContainer = () => {
    return (
        <div className="container">
            <div className="contact-section">
                <div className="map">
                    <div
                        className="title"
                        data-aos='fade-right'
                        data-aos-duration='1200'
                    >
                        We are <span>Here</span>
                    </div>
                    <div
                        data-aos='fade-left'
                        data-aos-duration='1200'
                        data-aos-delay='1200'
                    >
                        <MapComponent locations={LocationData} />
                    </div>
                </div>
                <div className="contactus row">
                    <div className="col-md-6">
                        <div className="office-addresses">
                            {
                                LocationData.map((office, officeKey) => {
                                    return (
                                        <ContactOffice
                                            key={officeKey}
                                            office={office}
                                        />
                                    )
                                })
                            }
                            <div
                                className="office row"
                                data-aos="fade-right"
                                data-aos-duration="1200"
                            >
                                <div className="icon-side col-md-4 row mx-0 px-0">
                                    <OnlineIcon />
                                </div>
                                <div
                                    className="col row"
                                    data-aos="fade-left"
                                    data-aos-duration="1200"
                                    data-aos-delay="600"
                                >
                                    <div className="title">
                                        @ <span>Online</span>
                                    </div>
                                    <div className="email">
                                        <a href="mailto:hello@brahmware.com">
                                            hello@brahm<span>ware</span>.com
                                        </a>
                                    </div>
                                    <div
                                        className="social-icons"
                                    >
                                        <a
                                            className="facebook"
                                            href="https://twitter.com/brahmware"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <TwitterIcon />
                                        </a>
                                        <a
                                            className="facebook"
                                            href="https://www.linkedin.com/company/brahmware"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <LinkedinIcon />
                                        </a>
                                        <a
                                            className="facebook"
                                            href="https://www.facebook.com/brahmware"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <FacebookIcon />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="contact-section-wrapper">
                            <div
                                className="contact-info"
                                data-aos='fade-left'
                                data-aos-duration='1200'
                            >
                                <div className="section-heading">
                                    <div className="title">
                                        Contact <span>Us</span>
                                    </div>
                                    <div className="description">
                                        <span>
                                            Thank you for your interest.
                                            Please fill out the form below to inquire about our work in Digital.
                                        </span>
                                    </div>
                                    <div className="note">
                                        <span>
                                            Required fields are marked with an asterisk (*).
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="contact-form"
                            data-aos='fade-left'
                            data-aos-duration='1200'
                            data-aos-delay='300'
                        >
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactContainer;
