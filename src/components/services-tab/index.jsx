import React from 'react';
import ArrowLink from '../arrowlink';

const TabComponent = (props) => {
    return (
        <div className="tab-component">
            {
                props.data.map((tab, tabKey) => {
                    return (
                        <div className="tab" key={tabKey}>
                            <ArrowLink
                                text={tab.title}
                                link={`#${tab.link}`}
                                withoutComponent={true}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TabComponent