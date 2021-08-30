import React from 'react'
import './GoalsCards.css'
import GoalsData from './GoalsData';
import CardTwo from '../../../features/card/CardTwo';

export default function GoalsCards() {
    return (<div className="main">
        <h1 className="goalsHeader">מטרות</h1> {
            GoalsData.map((data, key) => {
                return <div key={key} className="cards">
                    <div className="whiteCard">
                    <CardTwo icon={data.icon}
                        description={data.description}></CardTwo>
                        </div>
                        <div className="pinkCard">
                    <CardTwo icon={data.icon}
                        description={data.description}></CardTwo>
                        </div>          
                </div>
            })
        }

    </div>

    )
}
