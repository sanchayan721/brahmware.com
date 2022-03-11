import React from 'react';

const Service = (props) => {
    return (
        <div
            className="service-type"
            onMouseEnter={() => props.mouseEnterData(props.sectionData)}
            onTouchStart={() => props.touchStartData(props.sectionData)}
        >
            <div
                className='row'
            >
                <div className="col-lg-3">
                    <div className="service-title"
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="300"
                    >
                        <span className="title">
                            {props.sectionData.title}
                        </span>
                    </div>
                </div>
                <div className="col-lg-9"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                    data-aos-delay="300"
                >
                    {props.sectionData.types.map((type, key) => {
                        return (
                            <div className="each-type" key={key}>
                                <div className="type-title">
                                    <h2
                                        className="title"
                                        dangerouslySetInnerHTML={{
                                            __html: type,
                                        }}
                                    ></h2>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Service;