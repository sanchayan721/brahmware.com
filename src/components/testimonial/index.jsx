import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

const Testimonial = ({ data }) => {

    return (
        <div className="single-testimonial noselect">
            <div className="testimonial-author">
                <i className="testimonial-icon">
                    <img src={data.icon} alt={data.name} />
                </i>
                <div className="name">
                    <div className="author-name"><span>{data.name}</span></div>
                    <div className="author-designation"><span>{data.designation}</span></div>
                </div>
            </div>
            <div className="testimonial-content">
                <p>{data.excerpt}</p>
            </div>
        </div>
    );
};

Testimonial.propTypes = {
    data: PropTypes.object,
};

export default Testimonial;
