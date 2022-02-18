import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useHover from "../../hooks/use-hover";

const IconServices = ({ data }) => {
    const [hoverRef, isHovered] = useHover();

    return (
        <div
            ref={hoverRef}
            className={`service-box ${isHovered ? "active" : " "}`}
        >

            <div className="box-part">

                <i className={data.icon} aria-hidden="true"></i>

                <div className="title">
                    <h4><Link to="/">{data.title}</Link></h4>
                </div>

                <div className="text">
                    <span>{data.excerpt}</span>
                </div>

                <Link to={process.env.PUBLIC_URL + "/about"} className="more">
                    Learn More
                </Link>

            </div>
        </div>
    );
};

IconServices.propTypes = {
    data: PropTypes.object,
};

export default IconServices;
