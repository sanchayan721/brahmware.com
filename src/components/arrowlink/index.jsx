import React from 'react';
import { Link } from 'react-router-dom';
import { RightarrowIcon } from '../../assets/icons';

const ArrowLink = (props) => {
    return (
        <>

            {props.withoutComponent ?
                <a href={props.link} className='arrow-link'>
                    <div className="arrow-link__box">
                        <span className='text'>
                            {props.text}
                        </span>
                        <div className='right-arrow-icon'><RightarrowIcon /></div>
                    </div>
                </a>
                :
                <Link to={props.link} className='arrow-link'>
                    <div className="arrow-link__box">
                        <span className='text'>
                            {props.text}
                        </span>
                        <div className='right-arrow-icon'><RightarrowIcon /></div>
                    </div>
                </Link>
            }
        </>

    )
}

export default ArrowLink;