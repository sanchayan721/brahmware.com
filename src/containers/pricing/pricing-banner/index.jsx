import React from "react";
import { PricingBannerBackgroundImage } from "../../../assets/backgrounds";
import PricingBanner from "../../../components/pricing-banner";

const PricingBannerContainer = () => {
    return (
        <div
            className="section pricing-banner-section"
        >
            <div className="pricing-banner-background">
                <PricingBannerBackgroundImage />
            </div>
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
