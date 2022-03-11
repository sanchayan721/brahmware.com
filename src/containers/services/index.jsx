import Content from '../../components/services-content';
import ServiceData from '../../data/services.json';
import { useState } from 'react';
import Service from '../../components/services-content/service';

const ServicesContainer = () => {
    const [backgroundVideo, setBackgroundVideo] = useState(ServiceData[0].services[0]);
    const mouseEnterData = (mouseEntered) => {
        setBackgroundVideo(mouseEntered);
    }
    const touchStartData = (touchStarted) => {
        setBackgroundVideo(touchStarted)
    }
    return (
        <div className='services section overflow-hidden'>
            <Content data={backgroundVideo} />

            <div className="page-banner-title">
                <div className="container">
                    <div
                        data-aos="fade-down"
                        data-aos-duration="1200"
                    >
                        <h5 className="services-subtitle sub-title">Get your business to the Next Level</h5>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        <h2 className="services-title title">Our <span>Services</span></h2>
                    </div>
                </div>
            </div>
            <div className="services-section mt-10 mb-10">
                <div className="container">

                    {
                        ServiceData[0].services.map((service, key) => {
                            return (
                                <Service
                                    sectionData={service}
                                    mouseEnterData={mouseEnterData}
                                    touchStartData={touchStartData}
                                    key={key}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ServicesContainer