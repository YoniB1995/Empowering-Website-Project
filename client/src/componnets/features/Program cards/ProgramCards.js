import Card from "../card/Card";
import ProgramCardsData from "./ProgramCardsData";
import './ProgramCards.css'

import React from 'react'

export default function ProgramCards() {
    return (<div className="divMain">
        {ProgramCardsData.map((data, key) => {
            return <Card key={key}
                h1={data.h1}
                title={data.title}
                icon={data.icon} ></Card>
        }
        )}
    </div>
    )
}

