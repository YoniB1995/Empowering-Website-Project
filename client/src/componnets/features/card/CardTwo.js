import React from 'react';
import './cardTwo.css'

export default function CardTwo(props) {
    const { icon, description } = props;
    return (
        <div>
            <div className="cards">
                <i className={icon}><span className="span">{description}</span></i>
            </div>
        </div>
    )
}
