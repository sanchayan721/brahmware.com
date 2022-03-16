import React from "react";
//import IconBox from "../../../components/icon-box";
import IconServices from "../../../components/icon-services";
import SectionTitle from "../../../components/section-title";
import ServiceData from "../../../data/services.json";

const OurBrahmandContainer = () => {
    return (
        <div className="section section-padding-02">
            <div className="container">
                <div className="our-brahmand-section mt-n3">
                    <SectionTitle title="Our Brahmand" />

                    <div
                        className="our-brahmand-wrapper"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-once="false"
                    >
                        <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 gx-3 gy-3">
                            {ServiceData.services &&
                                ServiceData.services.map((single, key) => {
                                    return (
                                        <div key={key} className="col">
                                            <IconServices key={key} data={single} />
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurBrahmandContainer;
