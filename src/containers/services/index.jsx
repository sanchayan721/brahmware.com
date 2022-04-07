import Content from '../../components/services-content';
import ServiceData from '../../data/services.json';
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Service from '../../components/services-content/service';
import TabComponent from '../../components/services-tab';

const ServicesContainer = () => {

    const [backgroundVideo, setBackgroundVideo] = useState(ServiceData.services[0]);
    const mouseEnterData = (mouseEntered) => {
        setBackgroundVideo(mouseEntered);
    }
    const touchStartData = (touchStarted) => {
        setBackgroundVideo(touchStarted)
    }

    const serviceTypeRefs = useRef([]);
    const [placeToScroll, setPlaceToScroll] = useState(null);
    const location = useLocation();

    const clickedOnTab = (event) => {
        event.preventDefault();
        let clickedTab = event.target.id.split(/_(.*)/s);
        setPlaceToScroll(clickedTab[1]);
    }


    useEffect(() => {
        serviceTypeRefs.current.map((serviceTypeRef) => (
            `#${serviceTypeRef.id}` === location.hash || serviceTypeRef.id === placeToScroll) &&
            serviceTypeRef.scrollIntoView(
                {
                    behavior: "smooth"
                }
            )
        )
        setPlaceToScroll(null);
    }, [location.hash, placeToScroll])

    /* const scrollToRef = (scrollPosition) => {
        window.scrollTo(
            {
                top: scrollPosition,
                left: 0,
                behavior: 'smooth'
            });
    } */


    return (
        <div className='services section'>
            <Content data={backgroundVideo} />

            <div className="page-banner-title">
                <div className="container">
                    <div
                        data-aos="fade-down"
                        data-aos-duration="1200"
                    >
                        <h5 className="services-subtitle sub-title">Let's take your business to the Next Level</h5>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        <div className='head-section'>
                            <h2 className="services-title title">Our <span>Services</span></h2>
                            <TabComponent
                                data={ServiceData.services}
                                clickedOnTab={clickedOnTab}
                            />
                        </div>
                    </div>
                    <div className="details-section">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="1200"
                            data-aos-delay="600"
                        >
                            <p>
                                All of our services hinge around our promise of delivering brand awareness, traffic and leads by bringing content,
                                marketing and sales together. Each of our Business Hubs feed into whichever digital marketing service that you require.
                                Our innovative approach ensures that your business – whether small or large – receives perfectly tailored strategic insight
                                and added value. They are the axis around which everything else revolves.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="services-section mt-10 mb-10">
                <div className="container">

                    {
                        ServiceData.services.map((service, key) => {
                            let restOftheServices = [...ServiceData.services];
                            restOftheServices.splice(key, 1);
                            return (
                                <Service
                                    key={key}
                                    sectionData={service}
                                    mouseEnterData={mouseEnterData}
                                    touchStartData={touchStartData}
                                    otherServices={restOftheServices}
                                    serviceTypeRef={element => serviceTypeRefs.current[key] = element}
                                    clickedOnTab={clickedOnTab}
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