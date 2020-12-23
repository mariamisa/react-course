import React from 'react'

import './card.css'

export default function Card({monster}) {
    return (
        <div className="card-container">
            <p>{monster.name}</p>
            <p>{monster.email}</p>
        </div>
    )
}
