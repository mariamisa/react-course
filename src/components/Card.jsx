import React from 'react'

import './card.css'

export default function Card({monster}) {
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${monster.id}`} alt="img"/>
            <p>{monster.name}</p>
            <p>{monster.email}</p>
        </div>
    )
}
