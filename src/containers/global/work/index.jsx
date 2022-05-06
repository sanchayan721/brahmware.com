import React, { useState } from "react";
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";
import classnames from "classnames";
import SectionTitle from "../../../components/section-title";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import Work from "../../../components/work";
import WorkData from "../../../data/projects.json";
import { LeftarrowIcon, RightarrowIcon } from "../../../assets/icons";

SwiperCore.use([Navigation]);
const WorkContainer = () => {
    const [activeTab, setActiveTab] = useState("1");

    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };
    const swiperOption = {
        loop: true,
        speed: 600,
        spaceBetween: 1,
        slidesPerView: 4,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".tab-carousel .swiper-button-next",
            prevEl: ".tab-carousel .swiper-button-prev",
        },
        breakpoints: {
            // when window width is >= 320px
            0: {
                slidesPerView: 1,
            },
            // when window width is >= 480px
            576: {
                slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 3,
            },
            // when window width is >= 1200px
            1200: {
                slidesPerView: 4,
            },
        },
    };
    return (
        <div className="section mt-n10 pt-10 bg-dark mb-10">
            <div className="container pt-5">
                <div className="row">
                    <div className="row align-items-end">
                        <div className="col-xl-3 col-lg-4">
                            <SectionTitle classOption="mt-5" title="Works" />
                        </div>
                        {/* 
                        <div className="col-xl-9 col-lg-8">
                            <div
                                className="work-tabs-menu mt-5"
                                data-aos="fade-up"
                            >
                                <Nav tabs>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({
                                                active: activeTab === "1",
                                            })}
                                            onClick={() => {
                                                toggle("1");
                                            }}
                                        >
                                            All
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({
                                                active: activeTab === "2",
                                            })}
                                            onClick={() => {
                                                toggle("2");
                                            }}
                                        >
                                            Business Solutions
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({
                                                active: activeTab === "3",
                                            })}
                                            onClick={() => {
                                                toggle("3");
                                            }}
                                        >
                                            Branding
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({
                                                active: activeTab === "4",
                                            })}
                                            onClick={() => {
                                                toggle("4");
                                            }}
                                        >
                                            Tech Solutions
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="work-tab-content mt-2">
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Swiper className="tab-carousel" {...swiperOption}>
                            {WorkData &&
                                WorkData.map((single, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <Work key={i} data={single} />
                                        </SwiperSlide>
                                    );
                                })}
                            <div className="swiper-button-next">
                                <i className="right-arrow-icon"><RightarrowIcon /></i>
                            </div>
                            <div className="swiper-button-prev">
                                <i className="left-arrow-icon"><LeftarrowIcon /></i>
                            </div>
                        </Swiper>
                    </TabPane>
                    <TabPane tabId="2">
                        <Swiper className="tab-carousel" {...swiperOption}>
                            {WorkData &&
                                WorkData.map((single, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <Work key={i} data={single} />
                                        </SwiperSlide>
                                    );
                                })}
                            <div className="swiper-button-next">
                                <i className="right-arrow-icon"><RightarrowIcon /></i>
                            </div>
                            <div className="swiper-button-prev">
                                <i className="left-arrow-icon"><LeftarrowIcon /></i>
                            </div>
                        </Swiper>
                    </TabPane>
                    <TabPane tabId="3">
                        <Swiper className="tab-carousel" {...swiperOption}>
                            {WorkData &&
                                WorkData.map((single, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <Work key={i} data={single} />
                                        </SwiperSlide>
                                    );
                                })}
                            <div className="swiper-button-next">
                                <i className="right-arrow-icon"><RightarrowIcon /></i>
                            </div>
                            <div className="swiper-button-prev">
                                <i className="left-arrow-icon"><LeftarrowIcon /></i>
                            </div>
                        </Swiper>
                    </TabPane>
                    <TabPane tabId="4">
                        <Swiper className="tab-carousel" {...swiperOption}>
                            {WorkData &&
                                WorkData.map((single, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <Work key={i} data={single} />
                                        </SwiperSlide>
                                    );
                                })}
                            <div className="swiper-button-next">
                                <i className="right-arrow-icon"><RightarrowIcon /></i>
                            </div>
                            <div className="swiper-button-prev">
                                <i className="left-arrow-icon"><LeftarrowIcon /></i>
                            </div>
                        </Swiper>
                    </TabPane>
                </TabContent>
            </div>
        </div>
    );
};

export default WorkContainer;
