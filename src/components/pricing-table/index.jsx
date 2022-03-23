import React, { useState, useEffect } from 'react';
import { CrossIcon, TickIcon } from '../../assets/icons';
import IconComponent from '../../utils/IconComponent';
import TableFixedComponent from './TableFixedComponent';

const PricingTable = (props) => {
    const pricing = props.pricingData;
    const all_keys = {
        "business_solutions": Object.keys(pricing[3].packageDetails[0].solutionDetails),
        "branding": Object.keys(pricing[3].packageDetails[1].solutionDetails),
        "tech_solutions": Object.keys(pricing[3].packageDetails[2].solutionDetails)
    }


    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = ({ }) => {
        if (window.scrollY >= 0) {
            const header = document.querySelector(".header");
            setHeaderHeight(header.offsetHeight)
        }
    };

    return (
        <div className="pricing-table container-fluid row w-100">
            {
                pricing.map((eachPackage, key) => {
                    return (
                        <>
                            <TableFixedComponent
                                headerHeight={headerHeight}
                                fixedclass={`fixedclass_${eachPackage.packageID}`}
                            />
                            <ul
                                className="package-details col-md-2 col-5"
                                key={key}
                            >
                                <li className="package-label row">
                                    <i className="package-icon">
                                        <IconComponent icon={eachPackage.packageIcon} />
                                    </i>
                                </li>
                                <li className="service-label row">
                                    <div
                                        className="title"
                                        style={{ top: `${headerHeight}px` }}
                                    >
                                        <div className="item-wrapper">
                                            {eachPackage.packageName}
                                        </div>
                                    </div>
                                    <ul>
                                        {
                                            all_keys.business_solutions.map((keyName, key) => {
                                                return (
                                                    eachPackage.packageDetails[0].solutionDetails[keyName] ?
                                                        <li key={key} className="service row">
                                                            <div className="item-wrapper span-list">
                                                                {
                                                                    eachPackage.packageDetails[0].solutionDetails[keyName].map((item, itemKey) => {
                                                                        return (
                                                                            <span className="item">
                                                                                {item}
                                                                                {
                                                                                    itemKey === eachPackage.packageDetails[0].solutionDetails[keyName].length - 1 ? '' : ' + '
                                                                                }
                                                                            </span>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        </li>
                                                        :
                                                        <li className="service fl row">
                                                            <div className="item-wrapper">
                                                                <CrossIcon />
                                                            </div>
                                                        </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </li>
                                <li className="service-label row">
                                    <div
                                        className="title"
                                        style={{ top: `${headerHeight}px` }}
                                    >
                                        <div className="item-wrapper">
                                            {eachPackage.packageName}
                                        </div>
                                    </div>
                                    <ul>
                                        {
                                            all_keys.branding.map((keyName, key) => {
                                                return (
                                                    eachPackage.packageDetails[1].solutionDetails[keyName] ?
                                                        <li key={key} className="service row">
                                                            <div className="item-wrapper span-list">
                                                                {
                                                                    eachPackage.packageDetails[1].solutionDetails[keyName].map((item, itemKey) => {
                                                                        return (
                                                                            <span className="item">
                                                                                {item}
                                                                                {
                                                                                    itemKey === eachPackage.packageDetails[1].solutionDetails[keyName].length - 1 ? '' : ' + '
                                                                                }
                                                                            </span>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        </li>
                                                        :
                                                        <li className="service fl row">
                                                            <div className="item-wrapper">
                                                                <CrossIcon />
                                                            </div>
                                                        </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </li>
                                <li className="service-label row">
                                    <div
                                        className="title"
                                        style={{ top: `${headerHeight}px` }}
                                    >
                                        <div className="item-wrapper">
                                            {eachPackage.packageName}
                                        </div>
                                    </div>
                                    <ul>
                                        {
                                            all_keys.tech_solutions.map((keyName, key) => {
                                                return (
                                                    eachPackage.packageDetails[2].solutionDetails[keyName] ?
                                                        <li key={key} className="service row">
                                                            <div className="item-wrapper span-list">
                                                                {
                                                                    eachPackage.packageDetails[2].solutionDetails[keyName].map((item, itemKey) => {
                                                                        return (
                                                                            <span className="item">
                                                                                {item}
                                                                                {
                                                                                    itemKey === eachPackage.packageDetails[2].solutionDetails[keyName].length - 1 ? '' : ' + '
                                                                                }
                                                                            </span>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        </li>
                                                        :
                                                        <li className="service fl row">
                                                            <div className="item-wrapper">
                                                                <CrossIcon />
                                                            </div>
                                                        </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </li>
                                <li className="service-label row">
                                    <div className="floor-price">
                                        <div className="item-wrapper">
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: eachPackage.packagePrice
                                                }}
                                            />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </>
                    )
                })
            }
        </div>
    )
}

export default PricingTable