import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "../../assets/icons";

const ProjectDetailsContainer = ({ data }) => {
    return (
        <div className="section project-details-section">
            <div className="custom-container container-fluid">
                <div
                    className="details-images"
                    data-aos="fade-up"
                    data-aos-duration="600"
                >
                    <img
                        src={data.media.image}
                        alt="Project Details"
                    />
                </div>
            </div>

            <div className="container">
                <div
                    className="details-challenge section-padding-02 mt-n1"
                    data-aos="fade-up"
                    data-aos-duration="900"
                >
                    <h5 className="details-label">{data.cate}</h5>

                    <h1 className="title">{data.title}</h1>
                </div>

                <div className="details-info section-padding mt-n10">
                    <div
                        className="row"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        <div className="col-lg-3">
                            <div className="single-info">
                                <h5 className="details-label">the challenge</h5>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: data.challenge,
                                    }}
                                ></p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="single-info">
                                <h5 className="details-label">Date</h5>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: data.date,
                                    }}
                                ></p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="single-info">
                                <h5 className="details-label">team</h5>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: data.team,
                                    }}
                                ></p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="single-info">
                                <h5 className="details-label">Services Used</h5>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: data.service
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="details-middle-content section-padding-02 mt-n2"
                    data-aos="fade-up"
                >
                    <h2 className="title">{data.subTitle}</h2>
                    {data.body.map((value, i) => {
                        return (
                            <div
                                key={i}
                                className="desc"
                                dangerouslySetInnerHTML={{
                                    __html: value,
                                }}
                            />
                        );
                    })}
                </div>
            </div>

            <div className="custom-container container-fluid">
                <div className="column-images">
                    <div className="row">
                        <div
                            className="col-lg-6"
                            data-aos="fade-up"
                            data-aos-duration="600"
                        >
                            <div
                                className="details-images mt-6 wow fadeInLeft"
                                data-wow-delay="0.3s"
                                data-wow-duration="1.5s"
                            >
                                <img
                                    src={data.gallery.imageOne}
                                    alt="Project Details"
                                />
                            </div>
                        </div>
                        <div
                            className="col-lg-6"
                            data-aos="fade-up"
                            data-aos-duration="900"
                        >
                            <div
                                className="details-images mt-6 wow fadeInRight"
                                data-wow-delay="0.3s"
                                data-wow-duration="1.5s"
                            >
                                <img
                                    src={data.gallery.imageTwo}
                                    alt="Project Details"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="container"
                data-aos="fade-up"
                data-aos-duration="1200"
            >
                <div className="blockquote section-padding-02  mt-n3">
                    <p
                        dangerouslySetInnerHTML={{
                            __html: data.quote,
                        }}
                    ></p>
                </div>

                <div className="author-info">
                    <h4 className="name">{data.name}</h4>
                    <p>{data.designation}</p>
                </div>

                <div className="details-images section-padding-02 mt-n2">
                    <img
                        src={data.gallery.imageThree}
                        alt="Project Details"
                    />
                </div>

                <div className="details-social" data-aos="fade-up">
                    <h5 className="details-label">Share on social</h5>
                    <ul className="social">
                        <li>
                            <NavLink to={{ pathname: "https://twitter.com/" }} target="_blank">
                                <i className="social-icon"><TwitterIcon /></i>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={{ pathname: "https://linkedin.com/" }} target="_blank">
                                <i className="social-icon"><LinkedinIcon /></i>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={{ pathname: "https://facebook.com/" }} target="_blank">
                                <i className="social-icon"><FacebookIcon /></i>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

ProjectDetailsContainer.propTypes = {
    data: PropTypes.object,
};

export default ProjectDetailsContainer;
