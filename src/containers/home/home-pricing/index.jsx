import React from 'react'
import ArrowLink from '../../../components/arrowlink';
import PricingTable from '../../../components/pricing-table';
import HomeData from '../../../data/home.json';

const PricingContainer = () => {
    return (
        <div className="section section-padding-2">
            <div className="container">
                <div className="home-pricing-section mt-n3">
                    <div
                        className='section-title'
                        data-aos='fade-up'
                        data-aos-duration='1200'
                    >
                        <h2 className="title">
                            Floor Pricing
                        </h2>
                    </div>
                    <div
                        className="home-pricing-wrapper"
                        data-aos='fade-up'
                        data-aos-duration='1200'
                    >
                        <PricingTable pricingData={HomeData[5].pricing} />
                        <div
                            className="floor-pricing-explained"
                            data-aos='fade-left'
                            data-aos-duration='1200'

                        >
                            * The price charged could be more than or less than the price mentioned depending upon project.
                            Contact us for details.
                        </div>
                        <div
                            className="do-more-section row"
                            data-aos='fade-up'
                            data-aos-duration='1200'

                        >
                            <div className="see-details col-md-4">
                                Find out <ArrowLink withoutComponent={false} text={"More"} link={"/pricing"} />
                            </div>
                            <div className="download-catalogue col-md-2">
                                <button className="download-button">
                                    Get Catalogue
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingContainer