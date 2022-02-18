import React from "react";
import PricingBanner from "../../../components/pricing-banner";

const PricingBannerContainer = () => {
    return (
        <div
            className="section pricing-banner-section"
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/pricing-bg.jpg)`,
            }}
        >
            <div className="container" data-aos="fade-up">
                <PricingBanner
                    title="<span>Simple pricing</span> that scales <br /> as you grow"
                    subtitle="Whether you’re a business in growth mode or just starting up"
                />
            </div>
        </div>
    );
};

export default PricingBannerContainer;
